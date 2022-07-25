import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavigationItem } from ".";
import { Page } from "../types";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState<Page>(Page.Menu);

  const topLineVariants = {
    open: {
      rotate: [0, 45],
      y: [0, 6],
      transition: { duration: 0.5, delay: 0.4 },
    },
    close: {
      rotate: [45, 0],
      transition: { duration: 0.5 },
    },
  };

  const middleLineVariants = {
    open: {
      opacity: [1, 0],
      transition: { duration: 0.2, delay: 0.4 },
    },
    close: {
      opacity: [0, 1],
      transition: { duration: 0.5 },
    },
  };

  const bottomLineVariants = {
    open: {
      rotate: [0, -45],
      y: [0, -5],
      transition: { duration: 0.5, delay: 0.4 },
    },
    close: {
      rotate: [-45, 0],
      transition: { duration: 0.5 },
    },
  };

  const menuVariants = {
    open: {
      x: [200, 0],
      transition: { duration: 0.5 },
    },
    close: {
      x: 0,
      opacity: [1, 0, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <nav className="hidden flex-initial lg:flex justify-between items-center py-8">
        <h2 className="text-2xl font-medium">yannal.</h2>
        <ul className="flex-1 flex justify-center gap-6">
          <NavigationItem
            name="menu"
            page={Page.Menu}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <NavigationItem
            name="about us"
            page={Page.AboutUs}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <NavigationItem
            name="our specials"
            page={Page.OurSpecials}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <NavigationItem
            name="our locations"
            page={Page.OurLocations}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <NavigationItem
            name="our chefs"
            page={Page.OurChefs}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </ul>
        <div className="flex gap-6">
          <a href="#">
            <img src="/icons/search.svg" alt="search" />
          </a>
          <a href="#">
            <img src="/icons/basket.svg" alt="basket" />
          </a>
          <a href="#">
            <img src="/icons/person.svg" alt="profile" />
          </a>
        </div>
      </nav>
      <nav className="lg:hidden flex-initial flex justify-between items-center py-8 w-full">
        <h2 className="text-xl font-medium">yannal.</h2>
        <motion.div
          variants={menuVariants}
          animate={isOpen ? "open" : "close"}
          initial={false}
          className={`flex flex-col gap-4 top-0 right-0 py-8 px-8 z-10 min-h-screen ${
            isOpen
              ? "bg-gray-200 shadow-2xl shadow-gray-900/60 fixed"
              : "absolute"
          }`}
        >
          <div
            className={`flex flex-col justify-center items-center gap-[4px] h-[29px] p-2 self-end`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              variants={topLineVariants}
              animate={isOpen ? "open" : "close"}
              initial={false}
              className="w-6 flex-1 bg-gray-900"
            ></motion.div>
            <motion.div
              variants={middleLineVariants}
              animate={isOpen ? "open" : "close"}
              initial={false}
              className="w-6 flex-1 bg-gray-900"
            ></motion.div>
            <motion.div
              variants={bottomLineVariants}
              animate={isOpen ? "open" : "close"}
              initial={false}
              className="w-6 flex-1 bg-gray-900"
            ></motion.div>
          </div>
          <div className={`flex-col gap-4 ${isOpen ? "flex" : "hidden"}`}>
            <div className="flex gap-6 py-4">
              <a href="#">
                <img src="/icons/search.svg" alt="search" />
              </a>
              <a href="#">
                <img src="/icons/basket.svg" alt="basket" />
              </a>
              <a href="#">
                <img src="/icons/person.svg" alt="profile" />
              </a>
            </div>
            <ul className="flex-1 flex flex-col justify-center gap-6">
              <li className="">
                <a href="#" className="font-medium">
                  menu
                </a>
              </li>
              <li className="">
                <a href="#" className="font-medium">
                  about us
                </a>
              </li>
              <li className="">
                <a href="#" className="font-medium">
                  our specials
                </a>
              </li>
              <li className="">
                <a href="#" className="font-medium">
                  our locations
                </a>
              </li>
              <li className="">
                <a href="#" className="font-medium">
                  our chefs
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
