import { getCloudflareContext } from "@opennextjs/cloudflare"
import { compare } from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json() as any

    if (!email || !password) {
      return Response.json({ error: "Email and password required" }, { status: 400 })
    }

    const { env } = await getCloudflareContext()
    const db = (env as any).DB

    const user = await db.prepare("SELECT * FROM users WHERE email = ?").bind(email.toLowerCase().trim()).first() as any
    
    if (!user) {
      return Response.json({ error: "User not found. Please signup first." }, { status: 401 })
    }

    // bcrypt se compare - secure
    const isMatch = await compare(password, user.password)
    
    if (!isMatch) {
      // Fallback for old SHA-256 users (aapke purane users ke liye)
      const oldHash = await hashOldPassword(password)
      if (oldHash !== user.password) {
        return Response.json({ error: "Wrong password" }, { status: 401 })
      }
    }

    return Response.json({ 
      success: true, 
      user: { id: user.id, email: user.email, name: user.name } 
    })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}

// Purane users ke liye fallback
async function hashOldPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}
