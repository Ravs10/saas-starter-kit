import { SITE_CONFIG } from "@/app/config"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t py-10 px-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <Logo />
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
