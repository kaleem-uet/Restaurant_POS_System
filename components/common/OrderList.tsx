import React from "react";
import { ArrowRight, CheckCheck, CircleDot } from "lucide-react";

export default function OrderList({
  order,
}: {
  order: {
    _id: string;
    customerDetails: { name: string };
    table: { tableNo: number };
    orderStatus: string;
    total: number;
    items: { name: string }[];
  };
}) {
  const getAvatarName = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 bg-[#1f1f1f] rounded-lg p-4">
      {/* Avatar */}
      <button className="bg-[#f6b100] w-12 h-12 text-xl font-bold rounded-lg flex items-center justify-center shrink-0">
        {getAvatarName(order.customerDetails.name)}
      </button>

      {/* Content container */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
        {/* Customer Info */}
        <div className="flex-1">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            {order.customerDetails.name}
          </h1>
          <p className="text-[#ababab] text-sm">{order.items.length} Items</p>
        </div>

        {/* Table Info */}
        <div className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg px-3 py-1 text-sm whitespace-nowrap">
          Table <ArrowRight className="inline ml-2 w-4 h-4 text-[#ababab]" />{" "}
          {order.table.tableNo}
        </div>

        {/* Status */}
        <div className="flex items-center justify-end">
          {order.orderStatus === "Ready" ? (
            <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg flex items-center text-sm whitespace-nowrap">
              <CheckCheck className="w-4 h-4 mr-2" />
              {order.orderStatus}
            </p>
          ) : (
            <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg flex items-center text-sm whitespace-nowrap">
              <CircleDot className="w-4 h-4 mr-2" />
              {order.orderStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
