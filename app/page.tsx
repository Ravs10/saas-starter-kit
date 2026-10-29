import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { SITE_CONFIG } from "./config"

export default function Home(){
  return (
    <div className="min-h-screen" style={{ backgroundColor: SITE_CONFIG.theme.secondary }}>
      <div className="bg-white">
        <Navbar/>
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 text-center">
          <div className="inline-block px-4 py-1 border rounded-full text-xs mb-6 animate-bounce">🚀 New: {SITE_CONFIG.name} Cloud is LIVE</div>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">Build your SaaS<br/>10x faster with<br/>
            <span className="inline-block px-4 py-3 mt-3 rounded-xl" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
              <span className="text-white text-4xl md:text-6xl font-black">{SITE_CONFIG.name}</span>
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">{SITE_CONFIG.description}</p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a href="/signup" className="px-8 py-4 text-white rounded-full font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>Get Started →</a>
            <a href="/pricing" className="px-8 py-4 border rounded-full bg-white hover:bg-black hover:text-white transition-all">View Pricing</a>
          </div>
        </section>
      </div>
      
      {/* Features section ka background ab Secondary hoga */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">⚡ Fast</h3><p className="text-sm text-gray-500 mt-2">Deploy in seconds on Cloudflare</p></div>
          <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">🔒 Secure</h3><p className="text-sm text-gray-500 mt-2">Better Auth built-in</p></div>
          <div className="bg-white border p-6 rounded-2xl"><h3 className="font-bold">🎨 Stylish</h3><p className="text-sm text-gray-500 mt-2">Animation & hover effects</p></div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
