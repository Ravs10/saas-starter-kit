"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PasswordInput from "@/app/components/PasswordInput"
import AuthGuard from "@/app/components/AuthGuard"

export default function SettingsPage() {
  return (
    <AuthGuard>
      <SettingsContent />
    </AuthGuard>
  )
}

function SettingsContent() {
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
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA] flex justify-center p-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md h-fit">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-black text-white text-[10px] tracking-widest px-3 py-1 rounded-full mb-4">SECURE SETTINGS</div>
          <h1 className="text-2xl font-black tracking-tight">Settings - Velora</h1>
          <p className="text-sm text-gray-500 mt-2">Logged in as: <span className="font-medium text-black">{maskEmail(userEmail)}</span></p>
        </div>

        <h2 className="font-semibold mb-4 text-[15px]">Change Password (Inside)</h2>
        <form onSubmit={changeInside} className="space-y-4">
          <PasswordInput value={oldPass} onChange={(e:any)=>setOldPass(e.target.value)} placeholder="Old Password" />
          <PasswordInput value={newPass} onChange={(e:any)=>setNewPass(e.target.value)} placeholder="New Password" />
          <PasswordInput value={confirmPass} onChange={(e:any)=>setConfirmPass(e.target.value)} placeholder="Confirm New Password" />

          <button disabled={loading} className="w-full bg-black text-white p-3 rounded-full mt-2 font-medium hover:bg-zinc-800 transition disabled:opacity-50">
            {loading ? "Updating..." : "Update Password Inside"}
          </button>
        </form>

        {msg && <div className="mt-5 p-3 rounded-xl text-sm bg-gray-50 border border-gray-100">{msg}</div>}

        <div className="mt-8 text-sm flex justify-between items-center border-t border-gray-100 pt-5">
          <a href="/dashboard" className="text-gray-500 hover:text-black transition">← Back to Dashboard</a>
          <a href="/forgot-password" className="text-black font-medium hover:underline">Forgot? Reset via OTP</a>
        </div>
      </div>
    </div>
  )
}
