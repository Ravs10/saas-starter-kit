Velora - SaaS Starter Kit

*Ship Your SaaS in 47 Seconds. Not in Hours.*

Premium production-ready boilerplate for http://Next.js 15 + Cloudflare D1 + Secure Auth + Email. Built for indie hackers who want to ship fast.

*Live Demo:* https://velora.workers.dev
*Founder:* Yadav Ravish, Uska, Uttar Pradesh, India
*Contact:* +91 8299746179 (WhatsApp) | yadavravish@velora.workers.dev

---

1. What is Velora?

Velora is not another landing page template. It's a complete SaaS foundation.

You get: Secure Authentication, Edge Database, Email System, Premium Black Theme, Pricing, Contact, Terms, Privacy - Everything ready.

One command and you are ready to code your features, not boilerplate.

npx create-velora-app my-saas

2. Tech Stack

- Framework: http://Next.js 15 App Router (TypeScript)
- Database: Cloudflare D1 (Edge SQLite, Zero Cold Start)
- Auth: bcrypt + JWT + OTP + 5 Attempts = 10 Min Lock
- Email: Resend with Premium HTML Template
- Styling: Tailwind CSS, Pure Black Theme #000000
- Deployment: Cloudflare Workers via OpenNext
- Security: Email Normalization, httpOnly Cookies, Encrypted D1

3. Features

Secure Auth System
- Password hashing with bcrypt (10 rounds)
- OTP login - 6 digit, 5 min expiry, auto cleanup
- Brute-force protection - 5 wrong tries = 10 min lock
- Email normalization (lowercase + trim)
- JWT in httpOnly secure cookie

Edge Ready
- Cloudflare D1 database
- 100% edge runtime
- Zero cold start, global scale
- Auto backup by Cloudflare

Premium Email
- Resend integration
- OTP delivery in <2 seconds
- Premium HTML email template (Black & White)
- From: noreply@velora.workers.dev

Premium UI
- Pure black theme #000000
- Mobile responsive
- SEO optimized
- Founder badge: Founded by Yadav Ravish

4. Project Structure

velora/
├── app/
│   ├── http://config.ts         # MAIN CONFIG - Single Source of Truth
│   ├── http://page.tsx          # Landing Page / Hero
│   ├── http://layout.tsx        # Root Layout
│   ├── pricing/page.tsx      # Pricing with Direct WhatsApp Sell
│   ├── contact/page.tsx      # Contact with WhatsApp +91 8299746179
│   ├── privacy/page.tsx      # GDPR Ready Privacy Policy
│   ├── terms/page.tsx        # Terms with 7-Day Refund
│   └── api/
│       ├── auth/         # Login, Signup, Verify
│       └── otp/          # Send & Verify OTP
├── components/
│   ├── http://Navbar.tsx        # Uses SITE_CONFIG.navLinks
│   └── http://Footer.tsx        # Uses SITE_CONFIG.footerText
├── lib/
│   ├── http://db.ts             # Cloudflare D1 Client
│   ├── http://auth.ts           # Auth Logic
│   └── http://email.ts          # Resend Wrapper
├── http://wrangler.toml         # Cloudflare Workers Config
├── .env.example          # Env Template for Buyers
├── .env.local            # Your Local Env (Not in Git)
└── http://README.md             # This File

5. SITE_CONFIG - How to Use

All website data is controlled from one file: app/config.ts

Example config:

