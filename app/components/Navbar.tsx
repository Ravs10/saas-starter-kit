"use client"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function Navbar() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const u = localStorage.getItem("user")
    setUser(u ? JSON.parse(u) : null)
  }, [pathname])

  const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("user_email")
    setUser(null)
    router.push("/login")
  }

  const isInside = pathname.startsWith("/dashboard") || pathname.startsWith("/settings")
  const isDashboard = isInside || pathname.startsWith("/login") || pathname.startsWith("/signup") || pathname.startsWith("/privacy") || pathname.startsWith("/terms")

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${isDashboard ? 'bg-white/80 border-gray-200' : 'bg-black border-zinc-800'}`}>
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-3 flex justify-between items-center gap-3">
        {/* LEFT - LOGO - shrink nahi hoga */}
        <Link href={user ? "/dashboard" : "/"} className="flex-shrink-0">
          <span className={`text-xl md:text-2xl font-black tracking-tight ${isDashboard ? 'text-black' : 'text-white'}`}>VELORA</span>
        </Link>

        {/* RIGHT - BUTTONS - mobile pe chote */}
        <nav className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
          {!user ? (
            <>
              <Link href="/login" className={`text-xs md:text-sm px-3 md:px-4 py-2 ${isDashboard ? 'text-black' : 'text-zinc-400'}`}>Login</Link>
              <Link href="/signup" className={`text-xs md:text-sm px-3.5 md:px-4 py-2 rounded-full font-medium ${isDashboard ? 'bg-black text-white' : 'bg-white text-black'}`}>Sign Up</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className={`text-xs md:text-sm px-3 md:px-4 py-2 rounded-full font-medium ${isInside ? 'bg-gray-100 text-black' : 'bg-white text-black'}`}>Dashboard</Link>
              <Link href="/settings" className={`text-xs md:text-sm border px-3 md:px-4 py-2 rounded-full ${isDashboard ? 'border-gray-200 text-black' : 'border-zinc-800 text-zinc-300'}`}>Settings</Link>
              <button onClick={logout} className="text-xs md:text-sm bg-red-500 text-white px-3.5 md:px-4 py-2 rounded-full">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
