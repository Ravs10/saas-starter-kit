import { SITE_CONFIG } from "@/app/config"
import Navbar from "@/app/components/Navbar"

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SITE_CONFIG.theme.secondary }}>
      <div className="bg-white">
        <Navbar />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <a href="/" className="inline-block px-5 py-2 bg-white border rounded-full text-sm mb-8">
          ← Back to Home
        </a>

        <h1 className="text-4xl font-black">Dashboard</h1>
        {/* YAHAN FIX KIYA - Ab VELORA ki jagah Ravish ayega */}
        <p className="text-gray-600 mt-2">
          Welcome to {SITE_CONFIG.name} Dashboard 👋
        </p>

        <div className="grid gap-6 mt-8">
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">USERS</p>
            <p className="text-4xl font-black mt-2">1,234</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% this week</p>
          </div>

          <div className="bg-black text-white p-6 rounded-3xl">
            <p className="text-sm text-gray-400 tracking-widest">REVENUE</p>
            <p className="text-4xl font-black mt-2">$5,678</p>
            <p className="text-sm text-green-400 mt-2">↑ 23% this month</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">PROJECTS</p>
            <p className="text-4xl font-black mt-2">12</p>
            <p className="text-sm text-gray-500 mt-2">4 active now</p>
          </div>
        </div>
      </div>
    </div>
  )
}
