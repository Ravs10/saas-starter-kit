import { getCloudflareContext } from "@opennextjs/cloudflare"

function isStrongPassword(password: string) {
  if (!password) return false
  const minLength = 8
  const hasUpper = /[A-Z]/.test(password)
  const hasLower = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSymbol = /[^A-Za-z0-9]/.test(password)
  return password.length >= minLength && hasUpper && hasLower && hasNumber && hasSymbol
}

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json() as any
    const { env } = await getCloudflareContext()
    const db = (env as any).DB

    if (!db) {
      return Response.json({ error: "DB not connected in env" }, { status: 500 })
    }

    if (!email || !password) {
      return Response.json({ error: "Email & Password required" }, { status: 400 })
    }

    // Strong password validation - Backend security
    if (!isStrongPassword(password)) {
      return Response.json({ 
        error: "Password must be 8+ chars with Uppercase, Lowercase, Number & Symbol (e.g. Ravish@123)" 
      }, { status: 400 })
    }

    const id = crypto.randomUUID()
    
    await db.prepare(
      "INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)"
    ).bind(id, email, password, name || 'User').run()

    return Response.json({ success: true, id })
  } catch (e: any) {
    // Duplicate email error handle
    if (e.message?.includes("UNIQUE") || e.message?.includes("already exists")) {
      return Response.json({ error: "Email already registered" }, { status: 400 })
    }
    return Response.json({ error: e.message }, { status: 400 })
  }
}
