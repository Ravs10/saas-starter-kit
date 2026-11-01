export async function sendOTPEmail(email: string, otp: string) {
  
  if (!process.env.RESEND_API_KEY) {
    console.log(`OTP for ${email}: ${otp}`);
    return true;
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "noreply@velora.workers.dev",
        to: email,
        subject: `OTP: ${otp}`,
        html: `<h1>Your OTP is ${otp}</h1>`
      })
    });
    return true;
  } catch (e) {
    console.log(`OTP for ${email}: ${otp}`);
    return true;
  }
}
