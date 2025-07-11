import React from "react";

export default function Bill() {
  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between">
        <h4 className="text-[#ababab] font-semibold tracking-wide">
          Items (4)
        </h4>
        <p className="text-[#f5f5f5] text-md font-bold">$242</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <h4 className="text-[#ababab] font-semibold tracking-wide">Tax (2%)</h4>
        <p className="text-[#f5f5f5] text-md font-bold">$12</p>
      </div>
      <div className="flex items-center justify-between mt-2 gap-3">
        <button
          className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold `}
        >
          Cash
        </button>
        <button
          className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold `}
        >
          Online
        </button>
      </div>
      <div className="flex items-center justify-between mt-2 gap-3">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
          Print Receipt
        </button>
        <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg">
          Place Order
        </button>
      </div>
    </div>
  );
}
