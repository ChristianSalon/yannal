/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ee0000",
        secondary: "#e5e5e5",
      },
      fontFamily: {
        secondary: ["Abhaya Libre", "sans-serif"],
      },
    },
  },
  plugins: [],
};
