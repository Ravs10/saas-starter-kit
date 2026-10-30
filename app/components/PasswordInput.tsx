"use client"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function PasswordInput({ value, onChange, placeholder }: any) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-black outline-none"
        required
      />
      <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3.5 text-gray-500 hover:text-black">
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  )
}
