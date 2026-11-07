import { NextResponse } from 'next/server'
import { getCloudflareContext } from "@opennextjs/cloudflare"

const MAX_DEVICES = 4 // Starting Offer: 4 Devices. Change to 3 later when sales increase.

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')?.trim()
  const deviceId = searchParams.get('device_id')?.trim() || req.headers.get('x-device-id')?.trim() || ''

  if (!key) return NextResponse.json({ valid: false, error: 'Please enter your license key.' })

  const { env } = await getCloudflareContext() as any

  // ===== 1. VERIFY KEY =====
  let isValid = false
  let source = ''

  if (key.startsWith('VELORA-')) {
    const myKeys = (env.VELORA_KEYS || '').split(',').map((k: string) => k.trim()).filter(Boolean)
    if (myKeys.includes(key)) { isValid = true; source = 'velora' }
    else return NextResponse.json({ valid: false, error: 'Invalid Velora license key.' })
  } else {
    // Gumroad
    if (!env.GUMROAD_PRODUCT_ID) {
      return NextResponse.json({ valid: false, error: 'Gumroad is not configured yet.' })
    }
    try {
      const gumRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `product_id=${env.GUMROAD_PRODUCT_ID}&license_key=${encodeURIComponent(key)}`
      })
      const gumData: any = await gumRes.json()
      if (gumData.success) { isValid = true; source = 'gumroad' }
      else return NextResponse.json({ valid: false, error: 'Invalid Gumroad license key.' })
    } catch {
      return NextResponse.json({ valid: false, error: 'Invalid Gumroad license key.' })
    }
  }

  if (!isValid) return NextResponse.json({ valid: false, error: 'Invalid license key.' })

  // ===== 2. DEVICE LIMIT - 1 LICENSE = UP TO 4 DEVICES =====
  // If no device_id or no DB, allow without locking (backward compatibility)
  if (!deviceId || !env.DB) {
    return NextResponse.json({ valid: true, source })
  }

  const now = Date.now()
  const existing: any = await env.DB.prepare(
    'SELECT device_id, device_ids FROM licenses WHERE license_key = ?'
  ).bind(key).first()

  if (!existing) {
    // First activation - lock to this device
    const devices = JSON.stringify([deviceId])
    await env.DB.prepare(
      'INSERT INTO licenses (license_key, device_id, device_ids, first_activated_at, last_seen_at) VALUES (?, ?, ?, ?, ?)'
    ).bind(key, deviceId, devices, now, now).run()
    return NextResponse.json({ valid: true, source, device: 'locked' })
  }

  // Parse already registered devices - supports old single device_id + new device_ids list
  let devices: string[] = []
  if (existing.device_ids) {
    try { devices = JSON.parse(existing.device_ids) } catch { devices = [] }
  }
  // Migration: old record with only device_id
  if (devices.length === 0 && existing.device_id) {
    devices = [existing.device_id]
  }

  // Same device - allow
  if (devices.includes(deviceId)) {
    await env.DB.prepare(
      'UPDATE licenses SET last_seen_at = ? WHERE license_key = ?'
    ).bind(now, key).run()
    return NextResponse.json({ valid: true, source, device: 'same' })
  }

  // Limit reached - block in English
  if (devices.length >= MAX_DEVICES) {
    return NextResponse.json({ valid: false, error: `This license is already active on ${MAX_DEVICES} devices. Please deactivate it on one device to continue.` })
  }

  // New device under limit - add and allow
  devices.push(deviceId)
  await env.DB.prepare(
    'UPDATE licenses SET device_id = ?, device_ids = ?, last_seen_at = ? WHERE license_key = ?'
  ).bind(deviceId, JSON.stringify(devices), now, key).run()
  return NextResponse.json({ valid: true, source, device: 'added' })
}
