import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 border-b border-zinc-800">
        <div className="flex items-baseline gap-3">
          <div className="text-xl font-bold tracking-widest">VELORA</div>
          <div className="text-[10px] tracking-[0.2em] text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full">SAAS STARTER KIT</div>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 text-sm text-zinc-400 hover:text-white">Login</Link>
          <Link href="/signup" className="px-5 py-2 text-sm bg-white text-black rounded-full font-medium">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-20 py-20 md:py-32 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs mb-6">
          Velora - Founded by Yadav Ravish • Next.js 15 + D1 + Resend
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
          Velora <br/> <span className="text-zinc-500">SaaS Starter Kit</span>
        </h1>
        <p className="text-zinc-500 text-xs tracking-widest mt-3">SHIP YOUR SAAS IN 1 HOUR</p>
        <p className="text-zinc-400 max-w-xl mx-auto mt-6 text-lg">
          Premium production-ready boilerplate by Velora - Founded by Yadav Ravish. Secure auth, OTP, 10min lock, edge DB.
        </p>
        <div className="flex justify-center gap-4 mt-10">
          <Link href="/signup" className="px-8 py-3 bg-white text-black rounded-full font-semibold">Buy for $29</Link>
          <Link href="/login" className="px-8 py-3 border border-zinc-800 rounded-full">Live Demo</Link>
        </div>
        <div className="mt-16 p-2 bg-zinc-900 rounded-2xl border border-zinc-800 max-w-4xl mx-auto">
          <div className="bg-zinc-950 rounded-xl p-4 text-left font-mono text-sm text-zinc-400">
            <div className="text-zinc-600">$ npx velora-saas-starter-kit my-saas</div>
            <div>✓ Creating Velora SaaS Starter Kit</div>
            <div>✓ Installing D1 database</div>
            <div>✓ Auth with bcrypt + OTP + 10min lock</div>
            <div className="text-white">✓ Ready to ship in 47s</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-20 py-20 grid md:grid-cols-3 gap-6 border-t border-zinc-900">
        {[
          { t: "Secure Auth", d: "bcrypt hashing, OTP login, 5 attempt = 10min lock, email normalization. By Yadav Ravish." },
          { t: "Edge Ready", d: "Cloudflare D1, OpenNext, 100% edge, zero cold start. Built for scale." },
          { t: "Email System", d: "Resend + Premium HTML template, 5 min expiry auto-clean." },
        ].map(f => (
          <div key={f.t} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="font-semibold mb-2">{f.t}</h3>
            <p className="text-sm text-zinc-400">{f.d}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="px-6 md:px-20 py-20 text-center border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-2">Velora SaaS Starter Kit Pricing</h2>
        <p className="text-zinc-500 text-sm mb-10">Founded by Yadav Ravish</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-zinc-800 text-left">
            <h3>Starter</h3><div className="text-3xl font-bold mt-2">$29</div><p className="text-sm text-zinc-500 mt-4">Single project license.</p>
            <Link href="/signup" className="mt-6 block text-center py-2 bg-zinc-900 rounded-full">Get Starter</Link>
          </div>
          <div className="p-8 rounded-2xl bg-white text-black text-left">
            <h3>Pro - Popular</h3><div className="text-3xl font-bold mt-2">$49</div><p className="text-sm text-zinc-600 mt-4">Unlimited projects + Payment kit.</p>
            <Link href="/signup" className="mt-6 block text-center py-2 bg-black text-white rounded-full">Get Pro</Link>
          </div>
          <div className="p-8 rounded-2xl border border-zinc-800 text-left">
            <h3>Agency</h3><div className="text-3xl font-bold mt-2">$99</div><p className="text-sm text-zinc-500 mt-4">Resell to clients. Full source.</p>
            <Link href="/signup" className="mt-6 block text-center py-2 bg-zinc-900 rounded-full">Get Agency</Link>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-zinc-600 border-t border-zinc-900">
        © 2026 Velora - Founded by Yadav Ravish. Built on Cloudflare.
      </footer>
    </div>
  )
}
