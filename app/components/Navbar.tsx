"use client"
import { useState } from "react"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto relative">
      <Link href="/" className="flex items-center">
        <img 
          src={SITE_CONFIG.logo} 
          alt={SITE_CONFIG.name} 
          className="h-7 md:h-8 w-auto" 
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/pricing" className="text-sm font-medium hover:text-black transition">
          Pricing
        </Link>
        <Link 
          href="/dashboard"
          className="text-sm font-bold px-5 py-2.5 rounded-full text-white transition"
          style={{ backgroundColor: SITE_CONFIG.theme.primary }}
        >
          Dashboard
        </Link>
      </div>

      {/* Hamburger Button - Mobile Only */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden flex flex-col p-6 gap-4 z-50">
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-sm font-medium py-2">
            Pricing
          </Link>
          <Link 
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold px-5 py-3 rounded-full text-white text-center"
            style={{ backgroundColor: SITE_CONFIG.theme.primary }}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  )
}
