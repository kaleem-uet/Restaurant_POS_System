"use client";

import React, { useState } from "react";

import { Search } from "lucide-react";
import OrderList from "./common/OrderList";
import { ScrollArea } from "./ui/scroll-area";

// Dummy order data
const mockOrders = [
  {
    _id: "1",
    customerDetails: {
      name: "John Doe",
    },
    table: {
      tableNo: 5,
    },
    orderStatus: "Preparing",
    total: 450,
    items: [
      { name: "Burger" },
      { name: "Fries" },
      { name: "Coke" },
    ],
  },
  {
    _id: "2",
    customerDetails: {
      name: "Jane Smith",
    },
    table: {
      tableNo: 2,
    },
    orderStatus: "Ready",
    total: 700,
    items: [
      { name: "Pasta" },
      { name: "Salad" },
    ],
  },
  {
    _id: "3",
    customerDetails: {
      name: "Alice Johnson",
    },
    table: {
      tableNo: 3,
    },
    orderStatus: "Pending",
    total: 300,
    items: [
      { name: "Pizza" },
    ],
  },
];


const RecentOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = mockOrders.filter((order) =>
    order.customerDetails.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="mt-6">
      <div className="bg-[#1a1a1a] w-full h-[100%] md:h-[450px]  rounded-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Recent Orders
          </h1>
          <a href="#" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6">
          <Search className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search recent orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Order list */}
        <ScrollArea className="mt-4 px-6  h-[400px] overflow-auto ">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <OrderList key={order._id} order={order} />
            ))
          ) : (
            <p className="text-gray-500">No orders available</p>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default RecentOrders;
