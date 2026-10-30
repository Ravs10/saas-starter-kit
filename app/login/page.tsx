"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import PasswordInput from "@/app/components/PasswordInput"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [mode, setMode] = useState<"password" | "otp">("password")
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLocked, setIsLocked] = useState(false)
  const router = useRouter()

  function maskEmail(e: string) {
    const [n, d] = e.split("@"); if (!n || !d) return e;
    return n[0] + "***" + n.slice(-1) + "@" + d
  }

  async function handlePasswordLogin(e: any) {
    e.preventDefault()
    setLoading(true); setErrorMsg(""); setIsLocked(false)
    const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }), headers: { "Content-Type": "application/json" } })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("user_email", data.user.email)
      router.push("/dashboard")
    } else {
      setErrorMsg(data.error); if (data.locked) setIsLocked(true)
    }
  }

  async function sendOtp() {
    if (!email) return setErrorMsg("Enter email first")
    setLoading(true); setErrorMsg("")
    const res = await fetch("/api/auth/send-otp", { method: "POST", body: JSON.stringify({ email }), headers: { "Content-Type": "application/json" } })
    const data = await res.json()
    setLoading(false)
    if (data.success) { setOtpSent(true); setErrorMsg(`OTP sent to ${maskEmail(email)} - Valid for 5 minutes`) }
    else { setErrorMsg(data.error); if (data.locked) setIsLocked(true) }
  }

  async function handleOtpLogin(e: any) {
    e.preventDefault()
    setLoading(true); setErrorMsg("")
    const res = await fetch("/api/auth/login-otp-verify", { method: "POST", body: JSON.stringify({ email, otp }), headers: { "Content-Type": "application/json" } })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("user_email", data.user.email)
      router.push("/dashboard")
    } else {
      setErrorMsg(data.error); if (data.locked) setIsLocked(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-1">Welcome Back - Velora</h1>
        <p className="text-xs text-gray-500 mb-4">Secure • 5 attempts • 10 min lock • OTP valid 5 min</p>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode("password")} className={`flex-1 p-2 rounded text-sm ${mode === "password" ? "bg-black text-white" : "bg-gray-100"}`}>Password</button>
          <button onClick={() => setMode("otp")} className={`flex-1 p-2 rounded text-sm ${mode === "otp" ? "bg-black text-white" : "bg-gray-100"}`}>OTP Login</button>
        </div>

        <input className="w-full border p-3 rounded mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />

        {mode === "password" ? (
          <form onSubmit={handlePasswordLogin}>
            <PasswordInput value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Password" />
            <button disabled={loading || isLocked} className={`w-full mt-4 p-3 rounded text-white ${isLocked ? "bg-gray-400" : "bg-black"}`}>
              {loading ? "Checking..." : isLocked ? "Locked" : "Login with Password"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpLogin}>
            {!otpSent ? (
              <button type="button" onClick={sendOtp} disabled={loading || isLocked} className="w-full p-3 rounded bg-black text-white">
                {loading ? "Sending OTP..." : "Send OTP to Email"}
              </button>
            ) : (
              <>
                <input className="w-full border p-3 rounded mb-3" placeholder="6-digit OTP (Valid 5 min)" value={otp} onChange={e => setOtp(e.target.value)} required />
                <button disabled={loading} className="w-full p-3 rounded bg-black text-white">{loading ? "Verifying..." : "Login with OTP"}</button>
                <button type="button" onClick={sendOtp} className="w-full mt-2 text-xs underline">Resend OTP</button>
              </>
            )}
          </form>
        )}

        {errorMsg && <div className={`mt-4 p-3 rounded text-sm ${isLocked ? "bg-red-100 text-red-700 border border-red-300" : "bg-yellow-50 text-yellow-800 border"}`}>{errorMsg}</div>}

        <div className="flex justify-between mt-4 text-sm">
          <a href="/forgot-password" className="text-blue-600 hover:underline font-medium">Forgot / Change Password</a>
        </div>
        <p className="mt-3 text-center text-sm">No account? <a href="/signup" className="underline">Sign Up</a></p>
      </div>
    </div>
  )
}
