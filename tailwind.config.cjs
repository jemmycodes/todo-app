/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        eachToDoColor: "rgb(38,38,38)",
        iconsColor: "rgb(47,116,92)",
        bgColor: "rgb(28,28,28)",
        shadyWhite: "rgb(198,198,198)",
      },
    },
  },
  plugins: [],
};
