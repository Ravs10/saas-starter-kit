"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import PasswordInput from "@/app/components/PasswordInput"

function maskEmail(email: string) {
  const [name, domain] = email.split("@")
  if (!name || !domain) return email
  if (name.length <= 2) return name[0] + "***@" + domain
  return name[0] + "***" + name.slice(-1) + "@" + domain
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [attemptsLeft, setAttemptsLeft] = useState<number | null>(null)
  const [isLocked, setIsLocked] = useState(false)
  const router = useRouter()

  async function handleLogin(e: any) {
    e.preventDefault()
    setLoading(true)
    setErrorMsg("")
    setAttemptsLeft(null)
    setIsLocked(false)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()
      setLoading(false)
      
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("user_email", data.user.email) // Settings ke liye
        router.push("/dashboard")
      } else {
        // Advanced lock handling
        if (res.status === 429 || data.locked) {
          setIsLocked(true)
          setErrorMsg(data.error)
        } else {
          setErrorMsg(data.error)
          if (data.attemptsLeft !== undefined) {
            setAttemptsLeft(data.attemptsLeft)
          }
        }
      }
    } catch (err: any) {
      setLoading(false)
      setErrorMsg("Server error: " + err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-2">Welcome Back - Velora</h1>
        <p className="text-xs text-gray-500 mb-6">Secure login • Max 5 attempts • 10 min lock</p>

        <input className="w-full border p-3 rounded mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        
        <PasswordInput 
          value={password} 
          onChange={(e:any) => setPassword(e.target.value)} 
          placeholder="Password" 
        />

        {/* Error / Lock UI */}
        {errorMsg && (
          <div className={`mt-4 p-3 rounded text-sm ${isLocked ? "bg-red-100 border border-red-300 text-red-700" : "bg-yellow-50 border border-yellow-300 text-yellow-800"}`}>
            <p className="font-medium">{isLocked ? "🔒 Account Locked" : "❌ Login Failed"}</p>
            <p className="mt-1">{errorMsg}</p>
            {attemptsLeft !== null && !isLocked && (
              <p className="mt-1 font-bold">Attempts left: {attemptsLeft}/5</p>
            )}
            {isLocked && (
              <p className="mt-1 text-xs">Valid for 10 minutes. Don't try repeatedly.</p>
            )}
          </div>
        )}

        <div className="flex justify-between mt-4 mb-4 text-sm">
          <a href="/forgot-password" className="text-blue-600 hover:underline font-medium">Forgot Password?</a>
        </div>

        <button disabled={loading || isLocked} className={`w-full p-3 rounded text-white ${isLocked ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"}`}>
          {loading ? "Checking security..." : isLocked ? "Locked for 10 min" : "Login"}
        </button>
        
        <p className="mt-4 text-center text-sm">No account? <a href="/signup" className="underline">Sign Up</a></p>
      </form>
    </div>
  )
}
