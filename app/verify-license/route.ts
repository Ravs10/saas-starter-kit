import { NextResponse } from 'next/server'
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')?.trim()
  if (!key) return NextResponse.json({ valid: false })

  const { env } = await getCloudflareContext() as any

  // Buyer ne kahan se khareeda hai, ye .env se pata chalega
  // Agar .env me kuch nahi hai, to default gumroad maan lo
  const source = (env.LICENSE_SOURCE || 'gumroad').toLowerCase()

  // ===== CASE 1: Ye site Velora wali hai =====
  // Sirf VELORA- wali key chalegi, Gumroad wali kabhi nahi
  if (source === 'velora') {
    if (!key.startsWith('VELORA-')) {
      return NextResponse.json({ valid: false, error: 'Ye site Velora se kharidi hai. Gumroad key yahan nahi chalegi.' })
    }
    const myKeys = (env.VELORA_KEYS || env.LICENSE_KEY || "").split(",").map((k: string) => k.trim())
    if (myKeys.includes(key)) {
      return NextResponse.json({ valid: true, source: 'velora' })
    }
    return NextResponse.json({ valid: false, error: 'Galat Velora key hai' })
  }

  // ===== CASE 2: Ye site Gumroad wali hai =====
  // Sirf Gumroad wali key chalegi, VELORA- wali kabhi nahi
  if (source === 'gumroad') {
    if (key.startsWith('VELORA-')) {
      return NextResponse.json({ valid: false, error: 'Ye site Gumroad se kharidi hai. Velora key yahan nahi chalegi.' })
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
    } catch (e) {}
    return NextResponse.json({ valid: false, error: 'Galat Gumroad key hai' })
  }

  return NextResponse.json({ valid: false })
}
