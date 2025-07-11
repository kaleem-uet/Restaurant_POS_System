import BackButton from "@/components/common/BackButton";
import Image from "next/image";
import React from "react";
import MenuContainer from "./_menu/MenuContainer";
import CustomerInfo from "./_menu/CustomerInfo";
import CartInfo from "./_menu/CartInfo";
import Bill from "./_menu/Bill";

export default function page() {
  return (
    <section className=" min-h-screen bg-[#1f1f1f]">
      {/* left side  */}
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-12 md:col-span-8">
          <div className="flex justify-between items-center px-6 py-4 flex-wrap">
            <div className="flex items-center gap-4">
              <BackButton />
              <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
                Menu
              </h1>
            </div>
            <div className="flex items-center justify-around gap-4">
              <div className="flex items-center gap-3 cursor-pointer">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col items-start">
                  <h1 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
                    Customer Name
                  </h1>
                  <p className="text-xs text-[#ababab] font-medium">
                    Table N/A
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MenuContainer />
        </div>
        <div className="col-span-12 md:col-span-4 md:mr-2 lg:mr-2">
          <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
            {/* Customer Info */}
            <CustomerInfo />
            <hr className="border-[#2a2a2a] border-t-2" />
            <CartInfo />
            <hr className="border-[#2a2a2a] border-t-2" /> {/* Bill */}
            <Bill />
          </div>
        </div>
      </div>
    </section>
  );
}
