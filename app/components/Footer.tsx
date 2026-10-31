"use client"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Mobile: branding upar, links neeche - Desktop: side by side */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 text-center md:text-left">
            {SITE_CONFIG.footerText}
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {SITE_CONFIG.footerLinks?.map((link: any) => (
              <Link key={link.name} href={link.href} className="text-sm text-zinc-500 hover:text-white transition">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
