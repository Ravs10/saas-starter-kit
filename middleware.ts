import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname

  // Activate wale pages ko kabhi mat roko, nahi to loop ban jayega
  if (
    path === '/activate' ||
    path === '/activate-license' ||
    path === '/verify-license' ||
    path.startsWith('/_next') ||
    path === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  const license = req.cookies.get('saas_license')?.value
  if (!license) return NextResponse.redirect(new URL('/activate-license', req.url))

  try {
    const res = await fetch(`${req.nextUrl.origin}/verify-license?key=${license}`)
    const data = await res.json()
    if (!data.valid) return NextResponse.redirect(new URL('/activate-license', req.url))
  } catch (e) {
    // API fail ho to bhi crash mat karo, activate pe bhej do
    return NextResponse.redirect(new URL('/activate-license', req.url))
  }

  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/settings/:path*'] }
