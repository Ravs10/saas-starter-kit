export function getDB(env: any) {
  return env.DB; // Cloudflare D1 Database
}

export async function saveOTP(db: any, email: string, otp: string) {
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 min
  await db.prepare(
    "INSERT OR REPLACE INTO users (email, otp, expires_at) VALUES (?, ?, ?)"
  ).bind(email, otp, expiresAt).run();
}

export async function getOTP(db: any, email: string) {
  const result = await db.prepare(
    "SELECT * FROM users WHERE email = ?"
  ).bind(email).first();
  return result;
}
