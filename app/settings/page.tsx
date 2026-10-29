import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Settings() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div className="max-w-3xl mx-auto p-6">
        <a href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">← Back to Home</a>
        <h1 className="text-3xl font-black tracking-tight">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your VELORA account</p>
        
        <div className="mt-8 border rounded-2xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
          <h3 className="font-bold flex items-center gap-2">👤 Profile <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Editable</span></h3>
          <input className="w-full mt-3 border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition" defaultValue="Ravish" />
          <input className="w-full mt-3 border p-3 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition" defaultValue="ravish@example.com" />
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-orange-500 hover:scale-105 hover:shadow-lg transition-all duration-300">Save Changes</button>
        </div>

        <div className="mt-6 border rounded-2xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
          <h3 className="font-bold flex items-center gap-2">💳 Billing</h3>
          <p className="text-sm text-gray-500 mt-2">Current Plan: <span className="font-bold text-black">Free</span></p>
          <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full w-[20%] bg-orange-500 rounded-full"></div></div>
          <button className="mt-4 border px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-all">Upgrade to Pro →</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
