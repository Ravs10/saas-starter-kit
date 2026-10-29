import Link from "next/link"
export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8">← Back to Home</Link>
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="text-sm text-gray-500 mt-2">Last updated: Oct 29, 2026</p>
      <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
        <p>By using this template you agree to these terms.</p>
        <h2 className="text-xl font-semibold text-black">1. License</h2>
        <p>Lifetime use for unlimited personal and client projects.</p>
        <h2 className="text-xl font-semibold text-black">2. Refund</h2>
        <p>14-day refund if not satisfied.</p>
      </div>
      <div className="mt-12 pt-8 border-t text-center"><Link href="/" className="text-sm text-gray-500 hover:text-black">✕ Close and go to Home</Link></div>
    </div>
  )
}
