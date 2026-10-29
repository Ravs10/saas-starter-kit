import Link from "next/link"
import { SITE_CONFIG } from "@/app/config"

export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8 border px-4 py-2 rounded-full bg-white">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-black tracking-tight">Settings</h1>
      <p className="text-gray-600 mt-2">Manage your {SITE_CONFIG.name} account settings.</p>

      <div className="mt-10 space-y-4">
        <div className="bg-white p-5 rounded-2xl border flex justify-between items-center">
          <div>
            <p className="font-semibold">Email Notifications</p>
            <p className="text-sm text-gray-500">Receive updates about your account</p>
          </div>
          <div className="w-10 h-6 bg-black rounded-full p-1"><div className="w-4 h-4 bg-white rounded-full ml-auto"></div></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border flex justify-between items-center">
          <div>
            <p className="font-semibold">Theme</p>
            <p className="text-sm text-gray-500">Current: Light mode</p>
          </div>
          <span className="text-sm border px-3 py-1 rounded-full">Light</span>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black bg-white px-6 py-2.5 rounded-full border">
          ✕ Close and go to Home
        </Link>
      </div>
    </div>
  )
}
