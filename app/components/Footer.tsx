"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SITE_CONFIG } from "@/app/config"

export default function Footer() {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith("/dashboard") || pathname.startsWith("/settings") || pathname.startsWith("/login") || pathname.startsWith("/signup")

  return (
    <footer className={`w-full border-t mt-20 ${isDashboard ? 'bg-white border-gray-200' : 'bg-black border-zinc-900'}`}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className={`text-sm ${isDashboard ? 'text-gray-500' : 'text-zinc-500'}`}>{SITE_CONFIG.footerText}</p>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {SITE_CONFIG.footerLinks?.map((link: any) => (
            <Link key={link.name} href={link.href} className={`text-sm transition capitalize ${isDashboard ? 'text-gray-500 hover:text-black' : 'text-zinc-500 hover:text-white'}`}>{link.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
