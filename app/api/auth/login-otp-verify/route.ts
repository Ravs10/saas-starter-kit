import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json()
    
    if (!email || !otp) {
      return NextResponse.json({ error: "Email and OTP required" }, { status: 400 })
    }

    const { env } = await getCloudflareContext() as any
    const cleanEmail = email.toLowerCase().trim()
    const now = Date.now()

    // 1. Check lock
    const attemptRow: any = await env.DB.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(cleanEmail).first()
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return NextResponse.json({ error: `Account locked for ${minsLeft} min`, locked: true }, { status: 429 })
    }

    // 2. OTP Verify
    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(cleanEmail).first()
    if (!row) return NextResponse.json({ error: "No OTP found. Send OTP first." }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (now > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(cleanEmail).run()
      return NextResponse.json({ error: "OTP expired! Valid for 5 min only." }, { status: 400 })
    }

    const user: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(cleanEmail).first()
    if (!user) return NextResponse.json({ error: "User not found. Please signup." }, { status: 404 })

    // 3. Success - Clean everything
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(cleanEmail).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(cleanEmail).run()

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
