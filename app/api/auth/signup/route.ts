import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, otp } = await req.json()
    const { env } = await getCloudflareContext() as any

    if (!name || !email || !password || !otp) {
      return NextResponse.json({ error: "OTP required" }, { status: 400 })
    }

    // OTP VERIFY - Yahi fake email ko rokega
    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(email).first()
    if (!row) return NextResponse.json({ error: "Please send OTP first" }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (Date.now() > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
      return NextResponse.json({ error: "OTP expired" }, { status: 400 })
    }

    const existing: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    if (existing) return NextResponse.json({ error: "User already exists" }, { status: 409 })

    const hashed = await hashPassword(password)
    await env.DB.prepare("INSERT INTO users (id, name, email, password, created_at) VALUES (?, ?, ?, ?, ?)").bind(crypto.randomUUID(), name, email, hashed, Date.now()).run()
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true })
  } catch (e:any) { return NextResponse.json({ error: e.message }, { status: 500 }) }
}
