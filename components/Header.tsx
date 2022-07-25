import { motion } from "framer-motion";
import React from "react";
import { Navigation } from ".";

const Header: React.FC = () => {
  const containerVariants = {
    initial: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const childrenVariants = {
    initial: {
      y: 500,
      opacity: 0.4,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1 },
    },
  };

  return (
    <header className="w-full min-h-screen flex flex-col pb-10">
      <Navigation />
      <section className="flex-auto flex">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="show"
          className="flex-1 flex flex-col justify-center"
        >
          <motion.h5
            variants={childrenVariants}
            className="text-xs md:text-sm uppercase text-primary font-medium"
          >
            Now taking online orders
          </motion.h5>
          <motion.div variants={childrenVariants} className="flex">
            <h1 className="text-[60px] md:text-[130px] leading[60px] md:leading-[140px] text-primary font-medium font-secondary">
              kababs
            </h1>
            <h2 className="text-sm md:text-3xl font-bold text-gray-300 -rotate-90 relative left-6 bottom-2">
              $14.97
            </h2>
          </motion.div>
          <motion.p
            variants={childrenVariants}
            className="text-xs sm:text-sm md:text-md"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            nemo illum dolores aperiam. Quis illum cupiditate est a at
            dignissimos adipisci possimus! Porro animi, soluta expedita nihil
            nesciunt quis recusandae.
          </motion.p>
          <motion.div
            variants={childrenVariants}
            className="py-16 flex gap-6 text-white"
          >
            <a
              href="#"
              className="text-sm sm:text-md flex-1 text-center py-3 rounded-lg shadow-2xl shadow-primary/70 bg-primary hover:bg-red-700 -skew-x-12"
            >
              Add To Cart
            </a>
            <a
              href="#"
              className="text-sm sm:text-md flex-1 py-3 text-center rounded-lg shadow-2xl shadow-gray-800/70 bg-gray-800 hover:bg-gray-900 -skew-x-12"
            >
              Book a Table
            </a>
          </motion.div>
          <motion.div variants={childrenVariants} className="flex">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-700">Lunch</h4>
              <p className="text-sm text-gray-500">1:00 - 03:00 pm</p>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-700">Dinner</h4>
              <p className="text-sm text-gray-500">7:00 - 10:00 pm</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          transition={{ duration: 0.5 }}
          animate={{ x: 0 }}
          className="hidden lg:block flex-1 relative -z-10 bg-[url('/hero.png')] bg-no-repeat bg-center bg-contain"
        >
          <img
            src="/leaves/leaf-1.svg"
            alt="leaf"
            className="absolute top-[130px] left-[200px]"
          />
          <img
            src="/leaves/leaf-2.svg"
            alt="leaf"
            className="absolute top-[130px] right-[40px]"
          />
          <img
            src="/leaves/leaf-3.svg"
            alt="leaf"
            className="absolute bottom-[170px] right-[80px]"
          />
          <img
            src="/leaves/leaf-4.svg"
            alt="leaf"
            className="absolute bottom-[80px] left-[20px]"
          />
          <img
            src="/leaves/leaf-5.svg"
            alt="leaf"
            className="absolute bottom-0 right-0"
          />
        </motion.div>
      </section>
    </header>
  );
};

export default Header;
