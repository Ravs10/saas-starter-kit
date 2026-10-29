import Navbar from "./components/Navbar"
export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-28 text-center">
        <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">Build your SaaS<br/>10x faster with<br/><span className="bg-black text-white px-3">VELORA</span></h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600">Next.js + Cloudflare D1 + Better Auth Starter</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <a href="/signup" className="px-8 py-4 bg-black text-white rounded-full font-medium">Get Started →</a>
          <a href="/pricing" className="px-8 py-4 border rounded-full font-medium">View Pricing</a>
        </div>
      </section>
    </div>
  )
}
