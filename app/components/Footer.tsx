"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SITE_CONFIG } from "@/app/config"

export default function Footer() {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/settings") || pathname.startsWith("/login") || pathname.startsWith("/signup") || pathname.startsWith("/privacy") || pathname.startsWith("/terms")

  return (
    <footer className={`w-full border-t ${isDashboard ? 'bg-white border-gray-200 text-black' : 'bg-black border-zinc-900 text-white'}`}>
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-black tracking-tight text-sm">VELORA</p>
          <p className="text-xs mt-2 opacity-60">{SITE_CONFIG.footerText}</p>
        </div>
        <div className="flex gap-6 text-xs opacity-60">
          {SITE_CONFIG.footerLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:opacity-100 transition">{link.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
