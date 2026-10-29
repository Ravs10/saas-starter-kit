import { SITE_CONFIG } from "./config"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: SITE_CONFIG.theme.body }}>
      <Navbar />

      {/* Hero Section - Yahi tumhara main page tha */}
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold mb-4">
                ● New - {SITE_CONFIG.name} is Live
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.9]">
                Build your SaaS <span style={{ color: SITE_CONFIG.theme.primary }}>10x faster</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {SITE_CONFIG.description}. The modern starter kit with auth, payments, and dashboard ready.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="/dashboard" className="px-6 py-3 rounded-full text-white font-bold transition hover:opacity-90" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
                  Go to Dashboard →
                </a>
                <a href="/pricing" className="px-6 py-3 rounded-full bg-white border font-bold hover:bg-black hover:text-white transition">
                  View Pricing
                </a>
              </div>
            </div>

            {/* Velora Image wala part - Ye tha tumhara */}
            <div className="relative">
              <div className="bg-white rounded-[2rem] border p-4 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c4d82cc7?w=600&h=400&fit=crop" 
                  alt={`${SITE_CONFIG.name} Dashboard Preview`}
                  className="rounded-[1.5rem] w-full object-cover"
                />
                <div className="mt-4 p-4 bg-gray-50 rounded-2xl flex justify-between">
                  <div>
                    <p className="text-xs text-gray-400">TOTAL USERS</p>
                    <p className="text-xl font-black">1,234</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600">↑ 12%</p>
                    <p className="text-xs text-gray-400">Live</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border">
            <h3 className="font-bold">⚡ Super Fast</h3>
            <p className="text-sm text-gray-500 mt-2">Built with Next.js 14 and Tailwind CSS</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border">
            <h3 className="font-bold">🔒 Secure</h3>
            <p className="text-sm text-gray-500 mt-2">Auth and payments integrated</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border">
            <h3 className="font-bold">🎨 Customizable</h3>
            <p className="text-sm text-gray-500 mt-2">Change colors from config.ts</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
