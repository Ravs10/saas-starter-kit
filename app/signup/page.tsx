"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
...
<div><Navbar/>
<a href="/" className="inline-block m-6 text-sm border px-4 py-2 rounded-full">← Back to Home</a>
...baaki aapka purana code
</div>
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <p className="text-gray-500 text-sm mt-1">Start building your SaaS today</p>
        
        <input className="w-full mt-6 border p-3 rounded-xl" placeholder="Full Name" />
        <input className="w-full mt-3 border p-3 rounded-xl" placeholder="Email" />
        <input className="w-full mt-3 border p-3 rounded-xl" placeholder="Password" type="password" />
        
        <button className="w-full mt-6 bg-black text-white py-3 rounded-xl">Sign Up</button>
        <p className="text-center text-sm mt-4">Already have account? <a href="/login" className="underline">Login</a></p>
      </div>
    </div>
  )
}
