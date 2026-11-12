"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

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

  const sendOtp = async () => {
    if (!email) return setMsg("Email daalo pehle")
    setLoading(true); setMsg("")
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "signup" })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setOtpSent(true); setMsg("OTP bhej diya! Email check karo")
    } catch (e: any) { setMsg(e.message) } 
    finally { setLoading(false) }
  }

  async function handleSignup(e: any) {
    e.preventDefault()
    if (!strength?.ok) return setMsg(strength?.text || "Weak password")
    setLoading(true); setMsg("")
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, otp })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setMsg("Account ban gaya! Login pe ja rahe ho...")
      setTimeout(() => router.push("/login"), 1500)
    } catch (e: any) { setMsg(e.message) } 
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSignup} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center">Create Account - Velora</h1>
        <p className="text-center text-sm text-gray-500 -mt-2">
          Free account • No card needed • Demo dashboard included
        </p>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (RCY)" className="w-full px-4 py-3 border rounded-xl outline-none" required />
        <div className="flex gap-2">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="flex-1 px-4 py-3 border rounded-xl outline-none" required />
          <button type="button" onClick={sendOtp} disabled={loading} className="px-4 py-2 bg-black text-white rounded-xl text-sm disabled:opacity-50">{otpSent ? "Resend" : "Send OTP"}</button>
        </div>
        {otpSent && <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="6-digit OTP" className="w-full px-4 py-3 border rounded-xl outline-none" required />}
        <div>
          <div className="relative">
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 pr-12 border rounded-xl outline-none" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">{showPassword ? "Hide" : "Show"}</button>
          </div>
          {strength && <p className={`text-[13px] mt-2 font-medium ${strength.color}`}>{strength.text}</p>}
        </div>
        {msg && <p className="text-sm text-center text-red-500 bg-red-50 p-2 rounded-lg">{msg}</p>}
        <button disabled={loading || !strength?.ok} className="w-full py-3 bg-black text-white rounded-xl font-semibold disabled:bg-gray-400">{loading ? "Please wait..." : "Create Account"}</button>
        <p className="text-center text-sm text-gray-500">
          Bina Sign Up ke dekhna hai?{" "}
          <a href="/demo" className="underline font-semibold text-black">Try Live Demo →</a>
        </p>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="underline font-semibold text-black">Login</a>
        </p>
      </form>
    </div>
  )
}
