import { SITE_CONFIG } from "./config"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: SITE_CONFIG.theme.body }}>
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full">
        <h1 className="font-black tracking-tighter text-center whitespace-nowrap leading-none
                       text-[40px] sm:text-[46px] md:text-[56px]">
          Welcome to {SITE_CONFIG.name}
        </h1>
        <p className="mt-3 text-gray-600 text-lg text-center">
          {SITE_CONFIG.description} - Build your SaaS 10x faster
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="/dashboard" className="px-6 py-3 rounded-full text-white font-bold" style={{ backgroundColor: SITE_CONFIG.theme.primary }}>
            Go to Dashboard →
          </a>
          <a href="/" className="px-6 py-3 rounded-full bg-white border font-bold">
            Learn More
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">USERS</p>
            <p className="text-4xl font-black mt-2">1,234</p>
          </div>
          <div className="bg-black text-white p-6 rounded-3xl">
            <p className="text-sm text-gray-400 tracking-widest">REVENUE</p>
            <p className="text-4xl font-black mt-2">$5,678</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border">
            <p className="text-sm text-gray-400 tracking-widest">PROJECTS</p>
            <p className="text-4xl font-black mt-2">12</p>
          </div>
        </div>
      </main>
    </div>
  )
}
