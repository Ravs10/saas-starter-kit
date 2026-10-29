import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { SITE_CONFIG } from "@/app/config"

export default function Dashboard(){
  return (
    <div className="min-h-screen" style={{ backgroundColor: SITE_CONFIG.theme.body }}>
      <Navbar/>
      <a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">← Back to Home</a>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to {SITE_CONFIG.name} Dashboard 👋</p>
          </div>
          <div className="hidden md:block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-bold animate-pulse">● LIVE</div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer" style={{ ['--tw-border-hover' as any]: SITE_CONFIG.theme.primary }}>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Users</p>
            <p className="text-3xl font-black mt-2 transition" style={{ ['--tw-text-hover' as any]: SITE_CONFIG.theme.primary }}>1,234</p>
            <p className="text-xs text-green-600 mt-2">↑ 12% this week</p>
          </div>
          <div className="bg-black text-white p-6 rounded-2xl border hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group cursor-pointer">
            <p className="text-xs text-white/50 uppercase tracking-wider">Revenue</p>
            <p className="text-3xl font-black mt-2">$5,678</p>
            <p className="text-xs text-green-400 mt-2">↑ 23% this month</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <p className="text-xs text-gray-400 uppercase tracking-wider">Projects</p>
            <p className="text-3xl font-black mt-2 transition">12</p>
            <p className="text-xs text-gray-500 mt-2">4 active now</p>
          </div>
        </div>

        <div className="mt-8 bg-white border rounded-2xl p-6">
          <h3 className="font-bold">Recent Activity</h3>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between p-3 rounded-xl hover:bg-gray-50 transition"><span className="text-sm">New user signed up</span><span className="text-xs text-gray-400">2m ago</span></div>
            <div className="flex justify-between p-3 rounded-xl hover:bg-gray-50 transition"><span className="text-sm">Project deployed</span><span className="text-xs text-gray-400">10m ago</span></div>
            <div className="flex justify-between p-3 rounded-xl hover:bg-gray-50 transition"><span className="text-sm">Payment received $19</span><span className="text-xs text-gray-400">1h ago</span></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
