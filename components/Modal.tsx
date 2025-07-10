"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import Button from "./common/Button";
import Input from "./common/Input";

type Props = {
  setIsTableModalOpen: (value: boolean) => void;
  onSubmit?: (data: { tableNo: string; seats: string }) => void;
};

const Modal = ({ setIsTableModalOpen, onSubmit }: Props) => {
  const [tableData, setTableData] = useState({
    tableNo: "",
    seats: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", tableData);
    if (onSubmit) onSubmit(tableData);
    setIsTableModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-[#262626] p-6 rounded-lg shadow-lg w-96"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#f5f5f5] text-xl font-semibold">Add Table</h2>
          <button
            onClick={() => setIsTableModalOpen(false)}
            className="text-[#f5f5f5] hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-10">
          <Input
            label="Table Name"
            type="text"
            name="tableName"
            placeholder="Enter Table Name"
            required
          />

          <Input
            label="Number of Seats"
            type="number"
            name="seats"
            placeholder="Number of Seats"
            required
          />
          <Button label="Add Table " type="submit" className="mt-6" />
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
