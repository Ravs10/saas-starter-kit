// app/demo/settings/page.tsx - Demo Settings
export default function DemoSettings() {
  return (
    <div className="min-h-screen bg-black text-white p-6" style={{fontFamily:'sans-serif'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Velora - Demo Settings</h1>
          <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">DEMO MODE</span>
        </div>
        <p className="text-zinc-400 text-sm mt-1">This is a demo of Settings. In real version, you will setup your store here.</p>

        {/* Top Buttons */}
        <div className="flex gap-2 mt-5">
          <a href="/demo" className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg font-bold text-sm">📊 Dashboard</a>
          <a href="/demo/settings" className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">⚙️ Settings</a>
        </div>

        {/* General Settings */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl mt-5 p-5 space-y-4">
          <h2 className="font-bold">General Settings</h2>
          <div>
            <p className="text-sm font-bold">Shop Name</p>
            <input disabled value="My Demo Shop" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-400" />
            <p className="text-zinc-500 text-xs mt-1">Cannot change in Demo. You can change in real version.</p>
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

        {/* Security - Password Change Demo - NEW */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl mt-5 p-5 space-y-4">
          <h2 className="font-bold">Security & Password</h2>
          <p className="text-zinc-400 text-sm">Change your account password anytime from here.</p>
          
          <div>
            <p className="text-sm font-bold">Current Password</p>
            <input disabled type="password" value="********" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-400" />
          </div>
          <div>
            <p className="text-sm font-bold">New Password</p>
            <input disabled type="password" placeholder="Enter new password" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-500" />
          </div>
          <div>
            <p className="text-sm font-bold">Confirm New Password</p>
            <input disabled type="password" placeholder="Confirm new password" className="bg-black border border-zinc-700 w-full p-3 mt-2 rounded-lg text-zinc-500" />
          </div>

          <button disabled className="w-full bg-zinc-800 border border-zinc-700 text-zinc-400 font-bold py-3 rounded-lg text-sm cursor-not-allowed">
            Update Password - Disabled in Demo
          </button>
          <p className="text-zinc-500 text-xs text-center">In real version, this button will work and your password will be updated instantly.</p>

          <div className="flex justify-between items-center bg-black p-3 rounded-lg text-sm">
            <div>
              <p className="font-bold">Two-Factor Authentication (2FA)</p>
              <p className="text-zinc-500 text-xs">Extra security for your account</p>
            </div>
            <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">ON - Demo</span>
          </div>

          <button disabled className="w-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold py-3 rounded-lg text-sm cursor-not-allowed">
            Log Out From All Devices - Demo
          </button>
        </div>

        <div className="mt-6 text-center pb-24">
          <a href="/pricing" className="bg-white text-black font-bold px-6 py-3 rounded-lg inline-block">Buy Now To Unlock Real Settings</a>
        </div>
      </div>
    </div>
  )
}
