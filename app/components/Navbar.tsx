"use client"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

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
    window.addEventListener("storage", checkUser)
    // Route change pe bhi check karo
    const interval = setInterval(checkUser, 1000)
    return () => {
      window.removeEventListener("storage", checkUser)
      clearInterval(interval)
    }
  }, [pathname])

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/login")
  }

  const isInside = pathname.startsWith("/dashboard") || pathname.startsWith("/settings")

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo - Login hai to Dashboard pe, nahi to Home pe */}
        <a href={user ? "/dashboard" : "/"} className="text-2xl font-black tracking-tight">
          Velora
        </a>

        <nav className="flex items-center gap-2">
          {!user ? (
            <>
              <a href="/login" className="text-sm font-medium px-4 py-2">Login</a>
              <a href="/signup" className="text-sm bg-black text-white px-4 py-2 rounded-full">Sign Up</a>
            </>
          ) : (
            <>
              {/* Har page pe Dashboard ka button dikhega */}
              {!isInside && (
                <a href="/dashboard" className="text-sm bg-black text-white px-4 py-2 rounded-full font-medium">
                  Dashboard
                </a>
              )}
              {isInside ? (
                <>
                  <a href="/" className="text-sm px-3 py-2 hover:bg-gray-100 rounded-full">Store</a>
                  <a href="/settings" className="text-sm bg-black text-white px-4 py-2 rounded-full">Settings</a>
                  <button onClick={logout} className="text-sm bg-red-500 text-white px-4 py-2 rounded-full">Logout</button>
                </>
              ) : (
                <>
                  <a href="/settings" className="text-sm border px-4 py-2 rounded-full">Settings</a>
                  <button onClick={logout} className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-full">Logout</button>
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
