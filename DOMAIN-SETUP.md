# Velora - Domain Setup Guide for Public Users

## Problem Samjho

Agar tumne .env.local me ye rakha hai:
RESEND_FROM_EMAIL=onboarding@resend.dev

To OTP sirf TUMHARI apni email pe jayega.
Kisi aur user ko OTP nahi jayega. Ye Resend ka rule hai.

Public site ke liye - jahan 100+ logo ko signup karna hai -
tumko apna khud ka Domain Resend me Verify karna padega.

## Step 1 - Resend me Domain Add Karo

1. https://resend.com pe login karo
2. Left side me Domains pe click karo
3. Add Domain pe click karo
4. Apna domain likho - jaise: yourdomain.com
   Note: www mat lagana, sirf yourdomain.com
5. Add pe click karo

Resend tumko 3 DNS Records dega. Unko copy karke rakho.

## Step 2 - Cloudflare me DNS Records Dalo

1. https://dash.cloudflare.com pe jao
2. Apna domain select karo
3. Left me DNS > Records pe click karo
4. Add Record pe click karo - Ye 3 records ek-ek karke dalo:

Record 1 - SPF:
Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all

Record 2 - DKIM:
Type: TXT
Name: resend._domainkey
Content: Resend me jo DKIM value dikh rahi hai, wo paste karo

Record 3 - DMARC:
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none;

Important: Cloudflare me Proxy Status ko DNS Only (Grey Cloud) rakho, Orange mat rakho.

Save karte hi 2-5 minute wait karo.

## Step 3 - Verify Check Karo

Resend > Domains me wapas jao.
Tumhare domain ke samne pehle Pending likha hoga.
Refresh karo, jab Verified / Green Tick aa jaye, matlab ho gaya.

Agar 1 ghanta baad bhi Pending hai, to DNS me Name ya Content galat dala hai. Dobara check karo.

## Step 4 - .env.local me Email Badlo

Pehle tha:
RESEND_FROM_EMAIL=onboarding@resend.dev

Ab kar do:
RESEND_FROM_EMAIL=noreply@yourdomain.com

yourdomain.com ki jagah apna asli domain likho.

File save karo, aur project ko dobara Deploy karo.

Bas! Ab OTP duniya ke kisi bhi email pe jayega - Gmail, Yahoo, Outlook sab pe.

## Limits Yaad Rakho

Resend Free Plan:
- 100 Emails / Day
- 3000 Emails / Month

Starting ke liye kaafi hai. Agar roz 100 se zyada signup aane lage, to Resend ka $20 wala plan lena padega.

## Agar Domain Nahi Hai To?

Bina domain ke public SaaS nahi chalega.
Cloudflare / GoDaddy se domain lo, fir upar wale steps follow karo.
