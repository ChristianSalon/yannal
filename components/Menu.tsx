import React from "react";
import { MenuItem } from ".";

const Menu: React.FC = () => {
  return (
    <section className="flex flex-col items-center relative w-full min-h-screen text-center py-16">
      <h4 className="text-sm font-bold uppercase text-gray-700 pb-4">
        Popular Menu
      </h4>
      <h2 className="text-5xl font-bold text-primary font-secondary mb-6">
        Amazing Food Served With Delicacy
      </h2>
      <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 flex-1 w-full h-full px-8 sm:px-24 py-8">
        <MenuItem
          imageURL={"dishim.png"}
          rating={5}
          name={"Dishim with Fries and Sause"}
          price={7.1}
        />
        <MenuItem
          imageURL={"chicken-hot-wings.png"}
          rating={5}
          name={"Chicken Hot Wings"}
          price={6.4}
        />
        <MenuItem
          imageURL={"samosas.png"}
          rating={4.5}
          name={"Samosas with Green Chatni"}
          price={4.8}
        />
        <MenuItem
          imageURL={"sweetdish.png"}
          rating={4}
          name={"Sweet Sawaiyan"}
          price={5.1}
        />
        <MenuItem
          imageURL={"fish.png"}
          rating={5}
          name={"Fried Raw Fish"}
          price={3.6}
        />
        <MenuItem
          imageURL={"fried-egg.png"}
          rating={4}
          name={"Breakfast with Half Fried Egg"}
          price={6.9}
        />
      </div>
      <a
        href="#"
        className="w-44 py-3 px-4 rounded-lg text-sm text-white -skew-x-12 shadow-xl shadow-primary/70 bg-primary hover:bg-red-700"
      >
        <div className="flex justify-around items-center">
          <h6>View Menu</h6>
          <div className="bg-white px-3 py-2 rounded-lg">
            <img src="/icons/right-arrow.svg" alt="arrow" />
          </div>
        </div>
      </a>
      <img
        src="/leaves/leaf-7.svg"
        alt="leaf"
        className="hidden lg:block absolute top-0 -left-[160px]"
      />
      <img
        src="/leaves/leaf-2.svg"
        alt="leaf"
        className="hidden sm:block absolute top-1/2 bottom-1/2 right-[0px]"
      />
    </section>
  );
};

export default Menu;
