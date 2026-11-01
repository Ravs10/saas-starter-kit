export default function RefundPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA] text-black">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <a href="/" className="inline-block bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          ← Back to Home
        </a>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Refund Policy</h1>
        <p className="text-gray-500 mt-3 text-sm">Last updated: November 1, 2026</p>
        
        <div className="mt-8 bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-sm space-y-8 text-[15px] leading-7 text-gray-700">

          <section>
            <h2 className="text-lg font-bold text-black mb-2">1. 7-Day Money-Back Guarantee</h2>
            <p>We offer a <span className="font-semibold text-black">7-day money-back guarantee</span> for Velora SaaS Starter Kit. If you are not satisfied, you can request a full refund within 7 days of purchase.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">2. How to Request Refund</h2>
            <p>To request a refund, email us at:</p>
            <p className="mt-2 font-semibold text-black">yadavravish@velora.workers.dev</p>
            <p className="mt-2">Include your purchase email, transaction ID, and reason for refund.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">3. Conditions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request must be made within 7 days of purchase.</li>
              <li>Refund is valid only if you have not deployed Velora to a production project with more than 100 users.</li>
              <li>After 7 days, all sales are final.</li>
              <li>Source code must be deleted if refund is issued.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">4. Refund Timeline</h2>
            <p>Refunds are processed within <span className="font-semibold text-black">5-7 business days</span> after approval. Amount will be credited to your original payment method.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">5. Contact</h2>
            <p>For any questions about refunds:</p>
            <p className="mt-1 font-medium text-black">Founder @VELORA : Yadav Ravish</p>
            <p className="font-medium text-black">Email: yadavravish@velora.workers.dev</p>
          </section>

        </div>
      </div>
    </div>
  )
}
