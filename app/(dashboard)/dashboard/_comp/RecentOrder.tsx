"use client";
import React from "react";

const resData = {
  data: {
    data: [
      {
        _id: "1",
        orderDate: "2025-07-09T10:30:00Z",
        customerDetails: { name: "Ali Khan" },
        orderStatus: "In Progress",
        items: [
          { name: "Burger", qty: 2 },
          { name: "Fries", qty: 1 },
        ],
        table: { tableNo: 4 },
        bills: { totalWithTax: 520 },
        paymentMethod: "Cash",
      },
      {
        _id: "2",
        orderDate: "2025-07-09T11:15:00Z",
        customerDetails: { name: "Sana Ahmed" },
        orderStatus: "Ready",
        items: [
          { name: "Pizza", qty: 1 },
          { name: "Coke", qty: 2 },
        ],
        table: { tableNo: 7 },
        bills: { totalWithTax: 890 },
        paymentMethod: "Card",
      },
      {
        _id: "3",
        orderDate: "2025-07-09T12:00:00Z",
        customerDetails: { name: "Rehan Malik" },
        orderStatus: "In Progress",
        items: [
          { name: "Pasta", qty: 1 },
          { name: "Lemonade", qty: 1 },
        ],
        table: { tableNo: 2 },
        bills: { totalWithTax: 650 },
        paymentMethod: "UPI",
      },
    ],
  },
};

// Format the date as "Jul 9, 2025 - 10:30 AM"
const formatDateTime = (isoDateStr: string | number | Date) => {
  const date = new Date(isoDateStr);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export default function RecentOrder() {
  return (
    <div className="container mx-auto bg-[#262626] p-4 rounded-lg">
      <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-[#f5f5f5] text-left">
          <thead className="bg-[#333] text-[#ababab]">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Items</th>
              <th className="p-3">Table No</th>
              <th className="p-3">Total</th>
              <th className="p-3 text-center">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {resData?.data.data.map((order, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#333]"
              >
                <td className="p-4 font-mono text-sm">
                  #{Math.floor(new Date(order.orderDate).getTime())}
                </td>
                <td className="p-4">{order.customerDetails.name}</td>
                <td className="p-4">
                  <select
                    className={`bg-[#1a1a1a] text-[#f5f5f5] border border-gray-500 p-2 rounded-lg focus:outline-none ${
                      order.orderStatus === "Ready"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                    value={order.orderStatus}
                    disabled
                  >
                    <option className="text-yellow-500" value="In Progress">
                      In Progress
                    </option>
                    <option className="text-green-500" value="Ready">
                      Ready
                    </option>
                  </select>
                </td>
                <td className="p-4">{formatDateTime(order.orderDate)}</td>
                <td className="p-4">{order.items.length} Items</td>
                <td className="p-4">Table - {order.table.tableNo}</td>
                <td className="p-4">₹{order.bills.totalWithTax}</td>
                <td className="p-4 text-center">{order.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
