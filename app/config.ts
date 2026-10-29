/**
 * SITE_CONFIG - Central Configuration
 * Single source of truth for the entire website.
 */

export const SITE_CONFIG = {
  /**
   * Brand / Project Name
   * Displayed in: Navbar, Hero Heading, Dashboard, Page Title, Footer
   */
  name: "Velora",

  /**
   * Logo URL
   * - If provided: Shows image (e.g., "/logo.png")
   * - If empty "": Shows first letter of name in a circle (e.g., "V")
   */
  logo: "",

  /**
   * Short tagline / description
   * Used in: Hero section, SEO meta description, Social share preview
   */
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",

  /**
   * Production URL (SEO Only)
   * Used for: og:url, canonical URL, sitemap.xml
   * Note: Changing this does not deploy your site, it is only for SEO.
   */
  url: "https://velora.workers.dev",

  /**
   * Theme Colors - Change here to update entire site
   */
  theme: {
    /**
     * Primary color: Used for all CTA buttons, Dashboard button, Logo fallback
     */
    primary: "#111111",

    /**
     * Secondary color: Used for badges, highlights, light backgrounds
     */
    secondary: "#EFF6FF",

    /**
     * Accent color: Used for hover effects, POPULAR tags, small highlights
     * Example: "Most Popular" badge, icon backgrounds, button hover glow
     */
    accent: "#FFD60A",

    /**
     * Body background: Global background for all pages (Home, Dashboard, etc.)
     */
    body: "#F8F9FA",

    /**
     * Navbar background: Only for Navbar component
     */
    navbar: "#FFFFFF",

    /**
     * Navbar text color: Color for nav links (Features, Pricing, etc.)
     */
    navbarText: "#000000",
  },

  /**
   * Footer copyright text
   */
  footerText: "© 2026 Velora. Founded by Yadav Ravish. All rights reserved.",

  /**
   * Footer links
   * To add: { name: "Blog", href: "/blog" }
   * To remove: Delete the object
   * Supports internal ("/privacy") and external ("https://...") links
   */
  footerLinks: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Settings", href: "/settings" },
  ],
}
