"use client"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Login(){
  return (
    <div className="px-6 py-8">
      <Link href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">
        ← Back to Home
      </Link>
      
      <div className="flex items-center justify-center mt-4">
        <div className="w-full max-w-md border bg-white p-8 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black mb-4" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            {SITE_CONFIG.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-black tracking-tight">{SITE_CONFIG.name.toUpperCase()}</h1>
          <h2 className="text-xl font-bold mt-4">Welcome back 👋</h2>
          <p className="text-sm text-gray-500 mt-1">Login to continue building with {SITE_CONFIG.name}</p>
          
          <input className="w-full mt-6 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Email" />
          <input className="w-full mt-3 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Password" type="password" />
          
          <button className="w-full mt-4 text-white rounded-xl p-3 font-bold hover:scale-[1.02] hover:shadow-lg transition-all duration-300" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Login →
          </button>
          <p className="text-center text-sm mt-4 text-gray-500">No account? <Link href="/signup" className="underline font-bold hover:opacity-70" style={{ color: SITE_CONFIG.theme.primary }}>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
