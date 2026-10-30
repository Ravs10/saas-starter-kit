"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PasswordInput from "@/app/components/PasswordInput"

export default function SettingsPage() {
  const [userEmail, setUserEmail] = useState("")
  const [oldPass, setOldPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")
  const router = useRouter()

  useEffect(() => {
    const u = localStorage.getItem("user")
    if (!u) { router.push("/login"); return }
    const parsed = JSON.parse(u)
    setUserEmail(parsed.email)
  }, [])

  function maskEmail(email: string) {
    const [n, d] = email.split("@")
    if (!n || !d) return email
    return n[0] + "***" + n.slice(-1) + "@" + d
  }

  async function changeInside(e: any) {
    e.preventDefault()
    setMsg("")
    if (newPass !== confirmPass) return setMsg("❌ New password and confirm not matching!")
    if (newPass.length < 6) return setMsg("❌ New password min 6 chars!")

    setLoading(true)
    try {
      const res = await fetch("/api/auth/update-password", {
        method: "POST",
        body: JSON.stringify({ email: userEmail, oldPassword: oldPass, newPassword: newPass }),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()
      setLoading(false)
      if (data.success) {
        setMsg("✅ Password changed successfully inside!")
        setOldPass(""); setNewPass(""); setConfirmPass("")
      } else {
        setMsg("❌ " + data.error)
      }
    } catch (err: any) {
      setLoading(false)
      setMsg("❌ " + err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mt-10">
        <h1 className="text-2xl font-bold mb-2">Settings - Velora</h1>
        <p className="text-sm text-gray-500 mb-6">Logged in as: {maskEmail(userEmail)}</p>

        <h2 className="font-semibold mb-3">Change Password (Inside)</h2>
        <form onSubmit={changeInside} className="space-y-3">
          <PasswordInput value={oldPass} onChange={(e:any)=>setOldPass(e.target.value)} placeholder="Old Password" />
          <PasswordInput value={newPass} onChange={(e:any)=>setNewPass(e.target.value)} placeholder="New Password" />
          <PasswordInput value={confirmPass} onChange={(e:any)=>setConfirmPass(e.target.value)} placeholder="Confirm New Password" />

          <button disabled={loading} className="w-full bg-black text-white p-3 rounded mt-2">
            {loading ? "Updating..." : "Update Password Inside"}
          </button>
        </form>

        {msg && <div className="mt-4 p-3 rounded text-sm bg-gray-100 border">{msg}</div>}

        <div className="mt-6 text-sm flex justify-between">
          <a href="/dashboard" className="underline">← Back to Dashboard</a>
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot? Reset via OTP</a>
        </div>
      </div>
    </div>
  )
}
