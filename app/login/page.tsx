export default function Login(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md border bg-white p-8 rounded-2xl">
        <h1 className="text-2xl font-black">VELORA</h1>
        <h2 className="text-xl font-bold mt-4">Welcome back</h2>
        <input className="w-full mt-6 border rounded-lg p-3" placeholder="Email" />
        <input className="w-full mt-3 border rounded-lg p-3" placeholder="Password" type="password" />
        <button className="w-full mt-4 bg-black text-white rounded-lg p-3 font-bold">Login</button>
      </div>
    </div>
  )
}
