"use client"
import Link from "next/link"
import { useState } from "react"
import { SITE_CONFIG } from "../config"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-[22px] font-black tracking-tight">
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/pricing">Pricing</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
          <Link 
            href="/dashboard" 
            className="ml-2 px-6 py-2.5 rounded-full text-white font-bold"
            style={{ backgroundColor: SITE_CONFIG.theme.primary }}
          >
            Dashboard
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Hamburger - Tumhare screenshot jaisa */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-2 flex flex-col text-[16px]">
          <Link href="/pricing" onClick={()=>setOpen(false)} className="py-4 border-b">Pricing</Link>
          <Link href="/settings" onClick={()=>setOpen(false)} className="py-4 border-b">Settings</Link>
          <Link href="/login" onClick={()=>setOpen(false)} className="py-4 border-b">Login</Link>
          <Link href="/signup" onClick={()=>setOpen(false)} className="py-4 border-b">Sign Up</Link>
          <Link 
            href="/dashboard" 
            onClick={()=>setOpen(false)}
            className="mt-6 mb-6 text-center px-6 py-4 rounded-full text-white font-bold text-lg"
            style={{ backgroundColor: SITE_CONFIG.theme.primary }}
          >
            Dashboard
          </Link>
        </div>
      )}
    </header>
  )
}
