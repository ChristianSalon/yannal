import React from "react";
import Image from "next/image";

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
  const getRatingStars = () => {
    let stars = [];
    let i = rating;
    for (let j = 1; j < 6; j++) {
      if (rating >= j)
        stars.push(
          <img src="/icons/full-star.svg" alt="star" className="inline" />
        );
      else if (rating + 0.5 === j)
        stars.push(
          <img src="/icons/half-star.svg" alt="half star" className="inline" />
        );
      else
        stars.push(
          <img src="/icons/no-star.svg" alt="no star" className="inline" />
        );
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <Image src={`/dishes/${imageURL}`} width={150} height={150} />
      <div className="my-2">{getRatingStars()}</div>
      <h6 className="text-sm">{category}</h6>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">{name}</h2>
      <div className="flex justify-around items-center w-40 text-xs text-center p-3 rounded-lg cursor-pointer text-white bg-primary hover:bg-red-700 -skew-x-12 shadow-xl shadow-primary/40">
        <p>Add to Cart</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PopularProduct;
