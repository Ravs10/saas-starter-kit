"use client"
import { useState } from "react"

export default function ActivatePage() {
  const [key, setKey] = useState("")
  const [msg, setMsg] = useState("")

  async function checkKey() {
    setMsg("Checking...")
    const res = await fetch(`/api/verify-license?key=${encodeURIComponent(key)}`)
    const data = await res.json()
    if (data.valid) {
      localStorage.setItem("velora_license", key)
      setMsg("✅ Activated! Ab site chalegi.")
      setTimeout(() => { window.location.href = "/" }, 1000)
    } else {
      setMsg("❌ " + (data.error || "Galat key hai"))
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Velora - Activate</h1>
      <p>Apni Velora wali key yahan daalo</p>
      <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="VELORA-XXXX-XXXX"
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
      />
      <button
        onClick={checkKey}
        style={{ width: "100%", padding: 12, marginTop: 10, background: "black", color: "white", borderRadius: 8, cursor: "pointer" }}
      >
        Activate
      </button>
      <p>{msg}</p>
    </div>
  )
}
