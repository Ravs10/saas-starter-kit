import Link from "next/link"

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Top Back Button */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8 border px-4 py-2 rounded-full bg-white"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-sm text-gray-500 mt-2">Last updated: Oct 29, 2026</p>

      <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
        <p>By using this template you agree to these terms.</p>
        
        <h2 className="text-xl font-semibold text-black mt-8">1. License</h2>
        <p>Lifetime use for unlimited personal and client projects.</p>
        
        <h2 className="text-xl font-semibold text-black">2. Refund</h2>
        <p>14-day refund if not satisfied.</p>
        
        <h2 className="text-xl font-semibold text-black">3. Support</h2>
        <p>We provide support for setup related issues.</p>
      </div>

      {/* Bottom Close Button */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black bg-white px-6 py-2.5 rounded-full border">
          ✕ Close and go to Home
        </Link>
      </div>
    </div>
  )
}
