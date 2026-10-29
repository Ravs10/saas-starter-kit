export default function Pricing() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Simple Pricing</h1>
        <p className="text-center text-gray-500 mb-12">Start free, scale as you grow</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-8">
            <h3 className="font-bold text-xl">Free</h3>
            <p className="text-4xl font-bold mt-4">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✓ 1 Project</li>
              <li>✓ 100 Users</li>
              <li>✓ Community Support</li>
            </ul>
            <button className="w-full mt-8 bg-black text-white py-3 rounded-xl">Get Started</button>
          </div>

          <div className="border-2 border-black rounded-2xl p-8">
            <h3 className="font-bold text-xl">Pro</h3>
            <p className="text-4xl font-bold mt-4">$19<span className="text-base font-normal">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✓ Unlimited Projects</li>
              <li>✓ 10k Users</li>
              <li>✓ Priority Support</li>
            </ul>
            <button className="w-full mt-8 bg-black text-white py-3 rounded-xl">Start Pro</button>
          </div>

          <div className="border rounded-2xl p-8">
            <h3 className="font-bold text-xl">Enterprise</h3>
            <p className="text-4xl font-bold mt-4">$99<span className="text-base font-normal">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✓ Everything in Pro</li>
              <li>✓ Custom Limits</li>
              <li>✓ Dedicated Support</li>
            </ul>
            <button className="w-full mt-8 bg-black text-white py-3 rounded-xl">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  )
}
