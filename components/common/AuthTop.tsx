"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthTop() {
  const pathname = usePathname();
  const isRegister = pathname.includes("register");
  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center mt-2 md:mt-2 font-semibold text-yellow-400 mb-2 md:mb-2">
        {isRegister ? "Employee Registration" : "Employee Login"}
      </h2>
    </div>
  );
}
