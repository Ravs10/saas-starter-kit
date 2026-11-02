import { getOTP, getUser } from "./db";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

// OTP Verify - FIXED
export async function verifyOTP(db: any, email: string, inputOtp: string) {
  const normalizedEmail = email.toLowerCase().trim();
  const data: any = await getOTP(db, normalizedEmail);
  
  if (!data) return { success: false, error: "OTP not found" };
  if (data.otp !== inputOtp) return { success: false, error: "Invalid OTP" };
  if (Date.now() > data.expires_at) return { success: false, error: "OTP expired" };
  
  // SUCCESS: OTP delete karo taaki reuse na ho
  await db.prepare("DELETE FROM otps WHERE email = ?").bind(normalizedEmail).run();
  
  return { success: true };
}

// Password Check - bcrypt
export async function verifyPassword(plain: string, hash: string) {
  return await bcrypt.compare(plain, hash);
}

export async function hashPassword(plain: string) {
  return await bcrypt.hash(plain, 10);
}

// Secure JWT Session - FIXED (btoa ki jagah)
export async function createSession(email: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "velora-secret-key-change-in-prod");
  
  const token = await new SignJWT({ email: email.toLowerCase().trim() })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
    
  return token;
}

export async function verifySession(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "velora-secret-key-change-in-prod");
    const { jwtVerify } = await import("jose");
    const { payload } = await jwtVerify(token, secret);
    return payload as { email: string };
  } catch {
    return null;
  }
}
