"use client";
import { ForkKnife, Tags, Soup } from "lucide-react";
import { useState } from "react";
import RecentOrder from "./_comp/RecentOrder";
import Modal from "@/components/Modal";
import Metrics from "./_comp/Metrics";
const buttons = [
  { label: "Add Table", icon: <ForkKnife />, action: "table" },
  { label: "Add Category", icon: <Tags />, action: "category" },
  { label: "Add Dishes", icon: <Soup />, action: "dishes" },
];

const tabs = ["Metrics", "Orders", "Payments"];
export default function Page() {
  const [activeTab, setActiveTab] = useState("Metrics");
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const handleOpenModal = (action: string) => {
    if (action === "table") setIsTableModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      <div className="w-full px-4 pt-6 pb-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 md:items-center justify-between py-8">
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {buttons.map(({ label, icon, action }) => (
              <button
                key={label}
                onClick={() => handleOpenModal(action)}
                className="bg-[#1a1a1a] hover:bg-[#262626] px-6 py-2 md:px-8 md:py-3 rounded-lg text-[#f5f5f5] font-semibold text-sm md:text-md flex items-center gap-2"
              >
                {label} {icon}
              </button>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2 md:px-8 md:py-3 rounded-lg text-[#f5f5f5] font-semibold text-sm md:text-md flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-[#262626]"
                    : "bg-[#1a1a1a] hover:bg-[#262626]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "Metrics" && <Metrics />}
        {activeTab === "Orders" && <RecentOrder />}
        {activeTab === "Payments" && (
          <div className="text-white p-6 container mx-auto">
            Payment Component Coming Soon
          </div>
        )}
      </div>

      {/* Modal */}
      {isTableModalOpen && (
        <Modal
          setIsTableModalOpen={setIsTableModalOpen}
          onSubmit={(data) => console.log("Parent Received:", data)}
        />
      )}
    </div>
  );
}
