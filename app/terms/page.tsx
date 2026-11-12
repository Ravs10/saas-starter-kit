export default function TermsPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA] text-black">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <a href="/" className="inline-block bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          ← Back to Home
        </a>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms & Conditions</h1>
        <p className="text-gray-500 mt-3 text-sm">Last updated: November 1, 2026</p>
        
        <div className="mt-8 bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-sm space-y-8 text-[15px] leading-7 text-gray-700">

          <section>
            <h2 className="text-lg font-bold text-black mb-2">1. Acceptance of Terms</h2>
            <p>By purchasing, downloading, or using Velora SaaS Starter Kit ("Product") from velora.workers.dev, you agree to be bound by these Terms. If you do not agree, please do not purchase or use the Product. Velora is founded and maintained by Yadav Ravish.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">2. License</h2>
            <p>Upon purchase, you are granted a single, non-exclusive, non-transferable license to use Velora to build unlimited SaaS projects for yourself or your clients. You may not resell, redistribute, or share the source code as a starter kit, template, or boilerplate.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">3. 7-Day Refund Policy</h2>
            <p>We offer a <span className="font-semibold text-black">7-day money-back guarantee</span>. If you are not satisfied with Velora, you can request a full refund within 7 days of purchase.</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Refund request must be sent to <span className="font-semibold">yadavravish@velora.workers.dev</span> within 7 days.</li>
              <li>Refund is valid only if you have not deployed Velora to a production project with more than 100 users.</li>
              <li>After 7 days, all sales are final and no refunds will be issued.</li>
              <li>Refunds are processed within 5-7 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">4. Support</h2>
            <p>Support is provided via the Contact page and email. We provide setup assistance and bug fixes for the original kit. Custom development or feature requests are not included in the standard license.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">5. Disclaimer</h2>
            <p>Velora is provided "as is" without warranty. Any SaaS product you build using this kit is your own responsibility. We are not liable for any loss of data, revenue, or business resulting from use of the kit.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">6. Contact</h2>
            <p>For any questions regarding these Terms, please contact: <br />
              <span className="font-medium text-black">Founder @VELORA : Yadav Ravish</span><br />
              <span className="font-medium text-black">Email: run4ravish@gmail.com</span><br />
              <span className="font-medium text-black">Location: India</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
