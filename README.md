# Velora - SaaS Starter Kit

Ship Your SaaS in 47 Seconds. Not in Hours.
Premium production-ready boilerplate for Next.js 15 + Cloudflare D1 + Secure Auth + Email + License System

Live Demo: https://saas-starter-kit.run4ravish.workers.dev
Founder: Yadav Ravish, Uska, Uttar Pradesh, India
Support: run4ravish@gmail.com | WhatsApp +91 8299746179

---

## What You Get

Velora is not a landing page template. It's a complete SaaS foundation.

- Secure Login / Signup / OTP Login / Change Password
- License System with Gumroad Key
- Premium Black Theme
- Pricing, Contact, Terms, Privacy, Refund Pages Ready
- Dashboard Protected by License
- Mobile Responsive

---

## Tech Stack

- Next.js 15 App Router (TypeScript)
- Cloudflare D1 Database
- Secure Auth + OTP
- Email System
- Tailwind CSS - Pure Black Theme
- Deployment on Cloudflare Workers

---

## What You Need Before Starting

1. Node.js installed on your computer
2. A free Cloudflare account
3. Your Gumroad License Key (You get it after buying)
4. Your Email for OTP

You do NOT need any secret key from us. All keys you will create yourself in your own account.

---

## Quick Start - For Buyer

### Step 1 - Buy
Global: Gumroad - $29 Lifetime
India: WhatsApp https://wa.me/918299746179 - Rs 3999 Lifetime

After buying, you will get:
1. GitHub Private Repo Access OR ZIP File
2. Your License Key

### Step 2 - Install
git clone https://github.com/yadavravish/velora.git
cd velora
npm install

### Step 3 - Setup Your Own Env File
Copy .env.example to .env.local
Fill your own values in .env.local - Do not share this file with anyone.

You will need to create:
- Your own Database in your Cloudflare account
- Your own Email API Key in your Resend account
- Your own JWT Secret (any long random text)

Full steps are inside .env.example file.

### Step 4 - Run Locally
npm run dev
Open http://localhost:3000

### Step 5 - Test Your Account
1. Go to /signup - Create your account
2. Go to /login - Login with same account
3. Go to Settings - Try Change Password

### Step 6 - Activate Your License
1. Go to http://localhost:3000/activate-license
2. Enter your Gumroad License Key
3. Click Activate
4. Now you can open /dashboard

If License is wrong, Dashboard will send you back to Activate page. This is normal.

### Step 7 - Deploy to Cloudflare
npm run deploy
Your site will be live on your own Cloudflare URL.

---

## How License Works - For Buyer

1. You buy Velora -> You get a License Key
2. You open /activate-license page
3. You enter your Key
4. If Key is correct, Dashboard unlocks
5. If Key is wrong or missing, Dashboard stays locked

One License Key = One Buyer. Do not share your Key.

---

## How Auth Works - For Buyer

- Signup: Create account with Email + Password
- Login: Login with Email + Password
- OTP Login: Get 6-digit code on your Email, enter it to login
- Change Password: Go to Settings, enter old password and new password

If you forget password, use OTP Login to login again.

---

## How To Change Your Site Name, Email, Price

All your site settings are in ONE file:
File: app/config.ts

Open that file and change only these:
- Site Name
- Your Email
- Your WhatsApp Number
- Your Price

You do NOT need to change any other file for basic setup.

---

## Pricing

Starter - Rs 0 - 1 Project
Pro (Most Popular) - Rs 3999 / $29 - Unlimited Projects, License System, Private GitHub
Enterprise - Rs 9999 / $79 - Resell License + Setup Call

Refund: 7-Day Money Back, Email run4ravish@gmail.com

---

## Support

Founder: Yadav Ravish
Location: Uska, Siddharthnagar, UP, India
WhatsApp: +91 8299746179 (9 AM - 9 PM IST) - Reply in 2 hours
Email: run4ravish@gmail.com
Website: https://saas-starter-kit.run4ravish.workers.dev

---

© 2026 Velora - Founded by Yadav Ravish
