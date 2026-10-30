"use client"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkUser = () => {
      const u = localStorage.getItem("user")
      setUser(u ? JSON.parse(u) : null)
    }
    checkUser()
    // har second check karo taaki login ke turant baad update ho jaye
    const interval = setInterval(checkUser, 1000)
    return () => clearInterval(interval)
  }, [pathname])

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("user_email")
    setUser(null)
    router.push("/login")
  }

  const isInside = pathname.startsWith("/dashboard") || pathname.startsWith("/settings")

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={user ? "/dashboard" : "/"} className="text-2xl font-black tracking-tight">
          Velora
        </Link>

        <nav className="flex items-center gap-2">
          {!user ? (
            <>
              <Link href="/login" className="text-sm font-medium px-4 py-2">Login</Link>
              <Link href="/signup" className="text-sm bg-black text-white px-4 py-2 rounded-full">Sign Up</Link>
            </>
          ) : (
            <>
              {/* Logged in hai to har jagah Dashboard ka button dikhega */}
              <Link href="/dashboard" className={`text-sm px-4 py-2 rounded-full font-medium ${isInside ? 'bg-gray-100' : 'bg-black text-white'}`}>
                Dashboard
              </Link>
              <Link href="/settings" className="text-sm border px-4 py-2 rounded-full">Settings</Link>
              <button onClick={logout} className="text-sm bg-red-500 text-white px-4 py-2 rounded-full">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
