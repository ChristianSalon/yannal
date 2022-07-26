import { motion } from "framer-motion";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full text-center px-8 md:px-32 py-16 sm:pb-32 relative">
      <h4 className="text-sm font-bold uppercase text-gray-700 pb-4">
        Testimonials
      </h4>
      <h2 className="text-5xl font-bold text-primary font-secondary mb-6">
        What our customers say
      </h2>
      <img
        src="/icons/curved-line.svg"
        alt="line"
        width={180}
        className="hidden xs:block relative bottom-4 left-20"
      />
      <div className="flex-1 w-full h-full flex flex-col xl:flex-row gap-8 justify-around px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 flex gap-4"
        >
          <div className="hidden md:block w-24 aspect-square">
            <img
              src="/profile-photos/woman.png"
              alt="woman"
              width={80}
              className="inline-block rounded-lg min-w-[80px]"
            />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-lg font-bold">Natasha Malik</h4>
            <h6 className="text-sm">California</h6>
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
            <p className="text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              quam magnam, numquam aliquam illum voluptate ducimus sunt nisi
              possimus laudantium, quibusdam quis ipsam quod voluptates soluta
              ullam itaque quia.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex gap-4"
        >
          <div className="hidden md:block w-24 aspect-square">
            <img
              src="/profile-photos/man.png"
              alt="man"
              width={80}
              className="inline-block rounded-lg min-w-[80px]"
            />
          </div>
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-lg font-bold">Bob Long</h4>
            <h6 className="text-sm">New York</h6>
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
            <p className="text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              in architecto praesentium earum vitae dolores inventore suscipit
              nemo possimus repudiandae magni, nulla dolore totam.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-2 bg-white sm:absolute -bottom-16 z-10 w-full sm:w-3/5 p-6 rounded-[40px] border-2 border-primary">
        <h3 className="sm:text-xl font-bold">Get Special Discounts</h3>
        <p className="text-xs sm:text-sm mb-4">
          Input email address and complete your subscription to get our special
          offer.
        </p>
        <div className="flex gap-2 p-1 rounded-full border-2 border-primary">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full ml-2 sm:ml-6 focus:outline-none text-xs sm:text-base"
          />
          <input
            type="submit"
            value="Subscribe"
            className="select-none px-4 py-2 text-xs sm:text-base text-white rounded-full cursor-pointer bg-primary hover:bg-red-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
