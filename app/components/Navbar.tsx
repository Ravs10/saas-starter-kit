"use client"
import { useState } from "react"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Login", href: "/login" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto relative z-50 bg-white">
        <Link href="/" className="flex items-center z-50">
          <img 
            src={SITE_CONFIG.logo} 
            alt={SITE_CONFIG.name} 
            className="h-7 md:h-8 w-auto" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition">
              {link.label}
            </Link>
          ))}
          <Link href="/signup" className="text-sm font-medium text-gray-600 hover:text-black transition">
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

        {/* Hamburger Button */}
        <button className="md:hidden p-2 z-50" onClick={() => setIsOpen(!isOpen)}>
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
      </nav>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20">
          <div className="flex flex-col px-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-[15px] font-medium py-4 border-b border-gray-100 text-gray-700">
                {link.label}
              </Link>
            ))}
            <Link href="/signup" onClick={() => setIsOpen(false)} className="text-[15px] font-medium py-4 border-b border-gray-100 text-gray-700">
              Sign Up
            </Link>
            <Link href="/settings" onClick={() => setIsOpen(false)} className="text-[15px] font-medium py-4 border-b border-gray-100 text-gray-700">
              Settings
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
