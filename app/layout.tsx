import type { Metadata } from "next"
import "./globals.css"
import { SITE_CONFIG } from "./config"

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Yahi se pure website ka background color control hoga */}
      <body style={{ backgroundColor: SITE_CONFIG.theme.body }} className="antialiased">
        {children}
      </body>
    </html>
  )
}
