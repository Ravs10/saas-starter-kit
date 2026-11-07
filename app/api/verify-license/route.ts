import { NextResponse } from 'next/server'
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')?.trim()
  const deviceId = searchParams.get('device_id')?.trim() || req.headers.get('x-device-id')?.trim() || ''

  if (!key) return NextResponse.json({ valid: false, error: 'Key daalo' })

  const { env } = await getCloudflareContext() as any

  // ===== 1. KEY CHECK KARO =====
  let isValid = false
  let source = ''

  if (key.startsWith('VELORA-')) {
    const myKeys = (env.VELORA_KEYS || '').split(',').map((k: string) => k.trim()).filter(Boolean)
    if (myKeys.includes(key)) { isValid = true; source = 'velora' }
    else return NextResponse.json({ valid: false, error: 'Galat Velora key hai' })
  } else {
    // Gumroad
    if (!env.GUMROAD_PRODUCT_ID) {
      return NextResponse.json({ valid: false, error: 'Gumroad setup nahi hai' })
    }
    try {
      const gumRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `product_id=${env.GUMROAD_PRODUCT_ID}&license_key=${encodeURIComponent(key)}`
      })
      const gumData: any = await gumRes.json()
      if (gumData.success) { isValid = true; source = 'gumroad' }
      else return NextResponse.json({ valid: false, error: 'Galat Gumroad key hai' })
    } catch {
      return NextResponse.json({ valid: false, error: 'Galat Gumroad key hai' })
    }
  }

  if (!isValid) return NextResponse.json({ valid: false, error: 'Galat key hai' })

  // ===== 2. DEVICE LOCK - 1 LICENSE = 1 DEVICE =====
  // Agar device_id nahi aaya to purane tarike se hi chalne do, lock mat lagao
  if (!deviceId || !env.DB) {
    return NextResponse.json({ valid: true, source })
  }

  const now = Date.now()
  const existing: any = await env.DB.prepare(
    'SELECT device_id FROM licenses WHERE license_key = ?'
  ).bind(key).first()

  if (!existing) {
    // Pehli baar - is device se lock kar do
    await env.DB.prepare(
      'INSERT INTO licenses (license_key, device_id, first_activated_at, last_seen_at) VALUES (?, ?, ?, ?)'
    ).bind(key, deviceId, now, now).run()
    return NextResponse.json({ valid: true, source, device: 'locked' })
  }

  if (existing.device_id === deviceId) {
    // Wahi purana device hai - chalne do
    await env.DB.prepare(
      'UPDATE licenses SET last_seen_at = ? WHERE license_key = ?'
    ).bind(now, key).run()
    return NextResponse.json({ valid: true, source, device: 'same' })
  }

  // Dusra device hai - rok do
  return NextResponse.json({ valid: false, error: 'Ye key dusre device pe already use ho rahi hai. 1 License = 1 Device.' })
}
