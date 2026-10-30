// app/components/AuthGuard.tsx
"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) {
      router.replace("/login")
    } else {
      setOk(true)
    }
  }, [router])

  if (!ok) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting to login...</div>
  }
  return <>{children}</>
}
