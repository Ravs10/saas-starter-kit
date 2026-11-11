# Velora - Domain Setup Guide for Public Users

## Understand the Problem

If you have this in your .env.local:
RESEND_FROM_EMAIL=onboarding@resend.dev

Then OTP will go ONLY to your own email.
No other user will get OTP. This is a Resend rule, not a bug.

For a public site - where 100+ people need to signup -
you MUST verify your own domain in Resend.

## Step 1 - Add Domain in Resend

1. Login to https://resend.com
2. Click on Domains in left menu
3. Click on Add Domain
4. Enter your domain - Example: yourdomain.com
   Note: Do not add www, only yourdomain.com
5. Click Add

Resend will give you 3 DNS Records. Keep them copied.

## Step 2 - Add DNS Records in Cloudflare

1. Go to https://dash.cloudflare.com
2. Select your domain
3. Click DNS > Records in left menu
4. Click Add Record - Add these 3 records one by one:

Record 1 - SPF:
Type: TXT
Name: @
Content: v=spf1 include:_spf.resend.com ~all

Record 2 - DKIM:
Type: TXT
Name: resend._domainkey
Content: Paste the DKIM value shown in Resend

Record 3 - DMARC:
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none;

Important: In Cloudflare, keep Proxy Status as DNS Only (Grey Cloud), not Orange.

Wait for 2-5 minutes after saving.

## Step 3 - Check Verification

Go back to Resend > Domains.
First it will show Pending.
Refresh, when it shows Verified / Green Tick, it is done.

## Step 4 - Change Email in .env.local

Before:
RESEND_FROM_EMAIL=onboarding@resend.dev

Now change to:
RESEND_FROM_EMAIL=noreply@yourdomain.com

Replace yourdomain.com with your real domain.

Save the file and Deploy your project again.

Done! Now OTP will go to any email - Gmail, Yahoo, Outlook, all.

## Limits to Remember

Resend Free Plan:
- 100 Emails / Day
- 3000 Emails / Month

Enough for starting. If you get more than 100 signups per day, you will need Resend's $20 plan.
