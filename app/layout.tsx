import type { Metadata } from "next"
import "./globals.css"
import { SITE_CONFIG } from "./config"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["SaaS Starter Kit", "Next.js SaaS Template", "Velora", "Cloudflare SaaS", "SaaS Boilerplate"],
  authors: [{ name: SITE_CONFIG.name }],
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
