import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const license = req.cookies.get('velora_license')?.value
  if (!license) return NextResponse.redirect(new URL('/activate-license', req.url))
  
  const res = await fetch(`${req.nextUrl.origin}/api/verify-license?key=${license}`)
  const data = await res.json()
  if (!data.valid) return NextResponse.redirect(new URL('/activate-license', req.url))

  return NextResponse.next()
}
export const config = { matcher: ['/dashboard/:path*', '/settings/:path*'] }
