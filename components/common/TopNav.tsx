"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Search,
  UserCircle,
  Bell,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

const Header = () => {
  const router = useRouter();

  // Dummy user data
  const userData = {
    name: "Test User",
    role: "Admin",
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // router.push("/login");
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 px-4 sm:px-8 bg-[#1a1a1a]">
      {/* LOGO */}
      <div
        onClick={() => handleNavigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Image
          src="/assets/logo.png"
          alt="Restro Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
          Restro
        </h1>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-4 py-2 w-full sm:w-[400px] md:w-[500px] max-w-full">
        <Search className="text-[#f5f5f5] h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full text-sm"
        />
      </div>

      {/* USER SECTION */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
        {userData.role === "Admin" && (
          <div
            onClick={() => handleNavigate("/dashboard")}
            className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer"
          >
            <LayoutDashboard className="text-[#f5f5f5] w-6 h-6" />
          </div>
        )}

        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <Bell className="text-[#f5f5f5] w-6 h-6" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <UserCircle className="text-[#f5f5f5] w-9 h-9" />
          <div className="flex flex-col items-start leading-tight">
            <h1 className="text-sm sm:text-md text-[#f5f5f5] font-semibold">
              {userData.name}
            </h1>
            <p className="text-xs text-[#ababab] font-medium">
              {userData.role}
            </p>
          </div>
          <LogOut
            onClick={handleLogout}
            className="text-[#f5f5f5] ml-2 cursor-pointer"
            size={22}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
