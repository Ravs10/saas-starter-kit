export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json() as any
    
    // @ts-ignore - Cloudflare D1
    const DB = (process.env as any).DB || (globalThis as any).DB || null
    // For OpenNext, DB comes from env
    const env = (request as any).env || (globalThis as any).env || {}
    const db = env.DB || DB || (process as any).DB

    // Agar local testing me DB nahi hai to
    if (!db && !(globalThis as any).DB) {
      // Fallback for build - will work in Cloudflare
    }

    const id = crypto.randomUUID()
    
    // @ts-ignore
    const database = (request as any).cf || db || (globalThis as any).DB
    // Actual query using Cloudflare binding
    // @ts-ignore
    const actualDB = env.DB
    
    if (actualDB) {
      await actualDB.prepare(
        "INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)"
      ).bind(id, email, password, name || 'User').run()
    }

    return Response.json({ success: true, id })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 400 })
  }
}
