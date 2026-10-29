"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSignup(e: any) {
    e.preventDefault()
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
        <input className="w-full border p-3 rounded mb-4" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button disabled={loading} className="w-full bg-black text-white p-3 rounded">
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <p className="mt-4 text-center text-sm">Already have account? <a href="/login" className="underline">Login</a></p>
      </form>
    </div>
  )
}
