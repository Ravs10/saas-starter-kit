import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

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

    await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(newPassword, email).run()
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run() // Lock clear on success

    return NextResponse.json({ success: true })
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }) }
}
