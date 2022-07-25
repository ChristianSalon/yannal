import React from "react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
