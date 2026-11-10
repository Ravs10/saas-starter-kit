// app/demo/page.tsx - Demo Dashboard
export default function DemoDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6" style={{fontFamily:'sans-serif'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Velora - Demo Dashboard</h1>
          <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">DEMO MODE</span>
        </div>
        <p className="text-zinc-400 text-sm mt-1">Bina Key ke dekh rahe ho. Real me yahan tumhara data hoga.</p>

        {/* Top Buttons - Dashboard / Settings - LINK FIXED */}
        <div className="flex gap-2 mt-5">
          <a href="/demo" className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">📊 Dashboard</a>
          <a href="/demo/settings" className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg font-bold text-sm">⚙️ Settings</a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <p className="text-zinc-500 text-xs">Total Sales</p>
            <p className="text-lg font-bold mt-1 whitespace-nowrap">₹1.24L</p>
            <p className="text-green-400 text-[11px] mt-1">+12% ↑</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <p className="text-zinc-500 text-xs">Total Orders</p>
            <p className="text-2xl font-bold mt-1">142</p>
            <p className="text-green-400 text-xs mt-1">+8 new today</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
            <p className="text-zinc-500 text-xs">Customers</p>
            <p className="text-2xl font-bold mt-1">89</p>
            <p className="text-zinc-400 text-xs mt-1">4 devices linked</p>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl mt-5 p-4">
          <h2 className="font-bold">Recent Orders - Demo Data</h2>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between bg-black p-3 rounded-lg"><span>Aarav Sharma - Velora Pro</span><span className="text-green-400 font-bold">₹ 3,999 ✓ Paid</span></div>
            <div className="flex justify-between bg-black p-3 rounded-lg"><span>Priya Singh - Velora Pro</span><span className="text-green-400 font-bold">$ 45 ✓ Paid</span></div>
            <div className="flex justify-between bg-black p-3 rounded-lg"><span>Rahul Verma - Velora Pro</span><span className="text-yellow-400 font-bold">Pending</span></div>
          </div>
        </div>

        <div className="mt-6 text-center pb-24">
          <a href="/pricing" className="bg-white text-black font-bold px-6 py-3 rounded-lg inline-block">Pasand Aaya? Abhi Kharido</a>
        </div>
      </div>
    </div>
  )
}
