import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"
export const runtime = "edge"

export async function POST(req: NextRequest) {
  try {
    const { email, otp, newPassword } = await req.json()
    const { env } = await getCloudflareContext() as any

    const row: any = await env.DB.prepare("SELECT * FROM otps WHERE email = ?").bind(email).first()
    if (!row) return NextResponse.json({ error: "No OTP found" }, { status: 400 })
    if (row.otp !== otp) return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    if (Date.now() > row.expires_at) {
      await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()
      return NextResponse.json({ error: "OTP expired! Valid for only 5 minutes." }, { status: 400 })
    }

    await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(newPassword, email).run()
    await env.DB.prepare("DELETE FROM otps WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
