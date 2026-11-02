/**
 * SITE_CONFIG - Central Configuration
 * Single source of truth for the entire Velora website.
 * Change values here, they will reflect everywhere automatically.
 * 
 * Founder: Yadav Ravish | velora.workers.dev
 */

export const SITE_CONFIG = {
  // ========== BASIC SITE INFO ==========
  // This appears in metadata, SEO, and homepage hero
  name: "Velora",
  logo: "V", // Fallback letter logo - shown when no image logo is set
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",
  url: "https://saas-starter-kit.workers.dev", // IMPORTANT: Change this when you deploy to custom domain

  // ========== THEME COLORS ==========
  // Pure black premium theme - Don't change unless you want different look
  theme: {
    primary: "#FFFFFF", // Primary CTA buttons - white on black background
    secondary: "#18181B", // Secondary - zinc-900 for cards, sections, footer
    accent: "#FFD60A", // Accent color for highlights, badges, special offers
    body: "#000000", // Main page background - pure black for premium feel
    navbar: "#000000", // Navbar background - keep same as body for seamless look
    navbarText: "#FFFFFF", // Navbar text color - white for contrast
  },

  // ========== FOUNDER & CONTACT INFO ==========
  // All contact methods - Used in contact page, pricing page, and footer
  founder: {
    name: "Yadav Ravish", // Your full name - shown everywhere as founder
    location: "Uttar Pradesh, India", // Your city/state - for trust building
    email: "yadavravish@velora.workers.dev", // Primary email - for sales & direct contact
    emailSupport: "support@velora.workers.dev", // Support email - for help & refunds
    twitter: "https://x.com/yadavravish", // Your X/Twitter profile - for social proof
    whatsapp: "+918299746179", // Your WhatsApp number - MUST include country code (+91)
    whatsappLink: "https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro", // Pre-filled WhatsApp message - user clicks and message is ready
  },

  // ========== PRICING CONFIG ==========
  // Change pricing here once, it updates on pricing page and hero section
  pricing: {
    pro: 3999, // Current Pro plan price - Lifetime deal
    proOriginal: 9999, // Original price - shown as strikethrough to show discount
    enterprise: 9999, // Enterprise/Agency plan price
    currency: "₹", // Currency symbol - ₹ for India, $ for US
    refundDays: 7, // Refund policy - number of days for money back guarantee
  },

  // ========== FOOTER CONFIG ==========
  // Footer text and links - shown at bottom of every page
  footerText: "© 2026 Velora - Founded by Yadav Ravish. All rights reserved.",

  footerLinks: [
    // Add or remove footer links here - order matters
    { name: "Pricing", href: "/pricing" }, // Links to /app/pricing/page.tsx
    { name: "Contact", href: "/contact" }, // Links to /app/contact/page.tsx
    { name: "Privacy", href: "/privacy" }, // Links to /app/privacy/page.tsx
    { name: "Terms", href: "/terms" }, // Links to /app/terms/page.tsx
    { name: "Refund", href: "/refund" }, // Links to /app/refund/page.tsx
  ],

  // ========== NAVBAR CONFIG ==========
  // Top navigation links - shown in header navbar
  navLinks: [
    // Keep only important links here - max 2-3 recommended for clean look
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]
}
