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
        subject: `Your Velora OTP is ${otp}`,
        html: `
          <div style="background:#000000;color:#ffffff;padding:40px;font-family:sans-serif;text-align:center">
            <h1 style="margin:0;font-size:28px;letter-spacing:2px">VELORA</h1>
            <p style="color:#999;margin-top:10px">Secure login code</p>
            <div style="background:#ffffff;color:#000000;font-size:32px;letter-spacing:8px;padding:20px;margin:30px 0;border-radius:12px;font-weight:bold">${otp}</div>
            <p style="color:#666;font-size:12px">Valid for 5 minutes • Founded by Yadav Ravish</p>
          </div>
        `
      })
    });
    return true;
  } catch (e) {
    console.log(`OTP for ${email}: ${otp}`);
    return true;
  }
}
