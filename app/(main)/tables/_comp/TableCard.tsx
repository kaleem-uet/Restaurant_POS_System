"use client";
import React from "react";
import { getAvatarName, getBgColor } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface TableCardProps {
  id: string;
  name: number;
  status: string;
  initials: string;
  seats: number;
}

const TableCard: React.FC<TableCardProps> = ({
  id,
  name,
  status,
  initials,
  seats,
}) => {
  return (
    <div
      //   onClick={() => handleClick(name)}
      key={id}
      className="w-full hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">
          Table <ArrowRight className="text-[#ababab] ml-2 inline" /> {name}
        </h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1
          className={`text-white rounded-full p-5 text-xl`}
          style={{ backgroundColor: initials ? getBgColor() : "#1f1f1f" }}
        >
          {getAvatarName(initials) || "N/A"}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5]">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
