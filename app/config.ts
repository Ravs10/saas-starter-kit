/**
 * SITE_CONFIG - Central Configuration
 * Single source of truth for the entire website.
 */

export const SITE_CONFIG = {
  name: "Velora",
  logo: "",
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",
  url: "https://velora.workers.dev",

  theme: {
    primary: "#FFFFFF", // CTA buttons - white on black theme
    secondary: "#18181B", // zinc-900 for cards
    accent: "#FFD60A",
    body: "#000000", // FIXED: pure black for premium look
    navbar: "#000000", // FIXED: black navbar
    navbarText: "#FFFFFF", // FIXED: white text
  },

  footerText: "© 2026 Velora - Founded by Yadav Ravish. All rights reserved.",

  footerLinks: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Settings", href: "/settings" },
  ],
}
