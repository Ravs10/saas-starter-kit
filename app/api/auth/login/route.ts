import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json() as any
    const { env } = await getCloudflareContext()
    const db = (env as any).DB

    if (!db) {
      return Response.json({ error: "DB not connected in env" }, { status: 500 })
    }

    const user = await db.prepare(
      "SELECT id, email, name FROM users WHERE email = ? AND password = ?"
    ).bind(email, password).first()

    if (!user) {
      return Response.json({ error: "Invalid email or password" }, { status: 401 })
    }

    return Response.json({ success: true, user })
  } catch (e: any) {
    return Response.json({ error: e.message }, { status: 400 })
  }
}
