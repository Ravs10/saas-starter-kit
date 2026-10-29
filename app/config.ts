/**
 * SITE_CONFIG - Central Configuration File
 * This is the SINGLE SOURCE OF TRUTH for your entire website.
 * Change anything here and it will reflect everywhere.
 */

export const SITE_CONFIG = {
  /**
   * name: Your brand / project name
   * Used in: Navbar (header logo text), Home page "Welcome to...", Dashboard greeting, Page Title, Footer
   * Example: If you change to "Velora", Navbar will show "Velora"
   */
  name: "Ravish",

  /**
   * logo: URL of your logo image
   * Used in: Navbar - Left side
   * How it works:
   * - If you provide a URL (e.g., "/logo.png" or "https://.../logo.jpg"), it will show that image.
   * - If you leave it empty "" , it will show the first letter of your name inside a colored circle (e.g., "R")
   * Example: logo: "/velora.png" or logo: "https://cdn.com/logo.svg"
   */
  logo: "",

  /**
   * description: Short tagline about your product
   * Used in: Home page hero section below the main heading, SEO meta description (what Google shows), Social share preview
   */
  description: "Build your SaaS 10x faster",

  /**
   * url: Your production/live website domain
   * Used in: SEO ONLY - Not for UI
   * - og:url (when someone shares your link on WhatsApp/Twitter)
   * - canonical URL (tells Google which is the main URL)
   * - sitemap.xml generation
   * Important: Changing this does NOT move your website. Your site will still be hosted where you deployed it (e.g., Cloudflare Workers).
   * Just keep it same as your live domain.
   * Example: "https://ravish.workers.dev" or "https://velora.com"
   */
  url: "https://ravish.workers.dev",

  /**
   * theme: Colors for the entire website
   */
  theme: {
    /**
     * primary: Main action color
     * Used in: Dashboard button, Navbar Dashboard button, Any CTA button, First letter circle when logo is empty
     */
    primary: "#DD6A00", // Orange

    /**
     * secondary: Secondary background color
     * Used in: Footer background (if you enable it), Light badges like "New - Ravish is Live"
     */
    secondary: "#EFF6FF", // Light Blue

    /**
     * body: Background color for ALL pages
     * Used in: app/layout.tsx -> <body style={{ backgroundColor: ... }}>
     * This controls the background of Home, Dashboard, Pricing, etc. all at once.
     * If you change this to "#000000", your entire site background will become black.
     */
    body: "#F8F9B4", // Light Gray - Default site background
  },

  /**
   * footerText: Copyright text at the bottom
   * Used in: Footer.tsx - Left side
   */
  footerText: "© 2026 Ravish. All rights reserved.",

  /**
   * footerLinks: List of links in the footer
   * Used in: Footer.tsx - Right side
   * How to add/edit:
   * - To add a new link: { name: "Blog", href: "/blog" }
   * - To remove: Just delete the object from the array
   * - href can be internal ("/privacy") or external ("https://twitter.com/ravish")
   */
  footerLinks: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "settings", href: "/settings" },
  ]
}
