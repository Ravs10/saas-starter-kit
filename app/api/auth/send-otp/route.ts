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

    const { env } = getRequestContext() as any
    const otp = genOtp()
    const expiresAt = Date.now() + 5 * 60 * 1000

    await env.DB.prepare(
      "INSERT OR REPLACE INTO otps (email, otp, expires_at) VALUES (?, ?, ?)"
    ).bind(email, otp, expiresAt).run()

    let apiKey: string | undefined = env.RESEND_API_KEY
    try {
      const userRow: any = await env.DB.prepare("SELECT resend_api_key FROM users WHERE email = ?").bind(email).first()
      if (userRow?.resend_api_key) apiKey = userRow.resend_api_key
    } catch {}

    let emailSent = false
    let resendError = ""
    if (apiKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env.RESEND_FROM || "Velora <onboarding@resend.dev>",
          to: email,
          subject: `Your Velora OTP is ${otp}`,
          html: `<h1>${otp}</h1><p>Valid for 5 minutes. Don't share.</p>`,
        }),
      })
      emailSent = r.ok
      if (!r.ok) resendError = await r.text()
    }

    return NextResponse.json({ success: true, emailSent, resend_error: resendError, debug_otp: emailSent ? undefined : otp })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
