import { getCloudflareContext } from "@opennextjs/cloudflare"

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(request: Request) {
  const { email, password } = await request.json() as any
  const { env } = await getCloudflareContext()
  const db = (env as any).DB

  const user = await db.prepare("SELECT * FROM users WHERE email = ?").bind(email.toLowerCase()).first() as any
  if (!user) return Response.json({ error: "User not found" }, { status: 401 })

  const hashedInput = await hashPassword(password)
  if (hashedInput !== user.password) return Response.json({ error: "Wrong password" }, { status: 401 })

  return Response.json({ success: true, user: { id: user.id, email: user.email, name: user.name } })
}
