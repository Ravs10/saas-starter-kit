"use client"
import Link from "next/link"
import { useState } from "react"
import { SITE_CONFIG } from "../config"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Single Velora Logo */}
        <Link href="/" className="text-[22px] font-black tracking-tight">
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop - Signup ke saath */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/pricing">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/settings">Settings</Link>
          <Link 
            href="/signup" 
            className="ml-2 px-6 py-2.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: SITE_CONFIG.theme.primary }}
          >
            Sign up
          </Link>
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl font-bold">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu - Signup ke saath */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 flex flex-col gap-4 text-sm font-medium">
          <Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
          <Link href="/dashboard" onClick={()=>setOpen(false)}>Dashboard</Link>
          <Link href="/settings" onClick={()=>setOpen(false)}>Settings</Link>
          <Link href="/privacy" onClick={()=>setOpen(false)}>Privacy</Link>
          <Link href="/terms" onClick={()=>setOpen(false)}>Terms</Link>
          <Link 
            href="/signup" 
            onClick={()=>setOpen(false)}
            className="mt-3 text-center px-6 py-3 rounded-full text-white font-bold"
            style={{ backgroundColor: SITE_CONFIG.theme.primary }}
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  )
}
