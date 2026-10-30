import { NextRequest, NextResponse } from "next/server"
import { getRequestContext } from "@cloudflare/next-on-pages"

export const runtime = "edge"

function genOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 })

    const { env } = getRequestContext()
    const otp = genOtp()
    const expiresAt = Date.now() + 5 * 60 * 1000 // 5 min only

    // 1. D1 me save
    await env.DB.prepare(
      "INSERT OR REPLACE INTO otps (email, otp, expires_at) VALUES (?, ?, ?)"
    ).bind(email, otp, expiresAt).run()

    // 2. User ki apni key hai to usi se bhejo, nahi to tumhari default key se
    let apiKey = env.RESEND_API_KEY
    try {
      const userRow: any = await env.DB.prepare("SELECT resend_api_key FROM users WHERE email = ?").bind(email).first()
      if (userRow?.resend_api_key) {
        apiKey = userRow.resend_api_key
      }
    } catch (e) {
      console.log("User key fetch error, using default", e)
    }

    // 3. Resend se Real Email
    let emailSent = false
    if (apiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env.RESEND_FROM || "Velora <onboarding@resend.dev>",
            to: email,
            subject: `Your Velora OTP is ${otp}`,
            html: `
              <div style="font-family: sans-serif; max-width: 500px; margin: auto; border: 1px solid #eee; padding: 24px; border-radius: 12px;">
                <h2 style="color: #111;">Velora - Password Reset</h2>
                <p>Your OTP for password reset is:</p>
                <h1 style="letter-spacing: 6px; background: #f5f5f5; padding: 12px; text-align: center; border-radius: 8px;">${otp}</h1>
                <p style="color: #666; font-size: 14px;">This OTP is valid for 5 minutes. Don't share it.</p>
                <hr/>
                <p style="font-size: 12px; color: #999;">If you didn't request this, ignore this email.</p>
              </div>
            `,
          }),
        })
        if (res.ok) emailSent = true
      } catch (e) {
        console.log("Resend error", e)
      }
    }

    return NextResponse.json({ 
      success: true, 
      emailSent,
      debug_otp: emailSent ? undefined : otp
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
