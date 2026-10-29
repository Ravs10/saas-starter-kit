import Link from "next/link"

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8 border px-4 py-2 rounded-full bg-white">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mt-2">Last updated: Oct 29, 2026</p>

      <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
        <p>Your privacy is important to us. We do not share your personal data.</p>
        <h2 className="text-xl font-semibold text-black mt-8">Information We Collect</h2>
        <p>We only collect email to provide our service.</p>
        <h2 className="text-xl font-semibold text-black">How We Use Data</h2>
        <p>We use your data to improve our service and provide support.</p>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black bg-white px-6 py-2.5 rounded-full border">
          ✕ Close and go to Home
        </Link>
      </div>
    </div>
  )
}
