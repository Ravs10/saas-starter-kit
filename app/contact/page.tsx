export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-black text-white">
      <div className="max-w-xl mx-auto px-4 py-12 md:py-16">
        
        <a href="/" className="inline-block bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium mb-8">
          ← Back to Home
        </a>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Contact Us</h1>
        <p className="text-zinc-400 mt-3 text-[15px]">VELORA @ Founded by Yadav Ravish • We reply within 2 hours (9 AM - 9 PM IST)</p>

        <div className="mt-8 grid gap-4">
          {/* WhatsApp - Primary */}
          <a href="https://wa.me/918299746179" target="_blank" className="bg-[#25D366] hover:bg-[#20BD5A] text-black p-6 rounded-[20px] flex items-center justify-between transition">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase opacity-70">FASTEST - WhatsApp</p>
              <p className="font-bold text-lg mt-1">+91 82997 46179</p>
              <p className="text-sm mt-1 opacity-80">Click to chat directly</p>
            </div>
            <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">↗</div>
          </a>

          {/* Email */}
          <div className="bg-zinc-900 p-6 rounded-[20px] border border-zinc-800">
            <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">Email Support</p>
            <a href="mailto:run4ravish@gmail.com" className="font-medium mt-2 block text-white hover:underline">run4ravish@gmail.com</a>
            <p className="text-xs text-zinc-500 mt-3">For refund, support, and enterprise queries</p>
          </div>

          {/* Location & Founder */}
          <div className="bg-zinc-900 p-6 rounded-[20px] border border-zinc-800 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">Founder @ VELORA</p>
              <p className="font-medium mt-2">Yadav Ravish</p>
              <a href="https://x.com/yadavravish" target="_blank" className="text-sm text-zinc-400 hover:text-white">@yadavravish</a>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-500">Location</p>
              <p className="font-medium mt-2">UP</p>
              <p className="text-sm text-zinc-400">India • IST</p>
            </div>
          </div>

          {/* Direct Buy Box */}
          <div className="bg-white text-black p-6 rounded-[20px] mt-2">
            <h3 className="font-black text-lg">Want to buy Velora directly?</h3>
            <p className="text-sm text-gray-600 mt-2">Send a WhatsApp with <span className="font-bold text-black">"BUY VELORA - SaaS Starter Kit"</span> and get instant payment link + GitHub access within 2 hours.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro%20-%20Rs%203999" target="_blank" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold">Buy on WhatsApp</a>
              <a href="mailto:run4ravish@gmail.com?subject=Buy%20Velora%20Pro%20-%20Rs%203999" className="border border-gray-200 px-5 py-2.5 rounded-full text-sm font-medium">Email to Buy</a>
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-8">© 2026 Velora - All rights reserved.</p>
      </div>
    </div>
  )
}
