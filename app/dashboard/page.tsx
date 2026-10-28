export default function Dashboard(){
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-6 flex justify-between"><h1 className="font-black">VELORA Dashboard</h1><a href="/" className="text-sm border px-3 py-1 rounded-full">Home</a></div>
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white border p-6 rounded-2xl"><p className="text-sm text-gray-500">MRR</p><p className="text-3xl font-bold">$0</p></div>
        <div className="bg-white border p-6 rounded-2xl"><p className="text-sm text-gray-500">Users</p><p className="text-3xl font-bold">0</p></div>
        <div className="bg-white border p-6 rounded-2xl"><p className="text-sm text-gray-500">Status</p><p className="text-3xl font-bold">Ready</p></div>
      </div>
    </div>
  )
}
