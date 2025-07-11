import { ArrowRight, CheckCheck, Circle } from "lucide-react";
import React from "react";

// 🔸 Helper to generate avatar initials
const getAvatarName = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// 🔸 Helper to format date and time
const formatDateAndTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

type Order = {
  _id: string;
  customerDetails: { name: string };
  orderDate: string;
  table: { tableNo: number };
  orderStatus: string;
  bills: { totalWithTax: number };
  items: { name: string }[];
};

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="w-full md:w-[500px] bg-[#262626] p-4 rounded-lg mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <button className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg">
          {getAvatarName(order.customerDetails.name)}
        </button>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
              {order.customerDetails.name}
            </h1>
            <p className="text-[#ababab] text-sm">
              #{Math.floor(new Date(order.orderDate).getTime())} / Dine in
            </p>
            <p className="text-[#ababab] text-sm flex items-center">
              Table{" "}
              <ArrowRight className="text-[#ababab] ml-2 inline w-4 h-4" />{" "}
              {order.table.tableNo}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            {order.orderStatus === "Ready" ? (
              <>
                <p className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg flex items-center">
                  <CheckCheck className="inline mr-2 w-4 h-4" />{" "}
                  {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-sm flex items-center">
                  <Circle className="inline mr-2 text-green-600 w-3 h-3" />{" "}
                  Ready to serve
                </p>
              </>
            ) : (
              <>
                <p className="text-yellow-600 bg-[#4a452e] px-2 py-1 rounded-lg flex items-center">
                  <Circle className="inline mr-2 w-3 h-3" /> {order.orderStatus}
                </p>
                <p className="text-[#ababab] text-sm flex items-center">
                  <Circle className="inline mr-2 text-yellow-600 w-3 h-3" />{" "}
                  Preparing your order
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-[#ababab] text-sm">
        <p>{formatDateAndTime(order.orderDate)}</p>
        <p>{order.items.length} Items</p>
      </div>

      <hr className="w-full mt-4 border-t border-gray-500" />

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">Total</h1>
        <p className="text-[#f5f5f5] text-lg font-semibold">
          ₹{order.bills.totalWithTax.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
