import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(req: NextRequest) {
  try {
    const { email, oldPassword, newPassword } = await req.json()
    const { env } = await getCloudflareContext() as any

    const user: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })
    if (user.password !== oldPassword) return NextResponse.json({ error: "Old password galat hai!" }, { status: 401 })

    await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(newPassword, email).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true, message: "Password updated inside!" })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
