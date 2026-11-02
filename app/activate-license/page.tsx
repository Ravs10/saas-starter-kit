'use client'
import { useState } from 'react'
export default function Activate() {
  const [key, setKey] = useState('')
  const activate = async () => {
    const res = await fetch(`/api/verify-license?key=${key}`)
    const data = await res.json()
    if (data.valid) {
      document.cookie = `velora_license=${key}; path=/; max-age=31536000`
      alert('Activated! Ab dashboard kholo')
      window.location.href = '/dashboard'
    } else {
      alert('Galat key hai')
    }
  }
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Velora License Activate Karo</h1>
      <input className="border w-full p-2 mt-4" placeholder="VELORA-XXXX" value={key} onChange={e=>setKey(e.target.value)} />
      <button onClick={activate} className="bg-black text-white w-full p-2 mt-2">Activate</button>
    </div>
  )
}
