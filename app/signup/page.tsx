"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Strong password logic
  const getStrength = (pwd: string) => {
    if (pwd.length === 0) return null
    if (pwd.length < 8) return { text: "Too short - minimum 8 characters", color: "text-red-500", ok: false }
    if (!/[A-Z]/.test(pwd)) return { text: "Add 1 Uppercase letter (A-Z)", color: "text-orange-500", ok: false }
    if (!/[a-z]/.test(pwd)) return { text: "Add 1 Lowercase letter (a-z)", color: "text-orange-500", ok: false }
    if (!/[0-9]/.test(pwd)) return { text: "Add 1 Number (0-9)", color: "text-yellow-600", ok: false }
    if (!/[^A-Za-z0-9]/.test(pwd)) return { text: "Add 1 Symbol (@ # $ %)", color: "text-yellow-600", ok: false }
    return { text: "Strong Password ✓", color: "text-green-600", ok: true }
  }

  const strength = getStrength(password)

  async function handleSignup(e: any) {
    e.preventDefault()
    if (!strength?.ok) {
      alert(strength?.text)
      return
    }
    setLoading(true)
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      alert("Signup Success! Ab login karo")
      router.push("/login")
    } else {
      alert("Error: " + data.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Create Account - Velora</h1>
        <input className="w-full border p-3 rounded mb-3" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="w-full border p-3 rounded mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        
        <div className="mb-4">
          <input className="w-full border p-3 rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          {strength && (
            <p className={`text-[13px] mt-2 font-medium ${strength.color}`}>
              {strength.text}
            </p>
          )}
          <p className="text-[11px] text-gray-400 mt-2">Example: Ravish@1234</p>
        </div>

        <button disabled={loading || !strength?.ok} className="w-full bg-black text-white p-3 rounded disabled:bg-gray-400 disabled:cursor-not-allowed">
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <p className="mt-4 text-center text-sm">Already have account? <a href="/login" className="underline">Login</a></p>
      </form>
    </div>
  )
}
