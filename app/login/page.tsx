import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Login(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="p-6">
        <a href="/" className="inline-block mb-6 text-sm border px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition-all">← Back to Home</a>
        
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md border bg-white p-8 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-black mb-4 animate-pulse">V</div>
            <h1 className="text-2xl font-black tracking-tight">VELORA</h1>
            <h2 className="text-xl font-bold mt-4">Welcome back 👋</h2>
            <p className="text-sm text-gray-500 mt-1">Login to continue building</p>
            
            <input className="w-full mt-6 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Email" />
            <input className="w-full mt-3 border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none transition" placeholder="Password" type="password" />
            <button className="w-full mt-4 bg-black text-white rounded-xl p-3 font-bold hover:bg-orange-500 hover:scale-[1.02] hover:shadow-lg transition-all duration-300">Login →</button>
            <p className="text-center text-sm mt-4 text-gray-500">No account? <a href="/signup" className="underline font-bold text-black hover:text-orange-500">Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
