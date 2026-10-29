import Navbar from "../components/Navbar"
export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full">← Back to Home</a>
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center">Simple Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border rounded-2xl p-8"><h3 className="font-bold text-xl">Free</h3><p className="text-4xl font-bold mt-4">$0</p><p className="mt-4 text-sm">1 Project, 100 Users</p><a href="/signup" className="block mt-6 bg-black text-white text-center py-3 rounded-xl">Get Started</a></div>
          <div className="border-2 border-black rounded-2xl p-8"><h3 className="font-bold text-xl">Pro</h3><p className="text-4xl font-bold mt-4">$19/mo</p><p className="mt-4 text-sm">Unlimited Projects</p><a href="/signup" className="block mt-6 bg-black text-white text-center py-3 rounded-xl">Start Pro</a></div>
          <div className="border rounded-2xl p-8"><h3 className="font-bold text-xl">Enterprise</h3><p className="text-4xl font-bold mt-4">$99/mo</p><p className="mt-4 text-sm">Everything + Support</p><a href="/signup" className="block mt-6 bg-black text-white text-center py-3 rounded-xl">Contact Us</a></div>
        </div>
      </div>
    </div>
  )
}
