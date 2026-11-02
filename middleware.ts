// middleware.ts (project root me, next.config.js ke paas)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublic = path === '/login' || path === '/signup' || path === '/forgot-password' || path === '/'

  // --- LICENSE CHECK ADDED ---
  // Sirf dashboard aur settings ko protect karega
  const needsLicense = path.startsWith('/dashboard') || path.startsWith('/settings')
  
  if (needsLicense) {
    const license = process.env.LICENSE_KEY
    // Agar .env me key nahi hai to activate page pe bhejo
    if (!license || license === 'your_gumroad_license_key_here' || license.length < 10) {
      return NextResponse.redirect(new URL('/activate-license', req.url))
    }
  }

  // Hum localStorage check nahi kar sakte middleware me, isliye client guard bhi lagayenge
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
}
