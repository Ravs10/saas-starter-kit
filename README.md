Velora - SaaS Starter Kit

Important: If OTP is coming only to your own email, read DOMAIN-SETUP.md first. You need to verify your own domain in Resend for public users.

Ship Your SaaS in 47 Seconds. Not in Hours.
Premium production-ready boilerplate for Next.js 15 + Cloudflare D1 + Secure Auth + Email + License System

Try Demo Without Key
No need to buy to see Demo:
- Dashboard Demo: /demo
- Settings Demo: /demo/settings
- Demo includes Password Change preview, but it is disabled in Demo.
Live Demo: https://saas-starter-kit.run4ravish.workers.dev
Founder: Yadav Ravish, Uttar Pradesh, India
Support: run4ravish@gmail.com | WhatsApp +91 8299746179

What You Get

Velora is not a landing page template. It is a complete SaaS foundation.

- Secure Login / Signup / OTP Login / Change Password
- License System with License Key
- Premium Black Theme
- Pricing, Contact, Terms, Privacy, Refund Pages Ready
- Dashboard Protected by License
- Stripe Payment Ready (Buyer uses their OWN Stripe account)
- Mobile Responsive

Tech Stack

- Next.js 15 App Router (TypeScript)
- Cloudflare D1 Database
- Secure Auth + OTP (Better Auth)
- Email System (Resend)
- Stripe Payments
- Tailwind CSS - Pure Black Theme
- Deployment on Cloudflare Workers

What You Need Before Starting

1. Node.js installed on your computer (Mobile users: See HOW-TO-USE-ON-MOBILE.md - No Laptop Needed)
2. A free Cloudflare account
3. A free Resend account (For OTP Email)
4. A free Stripe account (For Payments - Optional for testing, Required for real payments)
5. Your License Key (You get it after buying)
6. Your Email for OTP

You do NOT need any secret key from us. All keys you will create yourself in your own account.

How To Buy - 2 Ways

Way 1 - Direct From Velora (India - Recommended)
Best for Indian Buyers - UPI / WhatsApp

1. WhatsApp us: https://wa.me/918299746179
2. Send message: "BUY VELORA - SaaS Starter Kit"
3. Founder will send you UPI Payment Link - Rs 3999
4. After payment, you will get on WhatsApp / Email:
   - ZIP File OR GitHub Access
   - Your License Key (Founder will provide it)
5. Then start from Step 2 below
6. For License Activation, use the Key given by Founder. Gumroad is NOT needed.
For Direct Buyer, Gumroad step is skipped. License Key is given directly by Founder.

Way 2 - Gumroad (Global)
For International Buyers - Card / PayPal

1. Buy from Gumroad Product Page - $45 Lifetime
2. After payment, Gumroad will give you:
   - ZIP File Download Link
   - Your License Key
3. Then start from Step 2 below
4. For License Activation, use the Key given by Gumroad

Quick Start - For Buyer

Step 1 - Buy
Choose Way 1 (Direct) or Way 2 (Gumroad) from above. After buying, you will have ZIP File + License Key.

Step 2 - Install
git clone https://github.com/yadavravish/velora.git
cd velora
npm install
If you got ZIP File, extract it and open that folder, then run npm install.

Step 3 - Create Database (Cloudflare D1) - VERY IMPORTANT
Bina iske Signup / Login kaam nahi karega.

1. Go to https://dash.cloudflare.com > Login
2. Go to Workers & Pages > Storage & Databases > D1 SQL Database
3. Click Create Database > Name: velora_db > Create
4. Copy the Database ID - Save it in Notes
5. Open wrangler.json in this project and paste your Database ID:
"d1_databases": [{ "binding": "DB", "database_name": "velora_db", "database_id": "PASTE-YOUR-D1-ID-HERE" }]
6. For Cloudflare Deploy: Go to Workers & Pages > Your Project > Settings > Bindings > Add Binding
   Type = D1 Database, Variable name = DB, Database = velora_db

Step 4 - Setup Your Own Env File
Copy .env.example to .env.local
Fill your own values in .env.local - Do not share this file with anyone.

You will need to create:
- Your own BETTER_AUTH_SECRET (any long random text from randomkeygen.com)
- Your own BETTER_AUTH_URL + NEXT_PUBLIC_APP_URL (Your site URL - Both must be SAME)
- Your own Database in your Cloudflare account (Step 3)
- Your own Email API Key in your Resend account (Starts with re_)
- Your own RESEND_FROM (Use onboarding@resend.dev for testing)
- Your own VELORA_KEYS (Your License Key)
- Your own Stripe Keys (See Step 8)

Full steps are inside .env.example file. All variable names in .env.local and Cloudflare must be EXACTLY same.

