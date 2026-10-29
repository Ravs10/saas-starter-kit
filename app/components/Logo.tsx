import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      {SITE_CONFIG.logo ? (
        <img 
          src={SITE_CONFIG.logo} 
          alt={SITE_CONFIG.name} 
          className="h-7 md:h-8 w-auto" 
        />
      ) : (
        <span className="text-xl font-black tracking-tight">{SITE_CONFIG.name}</span>
      )}
    </Link>
  )
}
