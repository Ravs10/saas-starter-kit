import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8 border px-4 py-2 rounded-full bg-white">
        ← Back to Home
      </Link>

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Simple Pricing</h1>
        <p className="text-gray-600 mt-4">One time payment, lifetime access to {SITE_CONFIG.name}.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-[24px] border">
          <h3 className="text-xl font-bold">Free</h3>
          <p className="text-3xl font-black mt-4">$0</p>
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li>✓ 1 Project</li>
            <li>✓ Basic support</li>
            <li>✓ Community access</li>
          </ul>
          <Link href="/signup" className="mt-8 block text-center w-full py-3 rounded-full border font-semibold hover:bg-black hover:text-white transition">
            Get Started
          </Link>
        </div>

        <div className="bg-black text-white p-8 rounded-[24px] border relative">
          <div className="absolute -top-3 right-6 bg-white text-black text-xs px-3 py-1 rounded-full font-bold">POPULAR</div>
          <h3 className="text-xl font-bold">Pro</h3>
          <p className="text-3xl font-black mt-4">$29</p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li>✓ Unlimited Projects</li>
            <li>✓ Priority support</li>
            <li>✓ Lifetime updates</li>
          </ul>
          <Link href="/signup" className="mt-8 block text-center w-full py-3 rounded-full font-semibold text-white" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Sign up Now
          </Link>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black bg-white px-6 py-2.5 rounded-full border">
          ✕ Close and go to Home
        </Link>
      </div>
    </div>
  )
}
