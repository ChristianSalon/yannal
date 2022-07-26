import { motion } from "framer-motion";
import React from "react";
import { Category } from "../types";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  category: Category;
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const CategoryItem: React.FC<Props> = ({
  name,
  image,
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
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

  const setCategory = () => {
    setSelectedCategory(category);
  };

  return (
    <motion.li variants={childrenVariants} className="my-6">
      <div
        className={`p-2 rounded-lg flex items-center gap-4 select-none -skew-x-12 cursor-pointer transition-background-color duration-200 ${
          category === selectedCategory
            ? "bg-primary shadow-xl shadow-primary/50"
            : "hover:bg-red-100"
        }`}
        onClick={setCategory}
      >
        <div className="p-2 rounded-lg bg-white aspect-square flex justify-center items-center">
          <Image
            src={`/icons/${image}`}
            alt={name}
            width={32}
            height={32}
            className="aspect-square"
          />
        </div>
        <h6
          className={
            category === selectedCategory ? "text-white" : "text-gray-500"
          }
        >
          {name}
        </h6>
      </div>
    </motion.li>
  );
};

export default CategoryItem;
