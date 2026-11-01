import { getOTP } from "./db";

export async function verifyOTP(db: any, email: string, inputOtp: string) {
  const data: any = await getOTP(db, email);
  
  if (!data) return false;
  if (data.otp !== inputOtp) return false;
  if (Date.now() > data.expires_at) return false; // expired
  
  return true;
}

export function createSession(email: string) {
  // Simple session token
  return btoa(email + ":" + Date.now());
}
