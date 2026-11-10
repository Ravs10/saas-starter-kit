// app/demo/settings/page.tsx - Demo Settings
export default function DemoSettings() {
  return (
    <div className="min-h-screen bg-black text-white p-6" style={{fontFamily:'sans-serif'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Velora - Demo Settings</h1>
          <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">DEMO MODE</span>
        </div>
        <p className="text-zinc-400 text-sm mt-1">Ye Settings ka Demo hai. Real me yahan tum apni dukaan setup karoge.</p>

        {/* Top Buttons - Dashboard / Settings */}
        <div className="flex gap-2 mt-5">
          <a href="/demo" className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg font-bold text-sm">📊 Dashboard</a>
          <a href="/demo/settings" className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">⚙️ Settings</a>
        </div>

        {/* Settings Box */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl mt-5 p-5 space-y-4">
          <div>
            <p className="text-sm font-bold">Shop Name</p>
            <input disabled value="My Demo Shop" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-400" />
            <p className="text-zinc-500 text-xs mt-1">Demo me change nahi hoga, Real me hoga.</p>
          </div>
          <div>
            <p className="text-sm font-bold">Support Email</p>
            <input disabled value="run4ravish@gmail.com" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-400" />
          </div>
          <div>
            <p className="text-sm font-bold">License Key</p>
            <input disabled value="VELORA-DEMO-1234" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-400" />
            <p className="text-green-400 text-xs mt-1">✓ Demo Key Active - 4 Devices Allowed</p>
          </div>
          <div className="flex justify-between bg-black p-3 rounded-lg text-sm">
            <span>Devices Used</span>
            <span className="font-bold">1 / 4</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/pricing" className="bg-white text-black font-bold px-6 py-3 rounded-lg inline-block">Real Settings Ke Liye Kharido</a>
        </div>
      </div>
    </div>
  )
}
