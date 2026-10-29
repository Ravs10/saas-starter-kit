import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json() as any
    const { env } = await getCloudflareContext()
    const db = (env as any).DB

    if (!db) {
      return Response.json({ error: "DB not connected in env" }, { status: 500 })
    }

    const id = crypto.randomUUID()
    
    await db.prepare(
      "INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)"
    ).bind(id, email, password, name || 'User').run()

    return Response.json({ success: true, id })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 400 })
  }
}
