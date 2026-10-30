"use client"
import { useEffect, useState } from "react"
import AuthGuard from "@/app/components/AuthGuard"

export default function DashboardPage() {
  return <AuthGuard><DashboardContent /></AuthGuard>
}

function DashboardContent() {
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    const u = localStorage.getItem("user")
    if (u) setUser(JSON.parse(u))
  }, [])

  if (!user) return null
  
  // Welcome back ke liye best logic
  const rawName = user.name || user.email?.split("@")[0]
  const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1)

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Top Badge - Isse professional look ayega */}
        <div className="inline-flex items-center gap-2 bg-black text-white text-xs px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          VELORA DASHBOARD • SECURED BY CLOUDFLARE D1
        </div>

        <h1 className="text-4xl font-black tracking-tight">Welcome back, {displayName}!</h1>
        <p className="text-gray-500 mt-2">Here's what's happening with your account today.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border shadow-sm">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email Account</p>
            <p className="font-medium mt-2 break-all">{user.email}</p>
            <p className="text-xs text-green-600 mt-3">● Verified & Secure</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border shadow-sm">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">User Status</p>
            <p className="font-medium mt-2">Active Member</p>
            <p className="text-xs text-gray-500 mt-3">ID: {user.email.slice(0,12)}...</p>
          </div>
          {/* Card 3 */}
          <div className="bg-black text-white p-5 rounded-2xl shadow-sm">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Quick Action</p>
            <div className="mt-3 space-y-2">
              <a href="/settings" className="block bg-white text-black text-sm text-center py-2 rounded-full font-medium">Change Password</a>
              <a href="/" className="block bg-zinc-800 text-sm text-center py-2 rounded-full">Go to Store →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
