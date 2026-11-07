import { NextResponse } from 'next/server'

export function middleware(req: any) {
  const license = req.cookies.get('velora_license')?.value
  if (!license) {
    return NextResponse.redirect(new URL('/activate-license', req.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/settings/:path*'] }
