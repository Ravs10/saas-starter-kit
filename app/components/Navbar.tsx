import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <Link href="/" className="flex items-center">
        <img 
          src={SITE_CONFIG.logo} 
          alt={SITE_CONFIG.name} 
          className="h-7 md:h-8 w-auto" 
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/pricing" className="text-sm font-medium hover:text-black transition">
          Pricing
        </Link>
        <Link 
          href="/dashboard"
          className="text-sm font-bold px-5 py-2.5 rounded-full text-white transition"
          style={{ backgroundColor: SITE_CONFIG.theme.primary }}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  )
}
