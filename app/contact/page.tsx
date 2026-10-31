export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] bg-black text-white">
      <div className="max-w-xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black tracking-tight">Contact Us</h1>
        <p className="text-zinc-400 mt-3">Founded by Yadav Ravish - We reply within 24h</p>
        <div className="mt-8 bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <p className="text-sm text-zinc-400">Email</p>
          <p className="font-medium mt-1">support@velora.workers.dev</p>
          <p className="text-sm text-zinc-400 mt-6">Location</p>
          <p className="font-medium mt-1">Uska, Uttar Pradesh, India</p>
        </div>
      </div>
    </div>
  )
}
