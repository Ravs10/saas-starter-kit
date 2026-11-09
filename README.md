# Velora - SaaS Starter Kit

Ship Your SaaS in 47 Seconds. Not in Hours.
Premium production-ready boilerplate for Next.js 15 + Cloudflare D1 + Secure Auth + Email + License System

Live Demo: https://saas-starter-kit.run4ravish.workers.dev
Founder: Yadav Ravish, Uska, Uttar Pradesh, India
Support: run4ravish@gmail.com | WhatsApp +91 8299746179

---

## What You Get

Velora is not a landing page template. It is a complete SaaS foundation.

- Secure Login / Signup / OTP Login / Change Password
- License System with License Key
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
3. Your License Key (You get it after buying)
4. Your Email for OTP

You do NOT need any secret key from us. All keys you will create yourself in your own account.

---

## How To Buy - 2 Ways

### Way 1 - Direct From Velora (India - Recommended)
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

### Way 2 - Gumroad (Global)
For International Buyers - Card / PayPal

1. Buy from Gumroad Product Page - $45 Lifetime
2. After payment, Gumroad will give you:
   - ZIP File Download Link
   - Your License Key
3. Then start from Step 2 below
4. For License Activation, use the Key given by Gumroad

---

## Quick Start - For Buyer

### Step 1 - Buy
Choose Way 1 (Direct) or Way 2 (Gumroad) from above. After buying, you will have ZIP File + License Key.

### Step 2 - Install
git clone https://github.com/yadavravish/velora.git
cd velora
npm install

If you got ZIP File, extract it and open that folder, then run npm install.

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
2. Enter your License Key
   - Direct Buyer: Use the Key given by Founder on WhatsApp / Email
   - Gumroad Buyer: Use the Key given by Gumroad
3. Click Activate
4. Now you can open /dashboard

If License is wrong, Dashboard will send you back to Activate page. This is normal.

### Step 7 - Deploy to Cloudflare
npm run deploy
Your site will be live on your own Cloudflare URL.

---

## How License Works - For Both Buyers

Direct or Gumroad, Activation method is same:

1. Open site: http://localhost:3000/activate-license
2. Enter your License Key
   - Direct Buyer: Key given by Founder on WhatsApp / Email
   - Gumroad Buyer: Key given by Gumroad
3. Click Activate
4. If Key is correct, Dashboard will unlock
5. If Key is wrong or missing, Dashboard will stay locked

One License Key = One Buyer. Do not share your Key with anyone.

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

Starter - Rs 0 / $0 - 1 Project
Pro (Most Popular) - Rs 3999 / $45 - Unlimited Projects, License System, Private GitHub
Enterprise - Rs 9999 / $109 - Resell License + Setup Call

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
