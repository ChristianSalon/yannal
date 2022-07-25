import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  const containerVariants = {
    initial: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childrenVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1 },
    },
  };

  return (
    <section className="hidden xl:flex items-center w-full min-h-screen px-10 py-16">
      <div className="w-1/3 px-20">
        <motion.ul
          variants={containerVariants}
          initial="initial"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.li variants={childrenVariants} className="my-6">
            <div className="p-2 rounded-lg flex items-center gap-4 -skew-x-12 bg-primary shadow-xl shadow-primary/50">
              <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
                <Image
                  src="/icons/coffee.png"
                  alt="cofee"
                  width={32}
                  height={32}
                  className="aspect-square"
                />
              </div>
              <h6 className="text-white">Coffee</h6>
            </div>
          </motion.li>
          <motion.li variants={childrenVariants} className="my-6">
            <div className="p-2 rounded-lg flex items-center gap-4 cursor-pointer -skew-x-12 hover:bg-red-100">
              <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
                <Image
                  src="/icons/fast-food.png"
                  alt="fast food"
                  width={32}
                  height={32}
                  className="aspect-square"
                />
              </div>
              <h6 className="text-gray-500">Fast Food</h6>
            </div>
          </motion.li>
          <motion.li variants={childrenVariants} className="my-6">
            <div className="p-2 rounded-lg flex items-center gap-4 cursor-pointer -skew-x-12 hover:bg-red-100">
              <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
                <Image
                  src="/icons/pizza.png"
                  alt="pizza"
                  width={32}
                  height={32}
                  className="aspect-square"
                />
              </div>
              <h6 className="text-gray-500">Pizza</h6>
            </div>
          </motion.li>
          <motion.li variants={childrenVariants} className="my-6">
            <div className="p-2 rounded-lg flex items-center gap-4 cursor-pointer -skew-x-12 hover:bg-red-100">
              <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
                <Image
                  src="/icons/desi-menu.png"
                  alt="desi menu"
                  width={32}
                  height={32}
                  className="aspect-square"
                />
              </div>
              <h6 className="text-gray-500">Desi Menu</h6>
            </div>
          </motion.li>
          <motion.li variants={childrenVariants} className="my-6">
            <div className="p-2 rounded-lg flex items-center gap-4 cursor-pointer -skew-x-12 hover:bg-red-100">
              <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
                <Image
                  src="/icons/desserts.png"
                  alt="desserts"
                  width={32}
                  height={32}
                  className="aspect-square"
                />
              </div>
              <h6 className="text-gray-500">Desserts</h6>
            </div>
          </motion.li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-start w-2/3 gap-4 mx-20 p-12 bg-red-100 rounded-2xl drop-shadow relative"
      >
        <div className="text-sm rounded-full p-2 bg-red-200 border-2 border-red-300">
          <p className="inline mr-2">Faster Food Delivery Service</p>
          <Image
            src="/icons/delivery.svg"
            alt="delivery"
            width={16}
            height={16}
          />
        </div>
        <h1 className="text-[60px] leading-[60px] font-bold text-primary font-secondary">
          Get delivered while it is still hot.
        </h1>
        <p className="text-sm w-1/2 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
          dolore neque adipisci tempora oficis a lorem ipsum dolor sit.
        </p>
        <a
          href="#"
          className="py-3 px-4 rounded-lg uppercase text-sm text-white -skew-x-12 shadow-xl shadow-gray-800/50 bg-gray-800 hover:bg-gray-900"
        >
          Get Started
        </a>
        <img
          src="/dishes/coffee.png"
          alt="coffee"
          width={300}
          height={300}
          className="absolute -bottom-10 -right-10 z-20"
        />
        <img
          src="/coffee-beans.png"
          alt="coffee beans"
          width={300}
          height={300}
          className="absolute bottom-24 right-20 z-10"
        />
        <img
          src="/leaves/leaf-6.svg"
          alt="leaf"
          className="absolute -top-[40px] left-1/2 right-1/2"
        />
        <img
          src="/phone/cube.svg"
          alt="cube"
          className="absolute bottom-[80px] -left-[80px]"
        />
      </motion.div>
    </section>
  );
};

export default Categories;
