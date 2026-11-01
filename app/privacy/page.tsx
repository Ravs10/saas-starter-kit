export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-[#F8F9FA] text-black">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <a href="/" className="inline-block bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          ← Back to Home
        </a>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mt-3 text-sm">Last updated: November 1, 2026</p>

        <div className="mt-8 bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-sm space-y-8 text-[15px] leading-7 text-gray-700">

          <section>
            <h2 className="text-lg font-bold text-black mb-2">1. Introduction</h2>
            <p>At Velora ("we", "our", "us"), operated by Yadav Ravish, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use velora.workers.dev and our SaaS Starter Kit.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold text-black">Account Information:</span> Email address, name when you sign up.</li>
              <li><span className="font-semibold text-black">Payment Information:</span> Processed securely via Razorpay / LemonSqueezy / Stripe. We do not store your card details.</li>
              <li><span className="font-semibold text-black">Usage Data:</span> Basic analytics like pages visited, to improve our product. No tracking cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">3. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Provide and maintain your Velora account</li>
              <li>Send important updates about your license</li>
              <li>Provide customer support</li>
              <li>Improve our website and starter kit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">4. Data Storage & Security</h2>
            <p>All data is securely stored and encrypted using Cloudflare D1 and Cloudflare infrastructure. We implement industry-standard security measures. Your data is hosted securely and is never sold to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">5. Third-Party Services</h2>
            <p>We use trusted third-party services:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><span className="font-semibold">Cloudflare</span> - Hosting & Database</li>
              <li><span className="font-semibold">Payment Gateway</span> - For secure payments</li>
              <li>No advertising trackers or data brokers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">6. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal data at any time. You can delete your account from Settings or contact us. We will process your request within 7 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-black mb-2">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact:<br />
              <span className="font-medium text-black">Yadav Ravish - Founder, Velora</span><br />
              <span className="font-medium text-black">Email: yadavravish@velora.workers.dev</span><br />
              <span className="font-medium text-black">Location: India</span>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
