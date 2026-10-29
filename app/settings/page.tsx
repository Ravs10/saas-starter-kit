"use client"
import { SITE_CONFIG } from "@/app/config"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Settings() {
  return (
    // FIX: bg-white hata diya - ab layout.tsx se body color ayega
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="max-w-3xl mx-auto p-6 w-full flex-1">
        <a href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">← Back to Home</a>
        <h1 className="text-3xl font-black tracking-tight">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your {SITE_CONFIG.name} account</p>
        
        <div className="mt-8 border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group bg-white">
          <h3 className="font-bold flex items-center gap-2">👤 Profile 
            <span className="text-xs px-2 py-1 rounded-full font-bold" style={{ backgroundColor: SITE_CONFIG.theme.secondary, color: SITE_CONFIG.theme.primary }}>Editable</span>
          </h3>
          <input className="w-full mt-3 border p-3 rounded-xl outline-none transition focus:ring-2" defaultValue={SITE_CONFIG.name} />
          <input className="w-full mt-3 border p-3 rounded-xl outline-none transition focus:ring-2" defaultValue="ravish@example.com" />
          <button className="mt-4 text-white px-6 py-2 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Save Changes
          </button>
        </div>

        <div className="mt-6 border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white">
          <h3 className="font-bold flex items-center gap-2">💳 Billing</h3>
          <p className="text-sm text-gray-500 mt-2">Current Plan: <span className="font-bold text-black">Free</span></p>
          <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-[20%] rounded-full" style={{ backgroundColor: SITE_CONFIG.theme.primary }}></div>
          </div>
          <button className="mt-4 border px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-all font-medium">
            Upgrade to Pro →
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
