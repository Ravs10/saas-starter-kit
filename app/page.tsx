import { SITE_CONFIG } from "./config"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: SITE_CONFIG.theme.body }}>
      <div className="bg-white">
        <Navbar />
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        <h1 className="text-5xl font-black tracking-tight">
          Welcome to {SITE_CONFIG.name}
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          {SITE_CONFIG.description} - Build your SaaS 10x faster
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/dashboard" className="px-6 py-3 rounded-full text-white font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Go to Dashboard →
          </a>
          <a href="/" className="px-6 py-3 rounded-full bg-white border font-bold">
            Learn More
          </a>
        </div>

        {/* Preview Cards - Same as Dashboard style */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">USERS</p>
            <p className="text-4xl font-black mt-2">1,234</p>
          </div>
          <div className="bg-black text-white p-6 rounded-3xl">
            <p className="text-sm text-gray-400 tracking-widest">REVENUE</p>
            <p className="text-4xl font-black mt-2">$5,678</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">PROJECTS</p>
            <p className="text-4xl font-black mt-2">12</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
