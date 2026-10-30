"use client"
import { useState } from "react"
import PasswordInput from "@/app/components/PasswordInput"

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [newPass, setNewPass] = useState("")
  const [loading, setLoading] = useState(false)

  async function sendOtp(e:any) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      alert(`OTP sent! Debug OTP: ${data.debug_otp} (D1 me bhi save hai)`)
      setStep(2)
    } else {
      alert("Error: " + data.error)
    }
  }

  async function changePass(e:any) {
    e.preventDefault()
    setLoading(true)
    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      body: JSON.stringify({ email, otp, newPassword: newPass }),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      alert("Password changed! Now login.")
      window.location.href = "/login"
    } else {
      alert("Error: " + data.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">
          {step === 1 ? "Forgot Password" : "Reset Password"}
        </h1>

        {step === 1 ? (
          <form onSubmit={sendOtp}>
            <input className="w-full border p-3 rounded mb-4" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <button disabled={loading} className="w-full bg-black text-white p-3 rounded">
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={changePass}>
            <input className="w-full border p-3 rounded mb-3" placeholder="Email" value={email} disabled />
            <input className="w-full border p-3 rounded mb-3" placeholder="6-digit OTP" value={otp} onChange={e=>setOtp(e.target.value)} required />
            <PasswordInput value={newPass} onChange={(e:any)=>setNewPass(e.target.value)} placeholder="New Password" />
            <button disabled={loading} className="w-full bg-black text-white p-3 rounded mt-2">
              {loading ? "Updating..." : "Change Password"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm"><a href="/login" className="underline">Back to Login</a></p>
      </div>
    </div>
  )
}
