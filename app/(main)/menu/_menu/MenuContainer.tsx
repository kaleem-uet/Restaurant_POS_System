"use client";
import { CircleDot, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

// Mock menu data
const mockMenus = [
  {
    id: 1,
    name: "Starters",
    bgColor: "#4a4e69",
    icon: "🍤",
    items: [
      { id: 101, name: "Spring Rolls", price: 120 },
      { id: 102, name: "Garlic Bread", price: 90 },
      { id: 103, name: "Paneer Tikka", price: 150 },
    ],
  },
  {
    id: 2,
    name: "Main Course",
    bgColor: "#22223b",
    icon: "🍛",
    items: [
      { id: 201, name: "Butter Chicken", price: 250 },
      { id: 202, name: "Veg Biryani", price: 180 },
      { id: 203, name: "Dal Makhani", price: 160 },
    ],
  },
  {
    id: 3,
    name: "Desserts",
    bgColor: "#9a8c98",
    icon: "🍰",
    items: [
      { id: 301, name: "Gulab Jamun", price: 70 },
      { id: 302, name: "Ice Cream", price: 80 },
      { id: 303, name: "Brownie", price: 100 },
    ],
  },
  {
    id: 4,
    name: "Drinks",
    bgColor: "#f2e9e4",
    icon: "🥤",
    items: [
      { id: 401, name: "Mojito", price: 110 },
      { id: 402, name: "Lemon Soda", price: 60 },
      { id: 403, name: "Cold Coffee", price: 130 },
    ],
  },
];

const MenuContainer = () => {
  const [selected, setSelected] = useState(mockMenus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };

  const handleAddToCart = (item) => {};

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 py-4 w-full">
        {mockMenus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <CircleDot className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4 px-4 py-4 w-full">
        {selected?.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg h-[180px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
          >
            <div className="flex items-start justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {item.name}
              </h1>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg"
              >
                <ShoppingCart size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between w-full mt-6">
              <p className="text-[#f5f5f5] text-xl font-bold">₹{item.price}</p>

              <div className="flex items-center justify-between bg-[#1f1f1f] px-1 py-2 rounded-lg w-[70%] md:w-[60%] lg:w-[50%] min-w-[100px] space-x-4 sm:space-x-6">
                <button
                  onClick={() => decrement(item.id)}
                  className="text-yellow-500 text-base sm:text-lg md:text-xl"
                >
                  &minus;
                </button>
                <span className="text-white text-base sm:text-lg md:text-xl">
                  {itemId === item.id ? itemCount : "0"}
                </span>
                <button
                  onClick={() => increment(item.id)}
                  className="text-yellow-500 text-base sm:text-lg md:text-xl"
                >
                  &#43;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuContainer;
