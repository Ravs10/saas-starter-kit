import Link from "next/link"
export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8">← Back to Home</Link>
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mt-2">Last updated: Oct 29, 2026</p>
      <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
        <p>We respect your privacy. We only collect what is necessary to run Ravish.</p>
        <h2 className="text-xl font-semibold text-black">1. Data Collection</h2>
        <p>We do not sell your data. All data is securely stored.</p>
        <h2 className="text-xl font-semibold text-black">2. Cookies</h2>
        <p>We use minimal cookies for authentication.</p>
      </div>
      <div className="mt-12 pt-8 border-t text-center"><Link href="/" className="text-sm text-gray-500 hover:text-black">✕ Close and go to Home</Link></div>
    </div>
  )
}
