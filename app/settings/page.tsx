import Navbar from "../components/Navbar"

export default function Settings() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <div className="max-w-3xl mx-auto p-6">
        <a href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full">← Back to Home</a>
        <h1 className="text-3xl font-bold">Settings</h1>
        
        <div className="mt-8 border rounded-2xl p-6">
          <h3 className="font-bold">Profile</h3>
          <input className="w-full mt-3 border p-3 rounded-xl" defaultValue="Ravish" />
          <input className="w-full mt-3 border p-3 rounded-xl" defaultValue="ravish@example.com" />
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl">Save</button>
        </div>

        <div className="mt-6 border rounded-2xl p-6">
          <h3 className="font-bold">Billing</h3>
          <p className="text-sm text-gray-500 mt-2">Current Plan: Free</p>
          <button className="mt-3 border px-6 py-2 rounded-xl">Upgrade to Pro</button>
        </div>
      </div>
    </div>
  )
}
