export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Logo */}
          <div className="text-center md:text-left">
            <img src="/velora-white-logo.png" alt="VELORA" className="h-8 w-auto mx-auto md:mx-0" />
            <p className="text-sm text-gray-500 mt-3 max-w-xs">
              Build your SaaS 10x faster. Next.js + Cloudflare starter.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-bold mb-3">Product</p>
              <div className="flex flex-col gap-2 text-gray-500">
                <a href="/pricing" className="hover:text-black transition">Pricing</a>
                <a href="/dashboard" className="hover:text-black transition">Dashboard</a>
                <a href="#" className="hover:text-black transition">Docs</a>
              </div>
            </div>
            <div>
              <p className="font-bold mb-3">Company</p>
              <div className="flex flex-col gap-2 text-gray-500">
                <a href="#" className="hover:text-black transition">Support</a>
                <a href="#" className="hover:text-black transition">Privacy</a>
                <a href="#" className="hover:text-black transition">Terms</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs text-gray-400">
          © 2026 VELORA. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
