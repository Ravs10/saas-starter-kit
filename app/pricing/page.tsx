// app/pricing/page.tsx - FINAL FIXED
export default function PricingPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        
        {/* Back Button */}
        <a href="/" className="inline-block bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium mb-10">
          ← Back to Home
        </a>

        {/* HEADING - YEHI MISSING THA */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Simple, Fair Pricing
          </h1>
          <p className="text-zinc-400 mt-4 text-[15px]">
            One time payment, lifetime access to Velora.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {/* Free */}
          <div className="bg-white text-black p-7 rounded-[24px]">
            <h3 className="font-bold">Free</h3>
            <p className="text-4xl font-black mt-3">$0</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✓ 1 Project</li>
              <li>✓ Basic support</li>
              <li>✓ Community access</li>
            </ul>
            <a href="/signup" className="block mt-8 border border-gray-200 text-center py-3 rounded-full font-medium">Get Started</a>
          </div>

          {/* Pro - Popular */}
          <div className="bg-white text-black p-7 rounded-[24px] border-2 border-black relative">
            <span className="absolute -top-3 right-6 bg-black text-white text-[10px] px-3 py-1 rounded-full tracking-widest">POPULAR</span>
            <h3 className="font-bold">Pro</h3>
            <p className="text-4xl font-black mt-3">$29</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>✓ Unlimited Projects</li>
              <li>✓ Priority support</li>
              <li>✓ All features</li>
            </ul>
            <a href="/signup" className="block mt-8 bg-black text-white text-center py-3 rounded-full font-medium">Get Pro</a>
          </div>

          {/* Enterprise */}
          <div className="bg-zinc-900 text-white p-7 rounded-[24px] border border-zinc-800">
            <h3 className="font-bold">Enterprise</h3>
            <p className="text-4xl font-black mt-3">$99</p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-400">
              <li>✓ Everything in Pro</li>
              <li>✓ Custom domain</li>
              <li>✓ Dedicated support</li>
            </ul>
            <a href="/contact" className="block mt-8 bg-white text-black text-center py-3 rounded-full font-medium">Contact Sales</a>
          </div>
        </div>

      </div>
    </div>
  )
}
