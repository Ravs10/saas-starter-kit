import Navbar from "../components/Navbar"
export default function Dashboard(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full bg-white">← Back to Home</a>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to VELORA Dashboard</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl border">Users: 1,234</div>
          <div className="bg-white p-6 rounded-2xl border">Revenue: $5,678</div>
          <div className="bg-white p-6 rounded-2xl border">Projects: 12</div>
        </div>
      </div>
    </div>
  )
}
