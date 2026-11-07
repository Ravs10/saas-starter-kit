import { NextResponse } from 'next/server'

export async function middleware(req: any) {
  const license = req.cookies.get('velora_license')?.value
  if (!license) {
    return NextResponse.redirect(new URL('/activate-license', req.url))
  }

  try {
    const res = await fetch(`${req.nextUrl.origin}/api/verify-license?key=${license}`)
    if (!res.ok) return NextResponse.redirect(new URL('/activate-license', req.url))
    const data: any = await res.json()
    if (!data.valid) return NextResponse.redirect(new URL('/activate-license', req.url))
    return NextResponse.next()
  } catch (e) {
    // Fetch fail hua to crash mat karo, bas activate pe bhej do
    return NextResponse.redirect(new URL('/activate-license', req.url))
  }
}

export const config = { matcher: ['/dashboard/:path*', '/settings/:path*'] }
