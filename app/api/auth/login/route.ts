import { NextRequest, NextResponse } from "next/server"
import { getCloudflareContext } from "@opennextjs/cloudflare"

const MAX_ATTEMPTS = 5
const LOCK_MINUTES = 10

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: "Email & password required" }, { status: 400 })

    const { env } = await getCloudflareContext() as any
    const now = Date.now()

    // 1. Check lock
    const attemptRow: any = await env.DB.prepare("SELECT * FROM login_attempts WHERE email = ?").bind(email).first()
    
    if (attemptRow && attemptRow.locked_until > now) {
      const minsLeft = Math.ceil((attemptRow.locked_until - now) / 60000)
      return NextResponse.json({ 
        error: `Too many failed attempts! Account locked for ${minsLeft} minute(s). Try after ${LOCK_MINUTES} min.`,
        locked: true,
        minutesLeft: minsLeft
      }, { status: 429 })
    }

    // 2. Check user
    const user: any = await env.DB.prepare("SELECT * FROM users WHERE email = ?").bind(email).first()
    
    if (!user || user.password !== password) {
      // Failed attempt increment
      let newAttempts = 1
      let lockedUntil = 0
      
      if (attemptRow) {
        newAttempts = attemptRow.attempts + 1
        // If already locked time expired, reset
        if (attemptRow.locked_until && attemptRow.locked_until < now) {
          newAttempts = 1
        }
      }

      if (newAttempts >= MAX_ATTEMPTS) {
        lockedUntil = now + LOCK_MINUTES * 60 * 1000
      }

      await env.DB.prepare(
        "INSERT OR REPLACE INTO login_attempts (email, attempts, locked_until) VALUES (?, ?, ?)"
      ).bind(email, newAttempts, lockedUntil).run()

      if (newAttempts >= MAX_ATTEMPTS) {
        return NextResponse.json({ 
          error: `5 wrong attempts! Account locked for ${LOCK_MINUTES} minutes.`,
          locked: true 
        }, { status: 429 })
      }

      return NextResponse.json({ 
        error: `Invalid password! ${MAX_ATTEMPTS - newAttempts} attempts left.`,
        attemptsLeft: MAX_ATTEMPTS - newAttempts
      }, { status: 401 })
    }

    // 3. Success - clear attempts
    await env.DB.prepare("DELETE FROM login_attempts WHERE email = ?").bind(email).run()

    return NextResponse.json({ success: true, user: { email: user.email } })

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
