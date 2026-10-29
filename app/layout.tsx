import type { Metadata } from "next"
import "./globals.css"
import { SITE_CONFIG } from "./config"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

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
      <body style={{ backgroundColor: SITE_CONFIG.theme.body }} className="antialiased">
        <Navbar />
        <main className="min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
