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
  const isDashboard = isInside || pathname.startsWith("/login") || pathname.startsWith("/signup")

  // Dashboard ke andar white navbar, landing pe black
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${isDashboard ? 'bg-white/80 border-gray-200' : 'bg-black border-zinc-800'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={user ? "/dashboard" : "/"} className="flex items-baseline gap-3">
          <span className={`text-2xl font-black tracking-tight ${isDashboard ? 'text-black' : 'text-white'}`}>VELORA</span>
          <span className={`text-[10px] tracking-[0.2em] px-2 py-1 rounded-full border hidden md:inline-block ${isDashboard ? 'text-gray-500 border-gray-200' : 'text-zinc-500 border-zinc-800'}`}>SAAS STARTER KIT</span>
        </Link>

        <nav className="flex items-center gap-2">
          {!user ? (
            <>
              <Link href="/login" className={`text-sm px-4 py-2 ${isDashboard ? 'text-black' : 'text-zinc-400 hover:text-white'}`}>Login</Link>
              <Link href="/signup" className={`text-sm px-4 py-2 rounded-full font-medium ${isDashboard ? 'bg-black text-white' : 'bg-white text-black'}`}>Sign Up</Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" className={`text-sm px-4 py-2 rounded-full font-medium ${isInside ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}>Dashboard</Link>
              <Link href="/settings" className={`text-sm border px-4 py-2 rounded-full ${isDashboard ? 'border-gray-200' : 'border-zinc-800 text-zinc-300'}`}>Settings</Link>
              <button onClick={logout} className="text-sm bg-red-500 text-white px-4 py-2 rounded-full">Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
