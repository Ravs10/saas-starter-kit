export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA] text-black">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mt-3">Last updated: Nov 2026</p>
        <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 text-[15px] leading-7 text-gray-700">
          <p>At Velora, we take your privacy seriously. All data is secured via Cloudflare D1.</p>
          <p>We don't share your email with third parties. Your data is encrypted and stored safely.</p>
          <p>Contact us at privacy@velora.workers.dev for any concerns.</p>
        </div>
      </div>
    </div>
  )
}
