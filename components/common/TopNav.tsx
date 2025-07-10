// import { Bell } from 'lucide-react';
// import Image from 'next/image'
// import React from 'react'

// export default function TopNav() {
// return (
//   <div className="w-full h-16 bg-zinc-900 text-white flex items-center justify-between px-4 shadow-md border-b border-zinc-700">
//     <div className="flex items-center">
//       <Image
//         src="/assets/logo.png"
//         alt="Logo"
//         width={30}
//         height={30}
//         className="rounded-full"
//       />
//       <span className="ml-2 text-sm font-semibold">Restaurant POS</span>
//     </div>
//     <div className="flex items-center bg-zinc-800 rounded-lg px-3 py-1">
//       <input
//         placeholder="Search..."
//         className="bg-transparent outline-none text-sm text-white placeholder:text-zinc-500"
//       />
//     </div>
//     <div className='flex items-center gap-2'>
//             <Bell />
//             <Image 
//                 src="/assets/logo.png"
//                 alt="User Avatar"
//                 width={30}
//                 height={30}
//                 className="rounded-full ml-4 cursor-pointer"
//             />
//             <div className='flex flex-col items-start'>
//                 <h3>Kaleem k</h3>
//                 <span className="text-sm font-semibold ml-2">Admin</span>

//             </div>
//     </div>
//   </div>
// );
// }

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
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
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
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px] max-w-full">
        <Search className="text-[#f5f5f5] h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
        />
      </div>

      {/* USER SECTION */}
      <div className="flex items-center gap-4">
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
          <UserCircle className="text-[#f5f5f5] w-10 h-10" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
              {userData.name}
            </h1>
            <p className="text-xs text-[#ababab] font-medium">
              {userData.role}
            </p>
          </div>
          <LogOut
            onClick={handleLogout}
            className="text-[#f5f5f5] ml-2 cursor-pointer"
            size={25}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
