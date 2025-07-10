"use client";
import { useState } from "react";

interface InputProps {
  label?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  [key: string]: any;
}
export default function Input({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-[#ababab] mb-2 mt-3 text-sm font-medium"
        >
          {label}
        </label>
      )}

      <div className="flex items-center rounded-lg px-4 py-3 bg-[#1f1f1f]">
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          type={isPassword && showPassword ? "text" : type}
          className="bg-transparent flex-1 text-white focus:outline-none"
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-[#ababab] ml-3 hover:text-yellow-400"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
