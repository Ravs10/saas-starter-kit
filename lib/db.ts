export function getDB(env: any) {
  return env.DB; // Cloudflare D1 Database binding
}

export async function saveOTP(db: any, email: string, otp: string) {
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 min
  // FIXED: otps table me save, users table safe rahega
  await db.prepare(
    "INSERT OR REPLACE INTO otps (email, otp, expires_at, attempts) VALUES (?, ?, ?, 0)"
  ).bind(email.toLowerCase().trim(), otp, expiresAt).run();
}

export async function getOTP(db: any, email: string) {
  const result = await db.prepare(
    "SELECT * FROM otps WHERE email = ?"
  ).bind(email.toLowerCase().trim()).first();
  return result;
}

export async function deleteOTP(db: any, email: string) {
  await db.prepare(
    "DELETE FROM otps WHERE email = ?"
  ).bind(email.toLowerCase().trim()).run();
}

export async function saveUser(db: any, email: string, passwordHash: string) {
  await db.prepare(
    "INSERT INTO users (email, password, created_at) VALUES (?, ?, ?)"
  ).bind(email.toLowerCase().trim(), passwordHash, Date.now()).run();
}

export async function getUser(db: any, email: string) {
  return await db.prepare(
    "SELECT * FROM users WHERE email = ?"
  ).bind(email.toLowerCase().trim()).first();
}
