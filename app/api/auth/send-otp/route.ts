import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

function genOtp() { return Math.floor(100000 + Math.random() * 900000).toString() }

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    const { env } = await getCloudflareContext() as any
    const now = Date.now()

    const attemptRow: any = await env.DB.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(email).first()
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return NextResponse.json({ error: `Account locked! Try after ${minsLeft} min. OTP also blocked.`, locked: true }, { status: 429 })
    }

    const otp = genOtp()
    const expiresAt = now + 5 * 60 * 1000
    await env.DB.prepare("INSERT OR REPLACE INTO otps (email, otp, expires_at) VALUES (?, ?, ?)").bind(email, otp, expiresAt).run()

    let apiKey = env.RESEND_API_KEY
    try { const u: any = await env.DB.prepare("SELECT resend_api_key FROM users WHERE email = ?").bind(email).first(); if (u?.resend_api_key) apiKey = u.resend_api_key } catch {}

    let emailSent = false, errMsg = ""
    if (apiKey) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: env.RESEND_FROM || "Velora <onboarding@resend.dev>", to: email, subject: `Your Velora OTP is ${otp}`, html: `<h1>${otp}</h1><p>Valid for 5 minutes. Don't share.</p>` }),
      })
      emailSent = r.ok; if (!r.ok) errMsg = await r.text()
    }
    return NextResponse.json({ success: true, emailSent, resend_error: errMsg, debug_otp: emailSent ? undefined : otp })
  } catch (e: any) { return NextResponse.json({ error: e.message }, { status: 500 }) }
}
