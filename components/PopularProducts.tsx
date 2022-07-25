import { motion } from "framer-motion";
import React from "react";
import { PopularProduct } from ".";

const PopularProducts: React.FC = () => {
  const containerVariants = {
    initial: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="flex flex-col items-center w-full min-h-screen text-center py-16 relative">
      <h4 className="text-sm font-bold uppercase text-gray-700 pb-4">
        Online Store
      </h4>
      <h2 className="text-5xl font-bold text-primary font-secondary mb-6">
        Popular Products
      </h2>
      <img
        src="/icons/curved-line.svg"
        alt="line"
        width={180}
        className="hidden xs:block relative bottom-4 right-20"
      />
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 w-full h-full flex flex-col lg:flex-row justify-around gap-4 p-8"
      >
        <PopularProduct
          imageURL={"hot-wings.png"}
          rating={4.5}
          category={"Chinese"}
          name={"Hot Wings"}
          price={14}
        />
        <PopularProduct
          imageURL={"curry.png"}
          rating={4.5}
          category={"Indian Style"}
          name={"Rice with Curry"}
          price={22.49}
        />
        <PopularProduct
          imageURL={"chapatees.png"}
          rating={3.5}
          category={"Pakistani Style"}
          name={"Chapatees"}
          price={18}
        />
        <PopularProduct
          imageURL={"sweetdish.png"}
          rating={5}
          category={"Western Style"}
          name={"Sweetdish"}
          price={16}
        />
      </motion.div>
      <img
        src="/leaves/leaf-5.svg"
        alt="leaf"
        className="absolute top-[150px] -left-[110px]"
      />
    </section>
  );
};

export default PopularProducts;
