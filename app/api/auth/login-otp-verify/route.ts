import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json()
    const { env } = await getCloudflareContext() as any
    const now = Date.now()

    const attemptRow: any = await env.DB.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(email).first()
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return NextResponse.json({ error: `Account locked for ${minsLeft} min`, locked: true }, { status: 429 })
    }

    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(email).first()
    if (!row) return NextResponse.json({ error: "No OTP found. Send OTP first." }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (now > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
      return NextResponse.json({ error: "OTP expired! Valid for 5 min only." }, { status: 400 })
    }

    const user: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run()

    return NextResponse.json({ 
      success: true, 
      user: { 
        id: user.id, 
        name: user.name || user.email.split("@")[0], 
        email: user.email 
      } 
    })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
