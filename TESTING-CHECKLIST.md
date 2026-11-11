# Velora - Testing Checklist Before Launch

Do NOT launch your site before completing this checklist.
Complete all steps in order.

## Step 1 - Environment Check

- [ ] `.env.local` file created from `.env.example`
- [ ] `RESEND_API_KEY` filled, starts with `re_`
- [ ] `JWT_SECRET` filled, minimum 32 characters
- [ ] `CLOUDFLARE_ACCOUNT_ID` filled
- [ ] `CLOUDFLARE_DATABASE_ID` filled
- [ ] `CLOUDFLARE_API_TOKEN` filled
- [ ] `RESEND_FROM_EMAIL` filled
- [ ] Project deployed successfully, no error in deploy log

## Step 2 - Signup Test - Your Own Email

- [ ] Open your live site URL
- [ ] Click Signup
- [ ] Enter YOUR OWN email
- [ ] Check inbox, OTP received
- [ ] Enter OTP, account created
- [ ] Dashboard opens

If this fails, check Resend API Key and `.env.local` values.

## Step 3 - Signup Test - Second Email

This is the MOST IMPORTANT test.

- [ ] Open your site in Incognito / Private Window
- [ ] Signup with a DIFFERENT email, not your own email
- [ ] Example: If you used Gmail first, now use Yahoo / Outlook / Second Gmail

Result:

If OTP comes to second email also:
Your setup is CORRECT. You can launch.

If OTP comes ONLY to first email, and NOT to second email:
This is NORMAL. It means you are still using `onboarding@resend.dev`.

Fix:
1. Open file `DOMAIN-SETUP.md`
2. Verify your own domain in Resend
3. Change `.env.local` to `RESEND_FROM_EMAIL=noreply@yourdomain.com`
4. Deploy again
5. Test again with second email

Do NOT launch without passing this test.

## Step 4 - Login / Logout Test

- [ ] Logout from dashboard
- [ ] Login again with same email + OTP
- [ ] OTP received
- [ ] Dashboard opens again

## Step 5 - Wrong OTP Test

- [ ] Signup with new email
- [ ] Enter WRONG OTP like 000000
- [ ] Site shows error, does NOT login

If wrong OTP also logs you in, DO NOT launch. There is a bug in OTP verification.

## Step 6 - License Key Test

- [ ] Enter a WRONG License Key
- [ ] Site shows Invalid License error

- [ ] Enter CORRECT License Key
- [ ] Site accepts it

## Step 7 - Mobile Test

- [ ] Open site on mobile phone
- [ ] Signup page looks correct
- [ ] Login works on mobile
- [ ] Dashboard fits mobile screen

## Final Launch Check

Only launch if ALL boxes above are checked.

If you are stuck on any step:
1. Take a screenshot of the error
2. Check `DOMAIN-SETUP.md`
3. Contact Founder with screenshot
