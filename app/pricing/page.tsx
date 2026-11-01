// app/pricing/page.tsx - DIRECT SELL - PROFESSIONAL
export default function PricingPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        
        <a href="/" className="inline-block bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium mb-10">
          ← Back to Home
        </a>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Simple, Fair Pricing
          </h1>
          <p className="text-zinc-400 mt-4 text-[15px]">
            One-time payment. Lifetime access. Build unlimited SaaS.
          </p>
          <p className="text-zinc-500 mt-2 text-xs tracking-widest uppercase">7-Day Money Back Guarantee • Founded by Yadav Ravish</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {/* Starter - Free */}
          <div className="bg-[#111111] text-white p-7 rounded-[24px] border border-zinc-800">
            <h3 className="font-bold text-zinc-400 text-sm tracking-widest uppercase">Starter</h3>
            <p className="text-4xl font-black mt-3">₹0</p>
            <p className="text-zinc-500 text-xs mt-1">Free forever</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>✓ 1 Project Included</li>
              <li>✓ Basic Documentation</li>
              <li>✓ Community Support</li>
            </ul>
            <a href="/signup" className="block mt-8 bg-zinc-800 hover:bg-zinc-700 text-center py-3.5 rounded-full font-medium transition">Start for Free</a>
          </div>

          {/* Pro - Most Popular - DIRECT SELL */}
          <div className="bg-white text-black p-7 rounded-[24px] relative scale-[1.02] shadow-2xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-4 py-1.5 rounded-full tracking-widest font-bold">MOST POPULAR</span>
            <h3 className="font-bold text-sm tracking-widest uppercase text-gray-500">Lifetime Pro</h3>
            <p className="text-4xl font-black mt-3">₹3,999</p>
            <p className="text-gray-500 text-xs mt-1 line-through">₹9,999 • Save 60%</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✓ <span className="font-semibold">Unlimited Projects</span></li>
              <li>✓ Cloudflare D1 + Auth Ready</li>
              <li>✓ Premium Support (24h)</li>
              <li>✓ Future Updates Free</li>
              <li>✓ Private GitHub Access</li>
            </ul>
            <div className="mt-8 space-y-3">
              <a href="/contact" className="block bg-black text-white text-center py-3.5 rounded-full font-bold hover:bg-zinc-900 transition">Buy Now - Direct</a>
              <p className="text-[11px] text-center text-gray-400">UPI / Bank Transfer / WhatsApp<br/>Instant delivery within 2 hours</p>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-[#111111] text-white p-7 rounded-[24px] border border-zinc-800">
            <h3 className="font-bold text-zinc-400 text-sm tracking-widest uppercase">Enterprise</h3>
            <p className="text-4xl font-black mt-3">₹9,999</p>
            <p className="text-zinc-500 text-xs mt-1">For agencies</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>✓ Everything in Pro</li>
              <li>✓ Resell License</li>
              <li>✓ 1-Hour Setup Call</li>
              <li>✓ Custom Domain Setup</li>
            </ul>
            <a href="/contact" className="block mt-8 bg-white text-black text-center py-3.5 rounded-full font-bold">Contact Sales</a>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16 max-w-xl mx-auto">
          <p className="text-zinc-500 text-sm">Questions? Contact directly: <a href="mailto:yadavravish@velora.workers.dev" className="text-white underline">yadavravish@velora.workers.dev</a></p>
          <p className="text-zinc-600 text-xs mt-2">Secure payment via UPI • Instant access • 7-day refund</p>
        </div>

      </div>
    </div>
  )
}
