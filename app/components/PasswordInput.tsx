"use client"
import { useState } from "react"

export default function PasswordInput({ value, onChange, placeholder }: any) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border p-3 rounded mb-3 pr-12"
        required
      />
      <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3 text-gray-500">
        {show ? "🙈" : "👁️"}
      </button>
    </div>
  )
}
