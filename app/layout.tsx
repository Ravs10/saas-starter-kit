import { SITE_CONFIG } from "./config"

export const metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ "--primary-color": SITE_CONFIG.theme.primary } as any}>
        {children}
      </body>
    </html>
  )
}
