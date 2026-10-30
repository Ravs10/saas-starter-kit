// middleware.ts (project root me, next.config.js ke paas)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublic = path === '/login' || path === '/signup' || path === '/forgot-password' || path === '/'

  // Hum localStorage check nahi kar sakte middleware me, isliye client guard bhi lagayenge
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
}
