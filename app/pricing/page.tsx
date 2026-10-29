import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar/>
      
      <div className="flex-1">
        <a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">← Back to Home</a>
        
        <div className="max-w-5xl mx-auto p-6 pb-16">
          <h1 className="text-4xl md:text-5xl font-black text-center">Simple Pricing</h1>
          <p className="text-center text-gray-500 mt-3">Choose your plan, scale with VELORA</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Free */}
            <div className="border rounded-2xl p-8 bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-orange-400 transition-all duration-300 group">
              <h3 className="font-bold text-xl">Free</h3>
              <p className="text-4xl font-black mt-4 group-hover:text-orange-500 transition">$0</p>
              <p className="text-sm text-gray-500 mt-2">Perfect to start</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>✓ 1 Project</li><li>✓ 100 Users</li><li>✓ Community Support</li>
              </ul>
              <a href="/signup" className="block mt-6 bg-black text-white text-center py-3 rounded-xl group-hover:bg-orange-500 transition font-bold">Get Started</a>
            </div>

            {/* Pro */}
            <div className="border-2 border-black rounded-2xl p-8 bg-black text-white hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">MOST POPULAR</span>
              <h3 className="font-bold text-xl">Pro</h3>
              <p className="text-4xl font-black mt-4">$19<span className="text-lg font-normal">/mo</span></p>
              <p className="text-sm text-white/60 mt-2">For growing teams</p>
              <ul className="mt-4 text-sm space-y-2 text-white/80">
                <li>✓ Unlimited Projects</li><li>✓ 10k Users</li><li>✓ Priority Support</li>
              </ul>
              <a href="/signup" className="block mt-6 bg-white text-black text-center py-3 rounded-xl hover:bg-orange-500 hover:text-white transition font-bold">Start Pro →</a>
            </div>

            {/* Enterprise */}
            <div className="border rounded-2xl p-8 bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-orange-400 transition-all duration-300 group">
              <h3 className="font-bold text-xl">Enterprise</h3>
              <p className="text-4xl font-black mt-4 group-hover:text-orange-500 transition">$99</p>
              <p className="text-sm text-gray-500 mt-2">For large scale</p>
              <ul className="mt-4 text-sm space-y-2">
                <li>✓ Everything in Pro</li><li>✓ Unlimited Users</li><li>✓ Dedicated Support</li>
              </ul>
              <a href="/signup" className="block mt-6 bg-black text-white text-center py-3 rounded-xl group-hover:bg-orange-500 transition font-bold">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
