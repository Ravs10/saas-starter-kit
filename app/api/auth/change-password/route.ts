import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(req: NextRequest) {
  try {
    const { email, otp, newPassword } = await req.json()
    const { env } = await getCloudflareContext() as any
    const now = Date.now()

    const attemptRow: any = await env.DB.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(email).first()
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return NextResponse.json({ error: `Account locked! Try after ${minsLeft} min.`, locked: true }, { status: 429 })
    }

    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(email).first()
    if (!row) return NextResponse.json({ error: "No OTP found" }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (now > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
      return NextResponse.json({ error: "OTP expired! Valid for only 5 minutes." }, { status: 400 })
    }

    const hashedPassword = await hashPassword(newPassword)
    await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(hashedPassword, email).run()
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true })
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }) }
}
