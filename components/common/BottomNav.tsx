"use client";
import Link from "next/link";
import { Home, List, Utensils, MoreHorizontal, ChefHat } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname.startsWith("/login") || pathname.startsWith("/register"))
    return null;

  const isActive = (route: string) => pathname === route;

  const baseClass = "flex flex-col items-center gap-1 text-sm";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-white flex justify-around items-center h-16 shadow-inner border-t border-zinc-700">
      {/* Home */}
      <Link href="/">
        <div
          className={`${baseClass} ${
            isActive("/")
              ? "relative bg-yellow-500 ring-2 ring-yellow-300 -top-6 p-4 rounded-full shadow-md transition-all duration-200"
              : "text-white"
          }`}
        >
          <Home size={24} />
          {!isActive("/") && <span className="text-white">Home</span>}
        </div>
      </Link>

      {/* Orders */}
      <Link href="/orders">
        <div
          className={`${baseClass} ${
            isActive("/orders")
              ? "relative bg-yellow-500 ring-2 ring-yellow-300 -top-6 p-4 rounded-full shadow-md transition-all duration-200"
              : "text-white"
          }`}
        >
          <List size={24} />
          {!isActive("/orders") && <span className="text-white">Orders</span>}
        </div>
      </Link>

      {/* Center Action Button - Menu */}
      <Link href="/menu">
        <div
          className={`${baseClass} ${
            isActive("/menu")
              ? "relative bg-yellow-500 ring-2 ring-yellow-300 -top-6 p-4 rounded-full shadow-md transition-all duration-200"
              : "text-white"
          }`}
        >
          <ChefHat size={24} />
          {!isActive("/menu") && <span className="text-white">Menu</span>}
        </div>
      </Link>

      {/* Tables */}
      <Link href="/tables">
        <div
          className={`${baseClass} ${
            isActive("/tables")
              ? "relative bg-yellow-500 ring-2 ring-yellow-300 -top-6 p-4 rounded-full shadow-md transition-all duration-200"
              : "text-white"
          }`}
        >
          <Utensils size={24} />
          {!isActive("/tables") && <span className="text-white">Tables</span>}
        </div>
      </Link>

      {/* More */}
      <Link href="/more">
        <div
          className={`${baseClass} ${
            isActive("/more")
              ? "relative bg-yellow-500 ring-2 ring-yellow-300 -top-6 p-4 rounded-full shadow-md transition-all duration-200"
              : "text-white"
          }`}
        >
          <MoreHorizontal size={24} />
          {!isActive("/more") && <span className="text-white">More</span>}
        </div>
      </Link>
    </div>
  );
}