Step 5 - Run Locally
npm run dev
Open http://localhost:3000
For Local: BETTER_AUTH_URL=http://localhost:3000 and NEXT_PUBLIC_APP_URL=http://localhost:3000

Step 6 - Test Your Account
1. Go to /signup - Create your account
2. Go to /login - Login with same account (OTP will come on email)
3. Go to Settings - Try Change Password

Step 7 - Activate Your License
1. Go to http://localhost:3000/activate-license
2. Enter your License Key
   - Direct Buyer: Use the Key given by Founder on WhatsApp / Email
   - Gumroad Buyer: Use the Key given by Gumroad
3. Click Activate
4. Now you can open /dashboard
If License is wrong, Dashboard will send you back to Activate page. This is normal.

Step 8 - Stripe Setup (For Payments)
Buyer will use their OWN Stripe account. Money goes directly to buyer's account, not to Velora.

For Testing / Demo (No Stripe Account Needed):
Use dummy keys in .env.local / Cloudflare Variables:
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_dummy_test_1234567890
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_xxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE=price_xxxxxxxxxxxxxxxx
Site will build and run, checkout will open in test mode.

For Real Payments:
1. Go to https://dashboard.stripe.com > Create YOUR OWN account
   WARNING: If you see any other company name on top (e.g. Quora, Inc.), click it > Create a new Stripe account > Create for your own business. Never use someone else's Connect account key - money will go to them.
2. Complete KYC: PAN, Bank Account, Aadhaar / Address proof
3. Go to Developers > API Keys - Copy sk_live_ and pk_live_ keys
4. Go to Developers > Webhooks > Add Endpoint
   URL = https://your-site.workers.dev/api/stripe/webhook
   Event = checkout.session.completed
   Copy whsec_ key
5. Go to Dashboard > Products > Create Product (Pro - $45, Enterprise - $109) > Copy Price ID (price_...)
6. Replace dummy keys in Cloudflare with these real keys and Redeploy.

Step 9 - Deploy to Cloudflare
Method A - From Laptop (Recommended):
npm run deploy
Your site will be live on your own Cloudflare URL.

Method B - From Mobile (No Laptop):
See full step-by-step in HOW-TO-USE-ON-MOBILE.md
Short version:
1. Upload all files to GitHub (Private Repo)
2. Cloudflare > Workers & Pages > Create Application > Connect to Git > Select Repo > Deploy
3. Go to Settings > Variables and Secrets - Add ALL variables from Step 4 + Step 8:
   BETTER_AUTH_SECRET, BETTER_AUTH_URL, NEXT_PUBLIC_APP_URL, RESEND_API_KEY, RESEND_FROM, VELORA_KEYS, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, NEXT_PUBLIC_STRIPE_PRICE_PRO, NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE
4. Go to Settings > Bindings - Add D1 Binding: Variable DB = velora_db
5. Click Redeploy

Note - After deployment submit your domain (yourdomain.com) and sitemap.xml in Google Search Console.

How License Works - For Both Buyers

Direct or Gumroad, Activation method is same:

1. Open site: http://localhost:3000/activate-license
2. Enter your License Key
   - Direct Buyer: Key given by Founder on WhatsApp / Email
   - Gumroad Buyer: Key given by Gumroad
3. Click Activate
4. If Key is correct, Dashboard will unlock
5. If Key is wrong or missing, Dashboard will stay locked

One License Key = One Buyer. Do not share your Key with anyone.

How Auth Works - For Buyer

- Signup: Create account with Email + Password
- Login: Login with Email + Password
- OTP Login: Get 6-digit code on your Email, enter it to login
- Change Password: Go to Settings, enter old password and new password

If you forget password, use OTP Login to login again.
If OTP is coming only to your own email, you need to verify your own domain in Resend. See DOMAIN-SETUP.md.

How To Change Your Site Name, Email, Price

All your site settings are in ONE file:
File: app/config.ts

Open that file and change only these:
- Site Name
- Your Email
- Your WhatsApp Number
- Your Price

You do NOT need to change any other file for basic setup.
For Stripe Prices: Change Price IDs in .env.local and Cloudflare Variables (See Step 8).

Pricing

Starter - Rs 0 / $0 - 1 Project
Pro (Most Popular) - Rs 3999 / $45 - Unlimited Projects, License System, Private GitHub
Enterprise - Rs 9999 / $109 - Resell License + Setup Call

Refund: 7-Day Money Back, Email run4ravish@gmail.com

Support

Founder: Yadav Ravish
Location: Uska, Siddharthnagar, UP, India
WhatsApp: +91 8299746179 (9 AM - 9 PM IST) - Reply in 2 hours
Email: run4ravish@gmail.com
Website: https://saas-starter-kit.run4ravish.workers.dev

(C) 2026 Velora - Founded by Yadav Ravish
