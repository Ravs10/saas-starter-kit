import { getCloudflareContext } from "@opennextjs/cloudflare"

function isStrongPassword(p: string) {
  return p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p)
}

async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json() as any
    const { env } = await getCloudflareContext()
    const db = (env as any).DB

    if (!email || !password) return Response.json({ error: "Email & Password required" }, { status: 400 })
    if (!isStrongPassword(password)) return Response.json({ error: "Weak password" }, { status: 400 })

    const hashedPassword = await hashPassword(password)
    const id = crypto.randomUUID()
    
    await db.prepare(
      "INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)"
    ).bind(id, email.toLowerCase(), hashedPassword, name || 'User').run()

    return Response.json({ success: true, id })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 400 })
  }
}
