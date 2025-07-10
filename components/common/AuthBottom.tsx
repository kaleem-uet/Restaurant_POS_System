"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthBottom() {
  const pathname = usePathname();
  const isRegister = pathname.includes("register");
  return (
    <div className="flex justify-center mt-6">
      <p className="text-sm text-[#ababab] text-center">
        {isRegister ? "Already have an account? " : "Don't have an account? "}
        <Link
          href={isRegister ? "/login" : "/register"}
          className="text-yellow-400 font-semibold hover:underline"
        >
          {isRegister ? "Sign in" : "Sign up"}
        </Link>
      </p>
    </div>
  );
}
