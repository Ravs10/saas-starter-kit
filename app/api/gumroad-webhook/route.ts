import { NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const license_key = formData.get('license_key') as string;
    const email = formData.get('email') as string;

    if (!license_key) {
      return NextResponse.json({ error: 'No key' }, { status: 400 });
    }

    // Cloudflare D1 se connect
    const { env } = await getCloudflareContext();
    const db = env.DB as D1Database;

    // Gumroad ki Key apne aap D1 me daal do
    await db.prepare(
      `INSERT INTO licenses (license_key, email, max_devices) VALUES (?, ?, 3) ON CONFLICT(license_key) DO NOTHING`
    ).bind(license_key, email).run();

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
