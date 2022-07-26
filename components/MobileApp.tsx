import { motion } from "framer-motion";
import React from "react";

const MobileApp: React.FC = () => {
  return (
    <section className="flex justify-around items-center w-full min-h-screen py-16 bg-red-100">
      <div className="hidden md:flex w-1/2 justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            x: [-1000, 0],
            opacity: [1, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col justify-between items-stretch w-[260px] h-[500px] p-4 rounded-3xl bg-white relative shadow-2xl select-none"
        >
          <div className="flex justify-between items-center py-2">
            <img src="/phone/menu.svg" alt="menu" />
            <div className="inline-block p-2 rounded-lg shadow-lg shadow-primary/60 bg-primary mr-2">
              <img src="/phone/cart.svg" alt="cart" width={14} />
            </div>
          </div>
          <h4 className="text-lg font-medium">Monal Restaurant</h4>
          <div className="flex justify-between">
            <div className="w-[45%] shadow-lg p-4 rounded-xl">
              <img src="/dishes/fish.png" alt="fish" width={100} />
              <h3 className="font-bold">Raw Fish</h3>
              <div>
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
              </div>
              <h4 className="font-bold text-sm">$14.00</h4>
            </div>
            <div className="w-[45%] shadow-lg p-4 rounded-xl">
              <img src="/dishes/fried-egg.png" alt="fried egg" width={100} />
              <h3 className="font-bold">Breakfast</h3>
              <div>
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
                <img
                  src="/icons/full-star.svg"
                  alt="star"
                  width={10}
                  height={10}
                  className="inline"
                />
              </div>
              <h4 className="font-bold text-sm">$21.00</h4>
            </div>
          </div>
          <div className="rounded-xl shadow-lg p-4 w-5/6 relative">
            <h3 className="font-bold text-lg">Sweetness</h3>
            <div>
              <img
                src="/icons/full-star.svg"
                alt="star"
                width={10}
                height={10}
                className="inline"
              />
              <img
                src="/icons/full-star.svg"
                alt="star"
                width={10}
                height={10}
                className="inline"
              />
              <img
                src="/icons/full-star.svg"
                alt="star"
                width={10}
                height={10}
                className="inline"
              />
              <img
                src="/icons/full-star.svg"
                alt="star"
                width={10}
                height={10}
                className="inline"
              />
              <img
                src="/icons/full-star.svg"
                alt="star"
                width={10}
                height={10}
                className="inline"
              />
            </div>
            <h4 className="font-bold">$40.00</h4>
            <img
              src="/dishes/sweetdish.png"
              alt="sweetdish"
              width={100}
              className="absolute -right-10 top-1"
            />
          </div>
          <div className="flex justify-around items-center h-12 bg-red-100 shadow-xl shadow-primary/20 rounded-full">
            <div className="flex-1 flex flex-col justify-center items-center">
              <img src="/phone/home.svg" alt="home" width={16} />
              <p className="text-[6px] mt-1">Home</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img
                src="/phone/notification.svg"
                alt="notification"
                width={16}
              />
              <p className="text-[6px] mt-1">Notification</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img src="/phone/favorites.svg" alt="favorites" width={16} />
              <p className="text-[6px] mt-1">Favorites</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img src="/phone/user.svg" alt="user" width={16} />
              <p className="text-[6px] mt-1">User</p>
            </div>
          </div>
          <img
            src="/phone/leaves.png"
            alt="leaves"
            className="absolute bottom-0 -left-12"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          y: [200, 0],
          opacity: [0, 1],
        }}
        transition={{ ease: "easeOut", duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center items-start gap-4 p-12 w-1/2"
      >
        <h2 className="text-sm font-bold uppercase text-gray-800 ">
          Download Our App
        </h2>
        <div>
          <h1 className="text-[50px] leading-[50px] font-bold text-primary font-secondary">
            It’s all here.
          </h1>
          <h1 className="text-[50px] leading-[50px] font-bold text-primary font-secondary">
            All in one app.
          </h1>
        </div>
        <p className="text-sm md:text-base w-full xl:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum
          laudantium tenetur voluptates quidem at pariatur ipsa quasi molestiae
          deleniti dignissimos.
        </p>
        <div className="py-4 flex gap-8">
          <a href="#">
            <img src="/phone/app-store.png" alt="app store" />
          </a>
          <a href="#">
            <img src="/phone/google-play.png" alt="google play" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default MobileApp;
