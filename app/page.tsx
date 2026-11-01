import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="px-6 md:px-20 py-20 md:py-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] tracking-widest mb-6">
          FOUNDED BY YADAV RAVISH • NEXT.JS 15 + CLOUDFLARE D1 • 100% EDGE
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
          Ship Your SaaS<br/> <span className="text-zinc-500">in 47 Seconds.</span>
        </h1>
        <p className="text-zinc-500 text-[11px] tracking-[0.3em] mt-4 font-bold uppercase">Not in 1 Hour. In 47 Seconds.</p>
        <p className="text-zinc-400 max-w-xl mx-auto mt-6 text-[15px] leading-7">
          Velora SaaS Starter Kit is a premium, production-ready boilerplate. Auth with bcrypt + OTP + 10min lock, Resend emails, Cloudflare D1. No setup hell.
        </p>
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          <a href="https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro" target="_blank" className="px-8 py-3.5 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition">Buy for ₹3,999 →</a>
          <Link href="/pricing" className="px-8 py-3.5 border border-zinc-800 rounded-full font-medium hover:bg-zinc-900 transition">See Pricing</Link>
        </div>
        <p className="text-zinc-600 text-xs mt-4">7-day refund • Lifetime access • Reply in 2 hours</p>

        <div className="mt-16 p-2 bg-zinc-900 rounded-[24px] border border-zinc-800 max-w-4xl mx-auto shadow-2xl">
          <div className="bg-[#0A0A0A] rounded-[18px] p-5 text-left font-mono text-[13px] text-zinc-400 leading-6">
            <div className="flex gap-2 mb-4"><span className="w-3 h-3 rounded-full bg-red-500"></span><span className="w-3 h-3 rounded-full bg-yellow-500"></span><span className="w-3 h-3 rounded-full bg-green-500"></span></div>
            <div className="text-zinc-600">$ npx create-velora-app my-saas</div>
            <div className="mt-2">✓ Creating Velora SaaS Starter Kit...</div>
            <div>✓ Installing Cloudflare D1 database</div>
            <div>✓ Auth: bcrypt + OTP + 10min brute-force lock</div>
            <div>✓ Email: Resend + Premium HTML template</div>
            <div className="text-white font-bold mt-2">✓ Ready to ship in 47s. Happy coding, Ravish!</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-20 py-20 grid md:grid-cols-3 gap-6 border-t border-zinc-900">
        {[
          { t: "Secure Auth", d: "Bcrypt hashing, OTP login, 5 attempts = 10min lock, email normalization. Production-grade security." },
          { t: "Edge Ready", d: "Cloudflare D1 + OpenNext. 100% edge, zero cold start. Deployed on velora.workers.dev" },
          { t: "Email System", d: "Resend + Premium HTML template, 5 min expiry, auto-cleanup. No Spam." },
        ].map(f => (
          <div key={f.t} className="p-7 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition">
            <h3 className="font-bold mb-2">{f.t}</h3>
            <p className="text-sm text-zinc-400 leading-6">{f.d}</p>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-20 text-center border-t border-zinc-900 bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Ready to ship?</h2>
        <p className="text-zinc-500 text-sm mt-3">Join 100+ builders using Velora - Founded by Yadav Ravish.</p>
        <div className="flex justify-center gap-3 mt-8">
          <a href="https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro" className="px-8 py-3 bg-white text-black rounded-full font-bold">Get Velora for ₹3,999</a>
          <Link href="/contact" className="px-8 py-3 border border-zinc-800 rounded-full">Contact Founder</Link>
        </div>
      </section>
    </div>
  )
}
