import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

function getEmailTemplate(otp: string, name: string = "User") {
  return `
  <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 20px;">
    <div style="max-width: 480px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; border: 1px solid #eee;">
      <div style="background: black; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 2px;">VELORA</h1>
      </div>
      <div style="padding: 30px;">
        <h2 style="margin: 0 0 10px; font-size: 20px;">Hi ${name},</h2>
        <p style="color: #555; font-size: 14px; line-height: 22px;">Aapka verification code neeche hai. Ye 5 minute ke liye valid hai:</p>
        <div style="text-align: center; margin: 30px 0;">
          <div style="display: inline-block; background: #f3f3f3; border: 1px dashed black; border-radius: 12px; padding: 15px 30px; font-size: 32px; font-weight: bold; letter-spacing: 8px;">
            ${otp}
          </div>
        </div>
        <p style="color: #999; font-size: 12px;">Agar aapne ye request nahi ki hai, toh is email ko ignore kar de.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 11px; text-align: center;">© 2026 Velora. All rights reserved.</p>
      </div>
    </div>
  </div>
  `
}

export async function POST(req: NextRequest) {
  try {
    const { email, type, name } = await req.json()
    const { env } = await getCloudflareContext() as any

    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expires_at = Date.now() + 5 * 60 * 1000

    // Purani entry delete - created_at ki zarurat nahi
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
    
    // Sirf 3 column jo aapki table me already hai
    await env.DB.prepare("INSERT INTO otps (email, otp, expires_at) VALUES (?, ?, ?)").bind(email, otp, expires_at).run()

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Velora <noreply@run4ravish.com>",
        to: email,
        subject: `Your Velora OTP is ${otp}`,
        html: getEmailTemplate(otp, name || "User")
      })
    })

    return NextResponse.json({ success: true })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
