"use client"
import { useState } from "react"
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center p-4 md:p-6 border-b bg-white/80 backdrop-blur-xl sticky top-0 z-50">
      <a href="/" className="text-2xl font-black tracking-tight hover:tracking-wider transition-all duration-300">VELORA</a>
      <div className="hidden md:flex gap-6 items-center">
        <a href="/pricing" className="text-sm font-medium hover:text-orange-500 transition">Pricing</a>
        <a href="/dashboard" className="text-sm font-medium hover:text-orange-500 transition">Dashboard</a>
        <a href="/settings" className="text-sm font-medium hover:text-orange-500 transition">Settings</a>
        <a href="/login" className="px-5 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition-all">Login</a>
        <a href="/signup" className="px-5 py-2 bg-black text-white rounded-full text-sm hover:scale-105 hover:shadow-lg transition-all">Sign Up</a>
      </div>
      <button onClick={()=>setOpen(!open)} className="md:hidden p-2 border rounded-xl">{open ? "✕" : "☰"}</button>
      {open && (
        <div className="absolute top-[65px] left-0 w-full bg-white border-b p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
          <a href="/" onClick={()=>setOpen(false)}>🏠 Home</a>
          <a href="/pricing" onClick={()=>setOpen(false)}>💰 Pricing</a>
          <a href="/dashboard" onClick={()=>setOpen(false)}>📊 Dashboard</a>
          <a href="/settings" onClick={()=>setOpen(false)}>⚙️ Settings</a>
          <a href="/login" className="border p-3 rounded-xl text-center">Login</a>
          <a href="/signup" className="bg-black text-white p-3 rounded-xl text-center">Sign Up</a>
        </div>
      )}
    </nav>
  )
}
