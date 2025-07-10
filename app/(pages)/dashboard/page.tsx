"use client";
import Metrics from "@/components/Metrics";
import { ForkKnife, Tags, Soup } from "lucide-react";
import { useState } from "react";
import RecentOrder from "./_comp/RecentOrder";
import Modal from "@/components/Modal";
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
    <div className="bg-[#1f1f1f] h-[calc(100vh-2rem)]">
      <div className="container mx-auto flex items-center justify-between py-14 px-6 md:px-4">
        <div className="flex items-center gap-3">
          {buttons.map(({ label, icon, action }) => {
            return (
              <button
                key={label}
                onClick={() => handleOpenModal(action)}
                className="bg-[#1a1a1a] hover:bg-[#262626] px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2"
              >
                {label} {icon}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                className={`
                px-8 py-3 rounded-lg text-[#f5f5f5] font-semibold text-md flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-[#262626]"
                    : "bg-[#1a1a1a] hover:bg-[#262626]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {activeTab === "Metrics" && <Metrics />}
      {activeTab === "Orders" && <RecentOrder />}
      {activeTab === "Payments" && (
        <div className="text-white p-6 container mx-auto">
          Payment Component Coming Soon
        </div>
      )}
      {isTableModalOpen && (
        <Modal
          setIsTableModalOpen={setIsTableModalOpen}
          onSubmit={(data) => {
            console.log("Parent Received:", data);
          }}
        />
      )}
    </div>
  );
}
