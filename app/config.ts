export const SITE_CONFIG = {
  // ===============================
  // 1. BRAND NAME (Text Logo)
  // ===============================
  // Agar aapke paas logo image nahi hai, to website par ye naam text ke roop me dikhega
  // Example: "NEXUS", "My Startup", "VEL"
  name: "VEL",

  // ===============================
  // 2. LOGO IMAGE (Image Logo)
  // ===============================
  // Agar aap image logo use karna chahte ho to isko change karo
  // Step 1: Apni logo file ko /public folder me daalo (jaise my-logo.png)
  // Step 2: Yahan uska naam likh do
  // Example: "/my-logo.png" , "/logo.svg" , "/velora-white-logo.png"
  // 
  // IMPORTANT: Agar logo image me pehle se hi VELORA likha hai, to name change karne se wo image nahi badlega.
  // Aapko naya logo image banana padega ya phir logo ko hata ke sirf text use karna padega.
  // Logo hatane ke liye isko aise kar do: logo: "",
  logo: "/velora-white-logo.png",

  // ===============================
  // 3. DESCRIPTION (SEO)
  // ===============================
  description: "Build your SaaS 10x faster",

  // Website URL
  url: "https://velora.example.com",

  // ===============================
  // 4. THEME COLOR
  // ===============================
  theme: {
    // Button aur links ka color - isko change karke pura site ka color badlega
    // Example: 
    // Blue: "#3B82F6"
    // Black: "#000000"
    // Green: "#10B981"
    // Orange: "#FF6A00" 
    primary: "#DD6A00",
    
    secondary: "#F5F5F5",
  },

  // Footer Text
  footerText: "© 2026 VELORA. All rights reserved.",
}
