import { NextResponse } from 'next/server'

export function middleware(req: any) {
  const path = req.nextUrl.pathname

  // Ye guard loop tod dega - Inko kabhi redirect mat karo
  if (
    path === '/' ||
    path.startsWith('/demo') || // <-- YE ADD KIYA HAI - Demo bina login ke khulega
    path.startsWith('/activate-license') ||
    path.startsWith('/api/') ||
    path.startsWith('/_next/')
  ) {
    return NextResponse.next()
  }

  const license = req.cookies.get('velora_license')?.value
  if (!license) {
    return NextResponse.redirect(new URL('/activate-license', req.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/settings/:path*', '/demo/:path*'] }
