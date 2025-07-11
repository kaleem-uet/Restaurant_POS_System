"use client";
import Link from "next/link";
import { Home, List, Utensils, MoreHorizontal, ChefHat } from "lucide-react";
import { usePathname } from "next/navigation";
export default function BottomNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/login") || pathname.startsWith("/register"))
    return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-white flex justify-around items-center h-16 shadow-inner border-t border-zinc-700">
      {/* Home */}
      <Link
        href="/"
        className="flex flex-col items-center gap-1 text-sm hover:text-yellow-400"
      >
        <Home size={20} />
        <span>Home</span>
      </Link>

      {/* Orders */}
      <Link
        href="/orders"
        className="flex flex-col items-center gap-1 text-sm hover:text-yellow-400"
      >
        <List size={20} />
        <span>Orders</span>
      </Link>

      {/* Center Action Button */}
      <div className="relative -top-6 bg-yellow-400 p-4 rounded-full shadow-md">
        <ChefHat size={24} className="text-zinc-900" />
      </div>

      {/* Tables */}
      <Link
        href="/tables"
        className="flex flex-col items-center gap-1 text-sm hover:text-yellow-400"
      >
        <Utensils size={20} />
        <span>Tables</span>
      </Link>

      {/* More */}
      <Link
        href="/more"
        className="flex flex-col items-center gap-1 text-sm hover:text-yellow-400"
      >
        <MoreHorizontal size={20} />
        <span>More</span>
      </Link>
    </div>
  );
}
