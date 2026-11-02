'use client'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config' // agar path alag hai to check kar lena

export default function Activate() {
  const [key, setKey] = useState('')
  const [loading, setLoading] = useState(false)
  
  const activate = async () => {
    if(!key) return alert('Key daalo pehle')
    setLoading(true)
    const res = await fetch(`/api/verify-license?key=${key}`)
    const data = await res.json()
    setLoading(false)
    if (data.valid) {
      document.cookie = `velora_license=${key}; path=/; max-age=31536000`
      window.location.href = '/dashboard'
    } else {
      alert('Galat key hai, gumroad.com/library se copy karo')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6" style={{fontFamily:'sans-serif'}}>
      <div className="max-w-md w-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900">
        <h1 className="text-2xl font-bold">{SITE_CONFIG.name} - License Required</h1>
        <p className="mt-2 text-zinc-400 text-sm">Your LICENSE_KEY is missing or invalid. Activate to continue.</p>
        <input className="border border-zinc-700 bg-black w-full p-3 mt-6 rounded-lg outline-none focus:border-white" placeholder="VELORA-XXXX-XXXX" value={key} onChange={e=>setKey(e.target.value)} />
        <button onClick={activate} disabled={loading} className="bg-white text-black w-full p-3 mt-3 rounded-lg font-bold hover:bg-zinc-200 disabled:opacity-50">
          {loading ? 'Checking...' : 'Activate License'}
        </button>
        <div className="mt-6 bg-black p-4 rounded-lg text-sm border border-zinc-800">
          <p className="text-zinc-500">How to get key?</p>
          <p className="mt-1">1. Go to gumroad.com/library</p>
          <p>2. Find {SITE_CONFIG.name} product</p>
          <p>3. Copy license key & paste above</p>
        </div>
      </div>
    </div>
  )
}
