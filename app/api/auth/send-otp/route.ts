import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(req: Request) {
  const { email } = await req.json()
  const { env } = getCloudflareContext() as any
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  const expires = Date.now() + 10 * 60 * 1000 // 10 min

  await env.DB.prepare("INSERT OR REPLACE INTO otps (email, otp, expires_at) VALUES (?, ?, ?)")
    .bind(email, otp, expires).run()

  // Abhi ke liye console me log hoga, D1 me bhi save hai
  // Resend API key add karoge to email bhi jayega
  console.log(`OTP for ${email}: ${otp}`)

  return Response.json({ success: true, message: "OTP sent! (Check D1 console log)", debug_otp: otp }) // debug_otp ko production me hata dena
}
