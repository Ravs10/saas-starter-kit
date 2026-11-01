/**
 * SITE_CONFIG - Central Configuration
 * Single source of truth for the entire website.
 */

export const SITE_CONFIG = {
  name: "Velora",
  logo: "V", // Fallback letter logo if image is not provided
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",
  url: "https://velora.workers.dev",

  theme: {
    primary: "#FFFFFF", // Primary CTA - white on black
    secondary: "#18181B", // Secondary - zinc-900 for cards and sections
    accent: "#FFD60A",
    body: "#000000", // Main background - pure black for premium look
    navbar: "#000000", // Navbar background
    navbarText: "#FFFFFF", // Navbar text color
  },

  // Founder Information
  founder: {
    name: "Yadav Ravish",
    location: "Uska, Uttar Pradesh, India",
    email: "yadavravish@velora.workers.dev", // Replace with your actual email
    twitter: "https://x.com/yadavravish", // Replace with your X handle
  },

  footerText: "© 2026 Velora - Founded by Yadav Ravish. All rights reserved.",

  footerLinks: [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],

  // Header Navigation
  navLinks: [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]
}
