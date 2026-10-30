"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import PasswordInput from "@/components/PasswordInput"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: any) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    setLoading(false)
    
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user))
      router.push("/dashboard")
    } else {
      alert("Error: " + data.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Welcome Back - Velora</h1>
        <input className="w-full border p-3 rounded mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        
        <PasswordInput 
          value={password} 
          onChange={(e:any) => setPassword(e.target.value)} 
          placeholder="Password" 
        />

        <div className="flex justify-between mt-3 mb-4 text-sm">
          <a href="/forgot-password" className="text-blue-600 hover:underline font-medium">Forgot Password? Change Password</a>
        </div>

        <button disabled={loading} className="w-full bg-black text-white p-3 rounded">
          {loading ? "Checking..." : "Login"}
        </button>
        <p className="mt-4 text-center text-sm">No account? <a href="/signup" className="underline">Sign Up</a></p>
      </form>
    </div>
  )
}