export const SITE_CONFIG = {
  name: "Velora",
  logo: "V",
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",
  url: "https://velora.workers.dev",
  theme: {
    primary: "#FFFFFF",
    secondary: "#18181B",
    accent: "#FFD60A",
    body: "#000000",
    navbar: "#000000",
    navbarText: "#FFFFFF",
  },
  founder: {
    name: "Yadav Ravish",
    location: "Uska, Uttar Pradesh, India",
    email: "yadavravish@velora.workers.dev",
    emailSupport: "support@velora.workers.dev",
    twitter: "https://x.com/yadavravish",
    whatsapp: "+918299746179",
    whatsappLink: "https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro",
  },
  pricing: {
    pro: 3999,
    proOriginal: 9999,
    enterprise: 9999,
    currency: "₹",
    refundDays: 7,
  },
  footerText: "© 2026 Velora - Founded by Yadav Ravish. All rights reserved.",
  footerLinks: [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  navLinks: [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]
}

Use in any page:

import { SITE_CONFIG } from "@/app/config"

<h1>{SITE_CONFIG.name}</h1>
<p>Founder: {SITE_CONFIG.founder.name}</p>
<a href={SITE_CONFIG.founder.whatsappLink}>WhatsApp: {SITE_CONFIG.founder.whatsapp}</a>
<p>Price: {SITE_CONFIG.pricing.currency}{SITE_CONFIG.pricing.pro}</p>

Change once in http://config.ts, updates everywhere.

6. Environment Variables - .env Setup

.env.local - For Local (DO NOT push to GitHub)

D1_DATABASE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
JWT_SECRET=your_super_secret_jwt_32_chars_minimum
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@velora.workers.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FOUNDER_EMAIL=yadavravish@velora.workers.dev
NEXT_PUBLIC_WHATSAPP=+918299746179

.env.example - For GitHub

D1_DATABASE_ID=
JWT_SECRET=
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@velora.workers.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000

http://wrangler.toml - For Cloudflare Workers

name = "velora"
compatibility_date = "2024-12-01"

[assets]
directory = ".open-next/assets"
binding = "ASSETS"

[[d1_databases]]
binding = "DB"
database_name = "velora-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

[vars]
NEXT_PUBLIC_SITE_URL = "https://velora.workers.dev"

Add to .gitignore:
.env.local
.env
.dev.vars
.open-next

7. Quick Start Guide (For Buyers)

Step 1 - Buy Velora Pro
WhatsApp: https://wa.me/918299746179?text=Hi%20Ravish,%20I%20want%20to%20buy%20Velora%20Pro
Email: yadavravish@velora.workers.dev
Price: Rs 3999 Lifetime, Rs 9999 Enterprise
Payment: UPI / Bank Transfer
Delivery: Private GitHub access within 2 hours

Step 2 - Clone & Install
git clone https://github.com/yadavravish/velora.git
cd velora
npm install

Step 3 - Setup Env
Copy .env.example to .env.local and fill values.

Step 4 - Run Local
npm run dev

Step 5 - Deploy
npx wrangler d1 create velora-db
npm run deploy

8. Pricing & Refund Policy

Starter - Rs 0 - 1 Project, Community Support
Lifetime Pro (Most Popular) - Rs 3999 (Original Rs 9999) - Unlimited Projects, Premium Support, Private GitHub, Free Updates
Enterprise - Rs 9999 - Everything in Pro + Resell License + 1 Hour Setup Call

Refund: 7-Day Money Back Guarantee. Email yadavravish@velora.workers.dev within 7 days if not satisfied. Valid if not deployed to >100 users.

9. Legal Pages

- Terms: /terms - Single license, no resale of kit, 7-day refund
- Privacy: /privacy - GDPR ready, D1 encrypted, no third-party sharing
- Contact: /contact - Direct founder contact

All pages use SITE_CONFIG for founder info.

10. Contact & Support

Founder: Yadav Ravish
Location: Uska, Siddharthnagar, Uttar Pradesh, India
WhatsApp (Fastest): +91 8299746179 - Reply in 2 hours (9 AM - 9 PM IST)
Email: yadavravish@velora.workers.dev / support@velora.workers.dev
Twitter: https://x.com/yadavravish
Website: https://velora.workers.dev

To Buy: Send "BUY VELORA PRO" on WhatsApp https://wa.me/918299746179

11. Deployment Checklist

- [ ] Update SITE_CONFIG url to your domain
- [ ] Set D1_DATABASE_ID in .env.local and http://wrangler.toml
- [ ] Set RESEND_API_KEY and JWT_SECRET
- [ ] Test /pricing, /contact, /terms, /privacy pages
- [ ] Test WhatsApp links with +91 8299746179
- [ ] Run npm run build - Should have 0 errors
- [ ] Run npm run deploy to Cloudflare

12. License

You can build unlimited SaaS products for yourself and clients. You cannot resell Velora itself as a boilerplate/template. Single purchase, lifetime updates.

© 2026 Velora - Founded by Yadav Ravish. All rights reserved.

If Velora helps you ship faster, please star the repo!
Built with love, UP, India.
