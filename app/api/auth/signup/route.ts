import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()
    const { env } = await getCloudflareContext() as any

    if (!email || !password || !name) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    const existing: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    const hashedPassword = await hashPassword(password)
    
    await env.DB.prepare(
      "INSERT INTO users (id, name, email, password, created_at) VALUES (?, ?, ?, ?, ?)"
    ).bind(
      crypto.randomUUID(),
      name,
      email,
      hashedPassword,
      Date.now()
    ).run()

    return NextResponse.json({ success: true, message: "Account created!" })

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
