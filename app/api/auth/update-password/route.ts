import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(req: NextRequest) {
  try {
    const { email, oldPassword, newPassword } = await req.json()
    const { env } = await getCloudflareContext() as any

    const user: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })
    
    // ✅ FIX 1: Old password ko hash karke check karo
    // Purane plain users ke liye bhi support
    let isOldCorrect = false
    const hashedOld = await hashPassword(oldPassword)
    if (user.password === oldPassword || user.password === hashedOld) {
      isOldCorrect = true
    }

    if (!isOldCorrect) return NextResponse.json({ error: "Old password galat hai!" }, { status: 401 })

    // ✅ FIX 2: Naya password hash karke save karo
    const hashedNew = await hashPassword(newPassword)
    await env.DB.prepare("UPDATE users SET password = ? WHERE email = ?").bind(hashedNew, email).run()
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true, message: "Password updated inside!" })
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
