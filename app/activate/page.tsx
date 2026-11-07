"use client"
import { useState } from "react"

export default function ActivatePage() {
  const [key, setKey] = useState("")
  const [msg, setMsg] = useState("")

  async function checkKey() {
    if (!key) { setMsg("Pehle key daalo"); return }
    setMsg("Checking...")
    try {
      const res = await fetch("/api/verify-license?key=" + encodeURIComponent(key))
      const data = await res.json()
      if (data.valid) {
        try { localStorage.setItem("saas_license", key) } catch (e) {}
        setMsg("Activated! Ab site chalegi.")
        setTimeout(() => { window.location.href = "/" }, 1000)
      } else {
        setMsg("Galat key hai")
      }
    } catch (e) {
      setMsg("Server se connect nahi ho raha")
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 20, textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Activate</h1>
      <p>Apni license key yahan daalo</p>
      <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="SAAS-XXXX-XXXX"
        style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid #ccc", boxSizing: "border-box" }}
      />
      <button onClick={checkKey} style={{ width: "100%", padding: 12, marginTop: 10, background: "black", color: "white", borderRadius: 8 }}>
        Activate
      </button>
      <p>{msg}</p>
    </div>
  )
}
