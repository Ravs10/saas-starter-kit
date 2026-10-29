"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem("user")
    if (!saved) {
      router.push("/login")
    } else {
      setUser(JSON.parse(saved))
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (!user) return <div className="p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Velora Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </header>
      <div className="p-8">
        <h2 className="text-3xl font-bold">Welcome, {user.name}!</h2>
        <p className="mt-2 text-gray-600">Email: {user.email}</p>
        <div className="mt-6 p-6 bg-white border rounded-xl">
          <p>✅ Your data is secure in Cloudflare D1</p>
          <p className="mt-2 text-sm text-gray-500">User ID: {user.id}</p>
        </div>
      </div>
    </div>
  )
}
