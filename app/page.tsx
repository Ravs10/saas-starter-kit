import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 text-center">
        <div className="inline-block px-4 py-1 border rounded-full text-xs mb-6 animate-bounce">🚀 New: VELORA Cloud is LIVE</div>
        <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">Build your SaaS<br/>10x faster with<br/><span className="bg-black text-white px-3 hover:bg-orange-500 transition-colors duration-500 cursor-pointer">VELORA</span></h2>
        <p className="mt-6 text-lg text-gray-600">Next.js + Cloudflare D1 + Better Auth Starter</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a href="/signup" className="px-8 py-4 bg-black text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all">Get Started →</a>
          <a href="/pricing" className="px-8 py-4 border rounded-full hover:bg-black hover:text-white transition-all">View Pricing</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
          <div className="border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all"><h3 className="font-bold">⚡ Fast</h3><p className="text-sm text-gray-500 mt-2">Deploy in seconds on Cloudflare</p></div>
          <div className="border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all"><h3 className="font-bold">🔒 Secure</h3><p className="text-sm text-gray-500 mt-2">Better Auth built-in</p></div>
          <div className="border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all"><h3 className="font-bold">🎨 Stylish</h3><p className="text-sm text-gray-500 mt-2">Animation & hover effects</p></div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
