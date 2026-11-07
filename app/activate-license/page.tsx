'use client'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config'

const SUPPORT_EMAIL = 'support@velora.com' // <-- Yaha apna asli email daal dena, bas ye ek jagah badalni hai

export default function Activate() {
  const [key, setKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [devicesUsed, setDevicesUsed] = useState<number | null>(null)
  const [maxDevices, setMaxDevices] = useState(4)
  
  const activate = async () => {
    if(!key) { setError('Please enter your license key first'); return }
    setLoading(true)
    setError('')

    let deviceId = localStorage.getItem('velora_device_id')
    if (!deviceId) {
      deviceId = 'dev-' + Math.random().toString(36).slice(2) + Date.now().toString(36)
      localStorage.setItem('velora_device_id', deviceId)
    }

    const res = await fetch(`/api/verify-license?key=${encodeURIComponent(key.trim())}&device_id=${encodeURIComponent(deviceId)}`)
    const data = await res.json()
    setLoading(false)

    if (data.devices_used !== undefined) setDevicesUsed(data.devices_used)
    if (data.max_devices !== undefined) setMaxDevices(data.max_devices)

    if (data.valid) {
      try {
        localStorage.setItem('velora_license', key.trim())
        localStorage.setItem('user', JSON.stringify({ name: 'Velora Member', email: 'member@velora.com' }))
      } catch(e) {}
      document.cookie = `velora_license=${key.trim()}; path=/; max-age=31536000`
      window.location.href = '/dashboard'
    } else {
      setError(data.error || 'Invalid key. Please copy it from gumroad.com/library')
      if (data.devices_used !== undefined) setDevicesUsed(data.devices_used)
      if (data.max_devices !== undefined) setMaxDevices(data.max_devices)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6" style={{fontFamily:'sans-serif'}}>
      <div className="max-w-md w-full border border-zinc-800 p-8 rounded-2xl bg-zinc-900">
        <h1 className="text-2xl font-bold">{SITE_CONFIG.name} - License Required</h1>
        <p className="mt-2 text-zinc-400 text-sm">Your LICENSE_KEY is missing or invalid. Activate to continue.</p>

        {/* Device Counter */}
        {devicesUsed !== null && (
          <div className="mt-4 bg-zinc-800 p-3 rounded-lg text-sm">
            <p className="text-zinc-300">Devices Used: <span className="font-bold text-white">{devicesUsed} / {maxDevices}</span></p>
            <div className="w-full bg-zinc-700 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-white h-2 rounded-full" style={{width: `${Math.min((devicesUsed/maxDevices)*100, 100)}%`}}></div>
            </div>
            <p className="text-zinc-500 text-xs mt-2">This license is valid for {maxDevices} devices only.</p>
          </div>
        )}

        {/* Error Box - Red, clearly visible + Support Email Big */}
        {error && (
          <div className="mt-4 bg-red-500/10 border border-red-500/50 p-4 rounded-lg text-sm">
            <p className="text-red-400 font-bold">⚠️ Activation Failed</p>
            <p className="text-red-300 mt-1">{error}</p>
            <div className="mt-3 bg-black/50 border border-zinc-700 p-3 rounded-lg">
              <p className="text-zinc-300 text-xs">Need to use on a new device?</p>
              <p className="text-white text-sm font-medium mt-1">Contact Support to deactivate an old device:</p>
              <a href={`mailto:${SUPPORT_EMAIL}?subject=Deactivate Device - License Key`} className="text-white font-bold underline text-base break-all inline-block mt-1">{SUPPORT_EMAIL}</a>
              <p className="text-zinc-500 text-[11px] mt-1">Tap to send email directly</p>
            </div>
          </div>
        )}

        <input className="border border-zinc-700 bg-black w-full p-3 mt-6 rounded-lg outline-none focus:border-white" placeholder="VELORA-XXXX-XXXX" value={key} onChange={e=>setKey(e.target.value)} />
        <button onClick={activate} disabled={loading} className="bg-white text-black w-full p-3 mt-3 rounded-lg font-bold hover:bg-zinc-200 disabled:opacity-50">
          {loading ? 'Checking...' : 'Activate License'}
        </button>
        <div className="mt-6 bg-black p-4 rounded-lg text-sm border border-zinc-800">
          <p className="text-zinc-500">How to get your key?</p>
          <p className="mt-1">1. Go to gumroad.com/library</p>
          <p>2. Find {SITE_CONFIG.name} product</p>
          <p>3. Copy license key & paste above</p>
        </div>
      </div>
    </div>
  )
}
