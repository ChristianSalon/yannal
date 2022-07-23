import React from "react";
import Image from "next/image";

interface Props {
  imageURL: string;
  rating: number;
  description?: string;
  name: string;
  price: number;
}

const MenuItem: React.FC<Props> = ({
  imageURL,
  rating,
  name,
  description,
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
    <div className="flex flex-col gap-1 justify-center items-start text-left p-6 rounded-3xl border-[1px] border-gray-200 shadow-xl">
      <img
        src={`/dishes/${imageURL}`}
        width={150}
        height={150}
        className="self-center drop-shadow-xl"
      />
      <div className="">{getRatingStars()}</div>
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <h6 className="text-xs">
        {description
          ? description
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis minus ratione."}
      </h6>
      <div className="w-full flex justify-between items-center py-3">
        <p>${price.toFixed(2)}</p>
        <div>
          <div className="inline-block p-2 rounded-lg bg-primary hover:bg-red-700 cursor-pointer mr-2">
            <img src="/icons/heart.svg" alt="heart" />
          </div>
          <div className="inline-block p-2 rounded-lg bg-gray-800 hover:bg-gray-900 cursor-pointer">
            <img src="/icons/share.svg" alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
