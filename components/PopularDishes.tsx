import Image from "next/image";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";

// Replace the API import with local sample data
const popularDishes = [
  {
    id: 1,
    name: "Grilled Chicken",
    numberOfOrders: 124,
    image: "https://source.unsplash.com/50x50/?chicken",
  },
  {
    id: 2,
    name: "Spicy Ramen",
    numberOfOrders: 98,
    image: "https://source.unsplash.com/50x50/?ramen",
  },
  {
    id: 3,
    name: "Veggie Burger",
    numberOfOrders: 87,
    image: "https://source.unsplash.com/50x50/?burger",
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    numberOfOrders: 75,
    image: "https://source.unsplash.com/50x50/?pasta",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    numberOfOrders: 102,
    image: "https://source.unsplash.com/50x50/?paneer",
  },
  {
    id: 6,
    name: "Fish Curry",
    numberOfOrders: 66,
    image: "https://source.unsplash.com/50x50/?fish",
  },
  {
    id: 7,
    name: "Tandoori Pizza",
    numberOfOrders: 111,
    image: "https://source.unsplash.com/50x50/?pizza",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    numberOfOrders: 144,
    image: "https://source.unsplash.com/50x50/?cake",
  },
];

const PopularDishes = () => {
  return (
    <div className="mt-6 w-[100%] ">
      <div className="bg-[#1a1a1a] rounded-lg ">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="#" className="text-[#025cca] text-sm font-semibold">
            View all
          </a>
        </div>

        <ScrollArea className="md:h-[700px] h-full w-full">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mb-4 mx-6"
            >
              <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">
                {dish.id < 10 ? `0${dish.id}` : dish.id}
              </h1>
              <Image
                src={dish.image}
                alt={dish.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <h1 className="text-[#f5f5f5] font-semibold tracking-wide">
                  {dish.name}
                </h1>
                <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
                  <span className="text-[#ababab]">Orders: </span>
                  {dish.numberOfOrders}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default PopularDishes;
