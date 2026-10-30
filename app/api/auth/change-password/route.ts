import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(req: Request) {
  const { email, otp, newPassword } = await req.json()
  const { env } = getCloudflareContext() as any

  const row = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(email).first()
  if (!row || row.otp !== otp || Date.now() > row.expires_at) {
    return Response.json({ error: "Invalid or expired OTP" }, { status: 400 })
  }

  await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(newPassword, email).run()
  await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()

  return Response.json({ success: true, message: "Password changed!" })
}
