import { NextResponse } from 'next/server'
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')?.trim()
  if (!key) return NextResponse.json({ valid: false, error: 'Key daalo' })

  const { env } = await getCloudflareContext() as any

  // ===== 1. VELORA KEY - Tum direct doge =====
  if (key.startsWith('VELORA-')) {
    const myKeys = (env.VELORA_KEYS || '').split(',').map((k: string) => k.trim()).filter(Boolean)
    if (myKeys.includes(key)) {
      return NextResponse.json({ valid: true, source: 'velora' })
    }
    return NextResponse.json({ valid: false, error: 'Galat Velora key hai' })
  }

  // ===== 2. GUMROAD KEY - Gumroad dega =====
  // VELORA- se shuru nahi hai, to Gumroad ka maan lo
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
    if (gumData.success) {
      return NextResponse.json({ valid: true, source: 'gumroad' })
    }
  } catch {}
  return NextResponse.json({ valid: false, error: 'Galat Gumroad key hai' })
}
