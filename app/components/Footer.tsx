"use client"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 mt-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - footerText from config + Fallback branding */}
        <p className="text-sm text-zinc-500">
          {SITE_CONFIG.footerText || "© 2026 Velora - Founded by Yadav Ravish. Built on Cloudflare."}
        </p>

        {/* Right - footerLinks from config */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {SITE_CONFIG.footerLinks?.map((link: any) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-white transition capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
