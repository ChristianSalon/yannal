import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  imageURL: string;
  rating: number;
  category: string;
  name: string;
  price: number;
}

const PopularProduct: React.FC<Props> = ({
  imageURL,
  rating,
  category,
  name,
  price,
}) => {
  const childrenVariants = {
    initial: {
      x: 1000,
    },
    show: {
      x: 0,
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  };

  const getRatingStars = () => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (rating >= i)
        stars.push(
          <img
            key={i}
            src="/icons/full-star.svg"
            alt="star"
            className="inline"
          />
        );
      else if (rating + 0.5 === i)
        stars.push(
          <img
            key={i}
            src="/icons/half-star.svg"
            alt="half star"
            className="inline"
          />
        );
      else
        stars.push(
          <img
            key={i}
            src="/icons/no-star.svg"
            alt="no star"
            className="inline"
          />
        );
    }
    return stars;
  };

  return (
    <motion.div
      variants={childrenVariants}
      className="flex flex-col gap-1 justify-center items-center p-6 rounded-3xl border-[1px] border-gray-200 shadow-xl"
    >
      <Image src={`/dishes/${imageURL}`} alt={name} width={150} height={150} />
      <div className="my-2">{getRatingStars()}</div>
      <h6 className="text-sm">{category}</h6>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">{name}</h2>
      <div className="flex justify-around items-center w-40 text-xs text-center p-3 rounded-lg select-none cursor-pointer text-white bg-primary hover:bg-red-700 -skew-x-12 shadow-xl shadow-primary/40">
        <p>Add to Cart</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

export default PopularProduct;
