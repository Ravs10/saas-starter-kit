import { NextResponse } from 'next/server'

// Yaha apni saari valid keys rakho, Gumroad jo dega wahi
const VALID_KEYS = [
  'VELORA-DEMO-12345', // test ke liye
]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')

  if (!key) return NextResponse.json({ valid: false })

  // 1. Apni list me check
  if (VALID_KEYS.includes(key)) {
    return NextResponse.json({ valid: true })
  }

  // 2. Gumroad se live check (sabse best)
  try {
    const gumRes = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `product_id=YOUR_GUMROAD_PRODUCT_ID&license_key=${key}`
    })
    const gumData = await gumRes.json()
    if (gumData.success && gumData.uses < 5) { // 5 device tak allow
      return NextResponse.json({ valid: true })
    }
  } catch (e) {}

  return NextResponse.json({ valid: false })
}
