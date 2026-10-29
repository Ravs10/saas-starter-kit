"use client"
import { useState } from "react"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"
import Logo from "./Logo"

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Settings", href: "/settings" },
  { label: "Login", href: "/login" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="w-full sticky top-0 z-50 border-b" style={{ backgroundColor: SITE_CONFIG.theme.navbar }}>
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto relative">
          <Logo />

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium transition" style={{ color: SITE_CONFIG.theme.navbarText }}>
                {link.label}
              </Link>
            ))}
            <Link href="/signup" className="text-sm font-medium transition" style={{ color: SITE_CONFIG.theme.navbarText }}>
              Sign Up
            </Link>
            <Link 
              href="/dashboard"
              className="text-sm font-bold px-5 py-2.5 rounded-full text-white transition"
              style={{ backgroundColor: SITE_CONFIG.theme.primary }}
            >
              Dashboard
            </Link>
          </div>

          <button className="md:hidden p-2 z-50 w-10 h-10 flex items-center justify-center" onClick={() => setIsOpen(!isOpen)} style={{ color: SITE_CONFIG.theme.navbarText }}>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-20" style={{ backgroundColor: SITE_CONFIG.theme.navbar }}>
          <div className="flex flex-col px-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-[15px] font-medium py-4 border-b" style={{ color: SITE_CONFIG.theme.navbarText, borderColor: 'rgba(0,0,0,0.1)' }}>
                {link.label}
              </Link>
            ))}
            <Link href="/signup" onClick={() => setIsOpen(false)} className="text-[15px] font-medium py-4 border-b" style={{ color: SITE_CONFIG.theme.navbarText, borderColor: 'rgba(0,0,0,0.1)' }}>
              Sign Up
            </Link>
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-[15px] font-bold px-5 py-4 rounded-full text-white text-center mt-6" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
