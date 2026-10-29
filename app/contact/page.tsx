import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black mb-8">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-gray-500 mt-3">Have a question? We will reply within 24 hours.</p>
      <form className="mt-10 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black" />
        <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black"></textarea>
        <button className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90">Send Message</button>
      </form>
      <div className="mt-12 pt-8 border-t text-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-black">✕ Close and go to Home</Link>
      </div>
    </div>
  )
}
