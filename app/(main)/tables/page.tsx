"use client";
import BackButton from "@/components/common/BackButton";
import React, { useState } from "react";
import TableCard from "./_comp/TableCard";
const mockTables = [
  {
    _id: "t1",
    tableNo: 1,
    status: "Available",
    seats: 4,
    currentOrder: {
      customerDetails: { name: "Amit Raj" },
    },
  },
  {
    _id: "t2",
    tableNo: 2,
    status: "Occupied",
    seats: 6,
    currentOrder: {
      customerDetails: { name: "Simran Soni" },
    },
  },
  {
    _id: "t3",
    tableNo: 3,
    status: "Reserved",
    seats: 2,
    currentOrder: {
      customerDetails: { name: "Ankit Raj" },
    },
  },
  {
    _id: "t4",
    tableNo: 4,
    status: "Available",
    seats: 4,
    currentOrder: {
      customerDetails: { name: "Ravi Kumar" },
    },
  },
  {
    _id: "t5",
    tableNo: 5,
    status: "Occupied",
    seats: 8,
    currentOrder: {
      customerDetails: { name: "Sneha Mehta" },
    },
  },
  {
    _id: "t6",
    tableNo: 6,
    status: "Booked",
    seats: 5,
    currentOrder: {
      customerDetails: { name: "Kunal Verma" },
    },
  },
  {
    _id: "t7",
    tableNo: 7,
    status: "Available",
    seats: 2,
    currentOrder: {
      customerDetails: { name: "Neha Shah" },
    },
  },
  {
    _id: "t8",
    tableNo: 8,
    status: "Reserved",
    seats: 3,
    currentOrder: {
      customerDetails: { name: "Vikram Singh" },
    },
  },
  {
    _id: "t9",
    tableNo: 9,
    status: "Occupied",
    seats: 6,
    currentOrder: {
      customerDetails: { name: "Pooja Yadav" },
    },
  },
  {
    _id: "t10",
    tableNo: 10,
    status: "Booked",
    seats: 4,
    currentOrder: {
      customerDetails: { name: "Manish Tiwari" },
    },
  },
  {
    _id: "t11",
    tableNo: 11,
    status: "Available",
    seats: 2,
    currentOrder: {
      customerDetails: { name: "Divya Chauhan" },
    },
  },
  {
    _id: "t12",
    tableNo: 12,
    status: "Occupied",
    seats: 7,
    currentOrder: {
      customerDetails: { name: "Rajesh Patel" },
    },
  },
  {
    _id: "t13",
    tableNo: 13,
    status: "Reserved",
    seats: 6,
    currentOrder: {
      customerDetails: { name: "Isha Kapoor" },
    },
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
            Booked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 gap-3 px-16 py-4 sm:mb-30 ">
        {mockTables.map((table) => {
          return (
            <TableCard
              key={table._id}
              id={table._id}
              name={table.tableNo}
              status={table.status}
              initials={table?.currentOrder?.customerDetails.name}
              seats={table.seats}
            />
          );
        })}
      </div>
    </div>
  );
}
