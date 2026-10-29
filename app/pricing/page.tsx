"use client"
import { SITE_CONFIG } from "@/app/config"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Pricing() {
  return (
    // FIX: yaha se bg-white hata diya - ab config ka body color lagega
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      
      <div className="flex-1">
        <a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">← Back to Home</a>
        
        <div className="max-w-5xl mx-auto p-6 pb-16">
          {/* FIX: Center alignment sahi kiya */}
          <h1 className="text-4xl md:text-5xl font-black text-center">Simple Pricing</h1>
          <p className="text-center text-gray-500 mt-3">Choose your plan, scale with {SITE_CONFIG.name}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Free */}
            <div className="border rounded-2xl p-8 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ } as any}>
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-4xl font-black mt-4 group-hover:text-orange-500 transition">$0</p>
              <p className="text-sm text-gray-500 mt-2">Perfect to start</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>✓ 1 Project</li><li>✓ 100 Users</li><li>✓ Community Support</li>
              </ul>
              <a href="/signup" className="block mt-6 text-white text-center py-3 rounded-xl transition font-bold" style={{ backgroundColor: "black" }}>Get Started</a>
            </div>

            {/* Pro - Primary color config se */}
            <div className="border-2 rounded-2xl p-8 text-white hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative" style={{ backgroundColor: "black", borderColor: SITE_CONFIG.theme.primary }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>MOST POPULAR</span>
              <h3 className="font-bold text-xl">Pro</h3>
              <p className="text-4xl font-black mt-4">$19<span className="text-lg font-normal">/mo</span></p>
              <p className="text-sm text-white/60 mt-2">For growing teams</p>
              <ul className="mt-4 text-sm space-y-2 text-white/80">
                <li>✓ Unlimited Projects</li><li>✓ 10k Users</li><li>✓ Priority Support</li>
              </ul>
              <a href="/signup" className="block mt-6 bg-white text-black text-center py-3 rounded-xl hover:text-white transition font-bold" style={{} as any} onMouseEnter={(e:any)=>e.target.style.backgroundColor=SITE_CONFIG.theme.primary} onMouseLeave={(e:any)=>e.target.style.backgroundColor="white"}>Start Pro →</a>
            </div>

            {/* Enterprise */}
            <div className="border rounded-2xl p-8 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group hover:border-orange-400">
              <h3 className="font-bold text-xl">Enterprise</h3>
              <p className="text-4xl font-black mt-4 group-hover:text-orange-500 transition">$99</p>
              <p className="text-sm text-gray-500 mt-2">For large scale</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>✓ Everything in Pro</li><li>✓ Unlimited Users</li><li>✓ Dedicated Support</li>
              </ul>
              <a href="/signup" className="block mt-6 text-white text-center py-3 rounded-xl transition font-bold" style={{ backgroundColor: "black" }}>Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
