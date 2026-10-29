export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="text-gray-500 mt-3">Have a question about the kit? We will reply within 24 hours.</p>
      <form className="mt-10 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black" />
        <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-black"></textarea>
        <button className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90">Send Message</button>
      </form>
    </div>
  )
}
