// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const needsLicense = path.startsWith('/dashboard') || path.startsWith('/settings')
  
  if (needsLicense) {
    const license = process.env.LICENSE_KEY

    // 1. Empty check
    if (!license || license === 'your_gumroad_license_key_here') {
      return NextResponse.redirect(new URL('/activate-license', req.url))
    }

    // 2. Prefix check - sirf VELORA se start hone wali key chalegi
    const isVeloraKey = license.startsWith('VELORA-') || license.startsWith('GUMROAD-')
    
    // 3. Length check
    if (!isVeloraKey || license.length < 15) {
      return NextResponse.redirect(new URL('/activate-license', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
}
