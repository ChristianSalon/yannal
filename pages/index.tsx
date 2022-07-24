import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MenuItem, Navigation, PopularProduct } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <div className="px-6 md:px-14">
        <Head>
          <title>Yannal.</title>
          <link rel="icon" href="/logo-dark.png" />
        </Head>

        <header className="w-full min-h-screen flex flex-col pb-10">
          <Navigation />
          <section className="flex-auto flex">
            <div className="flex-1 flex flex-col justify-center">
              <h5 className="text-xs md:text-sm uppercase text-primary font-medium">
                Now taking online ordres
              </h5>
              <div className="flex">
                <h1 className="text-[60px] md:text-[130px] leading[60px] md:leading-[140px] text-primary font-medium font-secondary">
                  kababs
                </h1>
                <h2 className="text-sm md:text-3xl font-bold text-gray-300 -rotate-90 relative left-6 bottom-2">
                  $14.97
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                nemo illum dolores aperiam. Quis illum cupiditate est a at
                dignissimos adipisci possimus! Porro animi, soluta expedita
                nihil nesciunt quis recusandae.
              </p>
              <div className="py-16 flex gap-6 text-white">
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
              </div>
              <div className="flex">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-700">Lunch</h4>
                  <p className="text-sm text-gray-500">1:00 - 03:00 pm</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-700">Dinner</h4>
                  <p className="text-sm text-gray-500">7:00 - 10:00 pm</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block flex-1 relative -z-10 bg-[url('/hero.png')] bg-no-repeat bg-center bg-contain">
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
            </div>
          </section>
        </header>

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
          <div className="flex-1 w-full h-full flex flex-col lg:flex-row justify-around gap-4 p-8">
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
          </div>
          <img
            src="/leaves/leaf-5.svg"
            alt="leaf"
            className="absolute top-[150px] -left-[110px]"
          />
        </section>

        <section className="hidden xl:flex items-center w-full min-h-screen px-10 py-16">
          <div className="w-1/3 px-20">
            <ul>
              <li className="my-6">
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
              </li>
              <li className="my-6">
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
              </li>
              <li className="my-6">
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
              </li>
              <li className="my-6">
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
              </li>
              <li className="my-6">
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
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start w-2/3 gap-4 mx-20 p-12 bg-red-100 rounded-2xl drop-shadow relative">
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
          </div>
        </section>

        <section className="flex flex-col items-center relative w-full min-h-screen text-center py-16">
          <h4 className="text-sm font-bold uppercase text-gray-700 pb-4">
            Popular Menu
          </h4>
          <h2 className="text-5xl font-bold text-primary font-secondary mb-6">
            Amazing Food Served With Delicacy
          </h2>
          <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 md:grid-rows-3 lg:grid-rows-2 flex-1 w-full h-full px-8 sm:px-24 py-8">
            <MenuItem
              imageURL={"dishim.png"}
              rating={5}
              name={"Dishim with Fries and Sause"}
              price={7.1}
            />
            <MenuItem
              imageURL={"chicken-hot-wings.png"}
              rating={5}
              name={"Chicken Hot Wings"}
              price={6.4}
            />
            <MenuItem
              imageURL={"samosas.png"}
              rating={4.5}
              name={"Samosas with Green Chatni"}
              price={4.8}
            />
            <MenuItem
              imageURL={"sweetdish.png"}
              rating={4}
              name={"Sweet Sawaiyan"}
              price={5.1}
            />
            <MenuItem
              imageURL={"fish.png"}
              rating={5}
              name={"Fried Raw Fish"}
              price={3.6}
            />
            <MenuItem
              imageURL={"fried-egg.png"}
              rating={4}
              name={"Breakfast with Half Fried Egg"}
              price={6.9}
            />
          </div>
          <a
            href="#"
            className="w-44 py-3 px-4 rounded-lg text-sm text-white -skew-x-12 shadow-xl shadow-primary/70 bg-primary hover:bg-red-700"
          >
            <div className="flex justify-around items-center">
              <h6>View Menu</h6>
              <div className="bg-white px-3 py-2 rounded-lg">
                <img src="/icons/right-arrow.svg" alt="arrow" />
              </div>
            </div>
          </a>
          <img
            src="/leaves/leaf-7.svg"
            alt="leaf"
            className="hidden lg:block absolute top-0 -left-[160px]"
          />
          <img
            src="/leaves/leaf-2.svg"
            alt="leaf"
            className="hidden sm:block absolute top-1/2 bottom-1/2 right-[0px]"
          />
        </section>
      </div>

      <section className="flex justify-around items-center w-full min-h-screen py-16 bg-red-100">
        <div className="hidden md:flex w-1/2 justify-center">
          <div className="flex flex-col justify-between items-stretch w-[260px] h-[500px] p-4 rounded-3xl bg-white relative shadow-2xl">
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
            <div className="flex justify-around items-center h-12 bg-red-100 rounded-full">
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
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-4 p-12 w-1/2">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            eum laudantium tenetur voluptates quidem at pariatur ipsa quasi
            molestiae deleniti dignissimos.
          </p>
          <div className="py-4 flex gap-8">
            <a href="#">
              <img src="/phone/app-store.png" alt="app store" />
            </a>
            <a href="#">
              <img src="/phone/google-play.png" alt="google play" />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full text-center px-8 md:px-32 py-16 sm:pb-32 relative">
        <h4 className="text-sm font-bold uppercase text-gray-700 pb-4">
          Testimonial
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
          <div className="flex-1 flex gap-4">
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
          </div>
          <div className="flex-1 flex gap-4">
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
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-center gap-2 bg-white absolute -bottom-16 z-10 w-3/5 p-6 rounded-[40px] border-2 border-primary">
          <h3 className="text-xl font-bold">Get Special Discounts</h3>
          <p className="text-sm text-medium mb-4">
            Input email address and complete your subscription to get our
            special offer.
          </p>
          <div className="flex gap-2 p-1 rounded-full border-2 border-primary">
            <input
              type="email"
              placeholder="bob.long@gmail.com"
              className="ml-6 focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 text-white rounded-full cursor-pointer bg-primary hover:bg-red-700"
            />
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center w-full px-8 md:px-32 bg-gray-800 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-4 sm:grid-rows-2 lg:grid-rows-1 gap-12 w-full pt-32">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold">yannal.</h2>
            <div className="flex items-center gap-6">
              <a href="#">
                <i className="fab fa-facebook-f hover:text-blue-500 transition-color duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter hover:text-blue-300 duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram hover:text-pink-500 duration-300"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin hover:text-blue-700 duration-300"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <img src="/icons/location.svg" alt="location" />
                <p>Brooklyn, New York</p>
              </li>
              <li className="flex gap-4">
                <img src="/icons/phone.svg" alt="phone" />
                <p>718 254 658</p>
              </li>
              <li className="flex gap-4">
                <img src="/icons/mail.svg" alt="mail" />
                <p>support@yannal.com</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 lg:place-self-end">
            <h4 className="text-xl font-bold">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold">Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="#">Dates</a>
              </li>
              <li>
                <a href="#">Parties</a>
              </li>
              <li>
                <a href="#">Birthdays</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="p-4 pt-16 text-xs sm:text-sm md:text-base">
          ©2022 Yannal Resturant
        </p>
      </footer>
    </>
  );
};

export default Home;
