"use client"
import { useState } from "react"
import Link from "next/link"
import { SITE_CONFIG } from "../config"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-tight">
          {SITE_CONFIG.name}
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4">
          <Link href="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
          <Link href="/privacy" onClick={()=>setOpen(false)}>Privacy</Link>
          <Link href="/terms" onClick={()=>setOpen(false)}>Terms</Link>
        </div>
      )}
    </nav>
  )
}
