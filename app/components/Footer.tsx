"use client"
export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Velora Branding Card - Screenshot 1 Style */}
      <div className="bg-[#FF6A00] py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-black rounded-[32px] p-8 shadow-2xl border border-white/10 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-white text-2xl font-bold leading-tight">What VELORA Can Do For You 👇</h3>
            <ul className="mt-6 space-y-3 text-white/90 text-[15px]">
              <li className="flex gap-3"><span className="text-orange-400">✓</span> <span><b>Custom Business Tools</b> – Like Lorem Pro</span></li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> <span><b>Lightning Fast Websites</b> – Next.js, SEO Ready</span></li>
              <li className="flex gap-3"><span className="text-orange-400">✓</span> <span><b>Web & Mobile Apps</b> – Idea to Play Store</span></li>
            </ul>
            
            <div className="mt-6 flex gap-3">
              <a href="https://wa.me/919999999999" className="flex-1 bg-[#25D366] text-black font-bold py-3 rounded-full text-center hover:scale-105 transition">WhatsApp</a>
              <a href="mailto:contact@velora.cloud" className="flex-1 bg-white text-black font-bold py-3 rounded-full text-center hover:scale-105 transition">Email</a>
            </div>

            <p className="text-center text-white/50 text-xs mt-4 tracking-wider">⚡ REPLY IN 2 HOURS • 100% CONFIDENTIAL</p>

            {/* Clickable Logo - Goes to Velora Cloud */}
            <a href="https://ravish.workers.dev" target="_blank" className="mt-6 block bg-[#111] rounded-[20px] p-4 border border-orange-500/50 shadow-[0_0_30px_rgba(255,106,0,0.3)] hover:shadow-[0_0_50px_rgba(255,106,0,0.6)] transition-all duration-500 relative group-hover:-translate-y-1">
              <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE
              </div>
              <img src="/velora-logo.png" alt="VELORA" className="w-full h-auto rounded-xl bg-black" />
              <p className="text-orange-400 text-center text-sm font-bold tracking-[2px] mt-3 animate-pulse">CLICK TO VISIT VELORA CLOUD →</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white/60 text-center py-4 text-xs">
        Developed with ❤️ by <a href="https://ravish.workers.dev" className="text-orange-400 font-bold hover:underline">VELORA</a> • Founded by Yadav Ravish
      </div>
    </footer>
  )
}
