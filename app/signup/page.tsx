"use client"
import { SITE_CONFIG } from "@/app/config"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Signup() {
  return (
    // Yaha se bg-gray-50 hata diya - ab layout.tsx se body color ayega
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="p-6 flex-1">
        <a href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">
          ← Back to Home
        </a>
        
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-[24px] shadow-xl w-full max-w-sm hover:shadow-2xl transition-all duration-500 border">
            {/* Ab config se logo/name */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black mb-4" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              {SITE_CONFIG.name.charAt(0)}
            </div>
            <h1 className="text-2xl font-black tracking-tight">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Start building your SaaS today with {SITE_CONFIG.name.toUpperCase()}</p>
            
            <input className="w-full mt-6 border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Full Name" />
            <input className="w-full mt-3 border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Email" />
            <input className="w-full mt-3 border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Password" type="password" />
            
            <button className="w-full mt-6 text-white py-3 rounded-xl hover:scale-[1.02] hover:shadow-lg transition-all duration-300 font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              Sign Up →
            </button>
            <p className="text-center text-sm mt-4 text-gray-500">Already have account? <a href="/login" className="underline font-bold text-black hover:text-orange-500">Login</a></p>
            
            <p className="text-[11px] text-center text-gray-400 mt-6">By signing up you agree to {SITE_CONFIG.name} Terms</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
