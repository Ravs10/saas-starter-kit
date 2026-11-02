Velora - SaaS Starter Kit
Ship Your SaaS in 47 Seconds. Not in Hours.
Premium production-ready boilerplate for Next.js 15 + Cloudflare D1 + Secure Auth + Email + License System

Live Demo: https://saas-starter-kit.run4ravish.workers.dev
Founder: Yadav Ravish, Uska, Uttar Pradesh, India
Contact: +91 8299746179 (WhatsApp) | yadavravish@velora.workers.dev

1. What is Velora?

Velora is not another landing page template. It's a complete SaaS foundation.

You get: Secure Authentication, Edge Database, Email System, License System, Premium Black Theme, Pricing, Contact, Terms, Privacy - Everything ready.

Quick Start:
git clone https://github.com/yadavravish/velora.git
cd velora
npm install
npm run dev

2. Tech Stack

- Framework: Next.js 15 App Router (TypeScript)
- Database: Cloudflare D1 (Edge SQLite, Zero Cold Start)
- Auth: bcrypt + JWT + OTP + 5 Attempts = 10 Min Lock
- Email: Resend with Premium HTML Template
- Styling: Tailwind CSS, Pure Black Theme #000000
- Deployment: Cloudflare Workers via OpenNext
- Security: Email Normalization, httpOnly Cookies, Encrypted D1, License Verification
- License: Gumroad License Key System

3. Features

Secure Auth System
- Password hashing with bcrypt (10 rounds)
- OTP login - 6 digit, 5 min expiry, auto cleanup
- Brute-force protection - 5 wrong tries = 10 min lock
- Email normalization (lowercase + trim)
- JWT in httpOnly secure cookie

License System (NEW)
- Gumroad license verification via /api/verify-license
- Cookie based auth - velora_license
- Middleware protection for /dashboard and /settings
- Activate page at /activate-license
- Uses req.nextUrl.origin so works on localhost + production auto

Edge Ready
- Cloudflare D1 database
- 100% edge runtime, Zero cold start
- Auto backup by Cloudflare

Premium Email
- Resend integration, OTP <2 seconds
- Premium HTML template (Black & White)
- From: noreply@velora.workers.dev

Premium UI
- Pure black theme #000000
- Mobile responsive, SEO optimized
- Founder badge: Founded by Yadav Ravish

4. Project Structure

velora/
├── app/
│   ├── config.ts               # MAIN CONFIG - Single Source of Truth
│   ├── page.tsx                # Landing Page / Hero
│   ├── layout.tsx              # Root Layout
│   ├── pricing/page.tsx        # Pricing
│   ├── contact/page.tsx        # Contact with WhatsApp +91 8299746179
│   ├── privacy/page.tsx        # GDPR Ready
│   ├── terms/page.tsx          # Terms with 7-Day Refund
│   ├── refund/page.tsx         # Refund Policy
│   ├── activate-license/page.tsx # License Activation
│   ├── dashboard/page.tsx      # Protected Dashboard
│   └── api/
│       ├── auth/               # Login, Signup, Verify
│       ├── otp/                # Send & Verify OTP
│       └── verify-license/     # Gumroad License Check
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── db.ts                   # D1 Client - REQUIRED
│   ├── auth.ts                 # Auth Logic - REQUIRED
│   └── email.ts                # Resend Wrapper - REQUIRED
├── middleware.ts               # License Protection
├── wrangler.toml               # Cloudflare Workers Config
├── .env.example
└── README.md

5. SITE_CONFIG - How to Use (CORRECTED URL)

File: app/config.ts

export const SITE_CONFIG = {
  name: "Velora",
  logo: "V",
  description: "Build your SaaS 10x faster - Founded by Yadav Ravish",
  url: "https://saas-starter-kit.run4ravish.workers.dev", // <-- CORRECTED WITH run4ravish
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
    { name: "Refund", href: "/refund" },
  ],
  navLinks: [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]
}

6. Environment Variables

.env.local (DO NOT push)
D1_DATABASE_ID=xxxxxxxx
JWT_SECRET=your_super_secret_jwt_32_chars_minimum
RESEND_API_KEY=re_xxxx
RESEND_FROM_EMAIL=noreply@velora.workers.dev
NEXT_PUBLIC_SITE_URL=https://saas-starter-kit.run4ravish.workers.dev
GUMROAD_PRODUCT_ID=your_gumroad_product_id

.env.example (For Buyers)
D1_DATABASE_ID=
JWT_SECRET=
RESEND_API_KEY=
RESEND_FROM_EMAIL=noreply@velora.workers.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000

7. Quick Start Guide (For Buyers)

Step 1 - Buy
Global: Gumroad - $29 Lifetime
India: WhatsApp https://wa.me/918299746179 - Rs 3999 Lifetime

Step 2 - Clone & Install
git clone https://github.com/yadavravish/velora.git
cd velora
npm install

Step 3 - Setup Env
Copy .env.example to .env.local and fill values

Step 4 - Run Local
npm run dev
Open http://localhost:3000/activate-license

Step 5 - Deploy to Cloudflare
npx wrangler d1 create velora-db
npm run deploy

8. License System Explained

middleware.ts:
import { NextResponse } from 'next/server'
export async function middleware(req) {
  const license = req.cookies.get('velora_license')?.value
  if (!license) return NextResponse.redirect(new URL('/activate-license', req.url))
  const res = await fetch(`${req.nextUrl.origin}/api/verify-license?key=${license}`)
  const data = await res.json()
  if (!data.valid) return NextResponse.redirect(new URL('/activate-license', req.url))
  return NextResponse.next()
}
export const config = { matcher: ['/dashboard/:path*', '/settings/:path*'] }

- Uses req.nextUrl.origin = auto works on localhost + Cloudflare
- No hardcoded URL needed

activate-license/page.tsx:
- Fetches /api/verify-license?key=KEY (relative URL)
- Sets cookie velora_license on success

9. Pricing & Refund

Starter - Rs 0 - 1 Project
Pro (Most Popular) - Rs 3999 / $29 - Unlimited Projects, License System, Private GitHub
Enterprise - Rs 9999 / $79 - Resell License + Setup Call
Refund: 7-Day Money Back, Email support@velora.workers.dev

10. Contact

Founder: Yadav Ravish
Location: Uska, Siddharthnagar, UP, India
WhatsApp: +91 8299746179 (9 AM - 9 PM IST) - Reply in 2 hours
Email: yadavravish@velora.workers.dev / support@velora.workers.dev
Website: https://saas-starter-kit.run4ravish.workers.dev

Deployment Checklist:
- [x] SITE_CONFIG url = https://saas-starter-kit.run4ravish.workers.dev
- [x] Email single = yadavravish@velora.workers.dev
- [x] middleware uses req.nextUrl.origin
- [x] activate-license uses relative /api/verify-license
- [ ] Set GUMROAD_PRODUCT_ID in Cloudflare
- [ ] npm run deploy

© 2026 Velora - Founded by Yadav Ravish
