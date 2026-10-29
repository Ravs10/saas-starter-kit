"use client"
import { SITE_CONFIG } from "@/app/config"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + Name - Config se */}
        <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight">
          {SITE_CONFIG.logo ? (
            <img src={SITE_CONFIG.logo} alt={SITE_CONFIG.name} className="h-7 w-7 rounded-lg object-cover" />
          ) : (
            <div className="h-7 w-7 rounded-lg flex items-center justify-center text-white text-sm" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              {SITE_CONFIG.name.charAt(0)}
            </div>
          )}
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>
          <Link href="/pricing" className="hover:text-orange-600 transition">Pricing</Link>
          <Link href="/dashboard" className="px-4 py-2 rounded-full text-white" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Dashboard
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/pricing" className="block py-2">Pricing</Link>
          <Link href="/dashboard" className="block py-2 font-bold" style={{ color: SITE_CONFIG.theme.primary }}>Dashboard</Link>
        </div>
      )}
    </header>
  )
}
