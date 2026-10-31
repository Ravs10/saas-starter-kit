import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"
import { hash } from "bcryptjs"

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, otp } = await req.json()
    const { env } = await getCloudflareContext() as any

    if (!name || !email || !password || !otp) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    const cleanEmail = email.toLowerCase().trim()

    // 1. OTP VERIFY
    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(cleanEmail).first()
    if (!row) return NextResponse.json({ error: "Please send OTP first" }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (Date.now() > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(cleanEmail).run()
      return NextResponse.json({ error: "OTP expired, send again" }, { status: 400 })
    }

    // 2. User exists check
    const existing: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(cleanEmail).first()
    if (existing) return NextResponse.json({ error: "User already exists, please login" }, { status: 409 })

    // 3. SECURE HASH - bcrypt
    const hashed = await hash(password, 10)

    await env.DB.prepare(
      "INSERT INTO users (id, name, email, password, created_at) VALUES (?, ?, ?, ?, ?)"
    ).bind(crypto.randomUUID(), name.trim(), cleanEmail, hashed, Date.now()).run()

    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(cleanEmail).run()

    return NextResponse.json({ success: true })
  } catch (e:any) { 
    return NextResponse.json({ error: e.message }, { status: 500 }) 
  }
}
