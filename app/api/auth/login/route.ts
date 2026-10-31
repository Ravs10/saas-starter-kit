import { getCloudflareContext } from "@opennextjs/cloudflare"
import { compare } from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json() as any

    if (!email || !password) {
      return Response.json({ error: "Email and password required" }, { status: 400 })
    }

    const { env } = await getCloudflareContext() as any
    const db = env.DB
    const cleanEmail = email.toLowerCase().trim()
    const now = Date.now()

    // 1. Check lock first
    const attemptRow: any = await db.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(cleanEmail).first()
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return Response.json({ error: `Account locked for ${minsLeft} min. Try later.`, locked: true }, { status: 429 })
    }

    const user: any = await db.prepare("SELECT * FROM users WHERE email = ?").bind(cleanEmail).first()
    
    if (!user) {
      return Response.json({ error: "User not found. Please signup first." }, { status: 401 })
    }

    const isMatch = await compare(password, user.password)
    
    let finalMatch = isMatch
    if (!isMatch) {
      // Fallback for old SHA-256 users
      const oldHash = await hashOldPassword(password)
      if (oldHash === user.password) finalMatch = true
    }

    if (!finalMatch) {
      // 2. Wrong password - attempts badhao
      let attempts = attemptRow ? attemptRow.attempts + 1 : 1
      let lockUntil = 0
      
      if (attempts >= 5) {
        lockUntil = now + 10 * 60 * 1000 // 10 min lock
        attempts = 0
      }

      await db.prepare("INSERT OR REPLACE INTO login_attempts (email, attempts, locked_until) VALUES (?, ?, ?)")
        .bind(cleanEmail, attempts, lockUntil).run()

      if (lockUntil > 0) {
        return Response.json({ error: "Too many wrong attempts. Account locked for 10 min.", locked: true }, { status: 429 })
      }

      return Response.json({ error: `Wrong password. ${5 - attempts} attempts left` }, { status: 401 })
    }

    // 3. Success - clear attempts
    await db.prepare("DELETE FROM login_attempts WHERE email = ?").bind(cleanEmail).run()

    return Response.json({ 
      success: true, 
      user: { id: user.id, email: user.email, name: user.name } 
    })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 500 })
  }
}

async function hashOldPassword(password: string) {
  const data = new TextEncoder().encode(password + "_velora_salt_123")
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}
