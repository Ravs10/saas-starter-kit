"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AuthGuard from "@/app/components/AuthGuard"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  )
}

function DashboardContent() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const u = localStorage.getItem("user")
    if (u) setUser(JSON.parse(u))
  }, [])

  function logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("user_email")
    router.replace("/login")
  }

  if (!user) return null

  // Fix for "Welcome, !"
  const displayName = user.name || user.email?.split("@")[0] || "User"
  const userId = user.id || user.email

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Velora</h1>
        <div className="flex gap-2">
          <a href="/settings" className="bg-black text-white px-4 py-2 rounded text-sm">Settings</a>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded text-sm">Logout</button>
        </div>
      </header>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-1">Welcome, {displayName}!</h1>
        <p className="text-gray-600 mb-6">Email: {user.email}</p>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="font-medium">✅ Your data is secure in Cloudflare D1</p>
          <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <a href="/settings" className="border p-4 rounded-xl text-center hover:bg-gray-50">
              <div className="text-2xl">⚙️</div>
              <div className="text-sm font-medium mt-1">Change Password</div>
            </a>
            <a href="/" className="border p-4 rounded-xl text-center hover:bg-gray-50">
              <div className="text-2xl">🛍️</div>
              <div className="text-sm font-medium mt-1">Go to Store</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
