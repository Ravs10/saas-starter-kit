"use client"
import { useEffect, useState } from "react"
import AuthGuard from "@/app/components/AuthGuard"

export default function DashboardPage() {
  return <AuthGuard><DashboardContent /></AuthGuard>
}

function DashboardContent() {
  const [user, setUser] = useState<any>(null)
  const [devicesUsed, setDevicesUsed] = useState<number | null>(null)
  const [maxDevices, setMaxDevices] = useState(4)

  useEffect(() => {
    const u = localStorage.getItem("user")
    if (u) setUser(JSON.parse(u))

    // Fetch device count for badge
    const license = localStorage.getItem("velora_license")
    const deviceId = localStorage.getItem("velora_device_id")
    if (license && deviceId) {
      fetch(`/api/verify-license?key=${encodeURIComponent(license)}&device_id=${encodeURIComponent(deviceId)}`)
        .then(r => r.json())
        .then(data => {
          if (data.devices_used !== undefined) setDevicesUsed(data.devices_used)
          if (data.max_devices !== undefined) setMaxDevices(data.max_devices)
        })
        .catch(() => {})
    }
  }, [])

  if (!user) return null
  
  const rawName = user.name || user.email?.split("@")[0]
  const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1)
  const isLimitReached = devicesUsed !== null && devicesUsed >= maxDevices

  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        
        {/* Top Badge - Isse professional look ayega */}
        <div className="inline-flex items-center gap-2 bg-black text-white text-xs px-3 py-1.5 rounded-full mb-6 tracking-wide">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          VELORA DASHBOARD • SECURED BY CLOUDFLARE D1
        </div>

        {/* Device Usage Badge - New */}
        {devicesUsed !== null && (
          <div className={`flex items-center justify-between p-3 rounded-xl border mb-6 text-sm ${isLimitReached ? 'bg-red-50 border-red-200' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className="flex items-center gap-2">
              <span>🖥️</span>
              <span className="font-medium text-black">Devices: {devicesUsed} / {maxDevices} Used</span>
            </div>
            {isLimitReached ? (
              <span className="text-xs font-bold text-red-600">Limit Reached - Contact Support</span>
            ) : (
              <span className="text-xs text-gray-500">{maxDevices - devicesUsed} slots remaining</span>
            )}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">Welcome back, {displayName}!</h1>
        <p className="text-gray-500 mt-3 text-[15px]">Here's what's happening with your account today.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-widest">Email Account</p>
            <p className="font-medium mt-3 break-all text-black">{user.email}</p>
            <p className="text-xs text-green-600 mt-4 font-medium">● Verified & Secure</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <p className="text-[11px] text-gray-400 uppercase font-bold tracking-widest">User Status</p>
            <p className="font-medium mt-3 text-black">Active Member</p>
            <p className="text-xs text-gray-500 mt-4">ID: {user.email.slice(0,12)}...</p>
          </div>
          {/* Card 3 */}
          <div className="bg-black text-white p-6 rounded-2xl shadow-sm">
            <p className="text-[11px] text-zinc-400 uppercase font-bold tracking-widest">Quick Action</p>
            <div className="mt-4 space-y-3">
              <a href="/settings" className="block bg-white text-black text-sm text-center py-2.5 rounded-full font-medium hover:bg-zinc-100 transition">Change Password</a>
              <a href="/" className="block bg-zinc-800 text-sm text-center py-2.5 rounded-full hover:bg-zinc-700 transition">Go to Store →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
