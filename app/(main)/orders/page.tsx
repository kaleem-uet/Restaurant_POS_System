"use client";
import BackButton from "@/components/common/BackButton";
import React, { useState } from "react";
import OrderCard from "./_comp/OrderCard";
const mockOrders = [
  {
    _id: "1",
    customerDetails: { name: "Amrit Raj" },
    orderDate: "2025-02-09T21:28:48.000Z",
    table: { tableNo: 1 },
    orderStatus: "Ready",
    bills: { totalWithTax: 263.13 },
    items: [{ name: "Burger" }],
  },
  {
    _id: "2",
    customerDetails: { name: "Simran Soni" },
    orderDate: "2025-02-11T09:38:37.000Z",
    table: { tableNo: 3 },
    orderStatus: "In Progress",
    bills: { totalWithTax: 578.88 },
    items: [{ name: "Pizza" }, { name: "Fries" }],
  },
  {
    _id: "3",
    customerDetails: { name: "Amrit Raj" },
    orderDate: "2025-02-11T10:15:37.000Z",
    table: { tableNo: 4 },
    orderStatus: "In Progress",
    bills: { totalWithTax: 368.38 },
    items: [{ name: "Rolls" }, { name: "Juice" }],
  },
  {
    _id: "4",
    customerDetails: { name: "Ankit Raj" },
    orderDate: "2025-02-11T10:15:37.000Z",
    table: { tableNo: 8 },
    orderStatus: "In Progress",
    bills: { totalWithTax: 263.13 },
    items: [{ name: "Pasta" }],
  },
  {
    _id: "5",
    customerDetails: { name: "Sagrika Soni" },
    orderDate: "2025-02-11T10:15:37.000Z",
    table: { tableNo: 12 },
    orderStatus: "Ready",
    bills: { totalWithTax: 368.38 },
    items: [{ name: "Paneer" }, { name: "Rice" }],
  },
];
export default function Page() {
  const [status, setStatus] = useState("all");
  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="flex justify-between items-center px-6 py-4 flex-wrap">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
            Menu
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg ${
              status === "all" && "bg-[#383838] rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-lg ${
              status === "progress" && "bg-[#383838] rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-lg ${
              status === "ready" && "bg-[#383838] rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-lg ${
              status === "completed" && "bg-[#383838] rounded-lg px-5 py-2"
            }  rounded-lg px-5 py-2 font-semibold`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 px-16 py-4 overflow-y-scroll scrollbar-hide">
        {mockOrders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
