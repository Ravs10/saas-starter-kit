'use client'
import { useState } from 'react'
export default function Activate() {
  const [key, setKey] = useState('')
  const activate = async () => {
    const res = await fetch(`/api/verify-license?key=${key}`)
    const data = await res.json()
    if (data.valid) {
      document.cookie = `velora_license=${key}; path=/; max-age=31536000`
      window.location.href = '/dashboard'
    } else {
      alert('Galat key hai, gumroad.com/library se copy karo')
    }
  }
  return (
    <div className="p-10 max-w-md mx-auto" style={{fontFamily:'sans-serif'}}>
      <h1 className="text-2xl font-bold">VELORA - License Required</h1>
      <p className="mt-2">Your LICENSE_KEY is missing or invalid.</p>
      <input className="border w-full p-2 mt-4 rounded" placeholder="VELORA-XXXX" value={key} onChange={e=>setKey(e.target.value)} />
      <button onClick={activate} className="bg-black text-white w-full p-2 mt-2 rounded">Activate</button>
      <div className="mt-6 bg-gray-100 p-3 rounded text-sm">
        <p>1. Go to gumroad.com/library</p>
        <p>2. Copy your VELORA key</p>
        <p>3. Paste above</p>
      </div>
    </div>
  )
}
