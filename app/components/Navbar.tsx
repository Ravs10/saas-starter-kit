"use client"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center p-4 md:p-6 border-b bg-white sticky top-0 z-50">
      <a href="/" className="text-2xl font-black tracking-tight">VELORA</a>
      
      {/* Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="/pricing" className="text-sm font-medium hover:opacity-60">Pricing</a>
        <a href="/dashboard" className="text-sm font-medium hover:opacity-60">Dashboard</a>
        <a href="/settings" className="text-sm font-medium hover:opacity-60">Settings</a>
        <a href="/login" className="px-5 py-2 border rounded-full text-sm">Login</a>
        <a href="/signup" className="px-5 py-2 bg-black text-white rounded-full text-sm">Sign Up</a>
      </div>

      {/* Mobile Button */}
      <button onClick={()=>setOpen(!open)} className="md:hidden p-2 border rounded-xl">☰</button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[65px] left-0 w-full bg-white border-b p-6 flex flex-col gap-4 md:hidden">
          <a href="/" onClick={()=>setOpen(false)}>🏠 Home</a>
          <a href="/pricing" onClick={()=>setOpen(false)}>💰 Pricing</a>
          <a href="/dashboard" onClick={()=>setOpen(false)}>📊 Dashboard</a>
          <a href="/settings" onClick={()=>setOpen(false)}>⚙️ Settings</a>
          <a href="/login" onClick={()=>setOpen(false)} className="border p-3 rounded-xl text-center">Login</a>
          <a href="/signup" onClick={()=>setOpen(false)} className="bg-black text-white p-3 rounded-xl text-center">Sign Up</a>
        </div>
      )}
    </nav>
  )
}
