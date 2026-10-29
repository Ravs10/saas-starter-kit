"use client"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Footer() {
  return (
    <footer className="w-full border-t mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left - footerText from config */}
        <p className="text-sm text-gray-500">
          {SITE_CONFIG.footerText}
        </p>

        {/* Right - footerLinks from config */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {SITE_CONFIG.footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-500 hover:text-black transition capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}
