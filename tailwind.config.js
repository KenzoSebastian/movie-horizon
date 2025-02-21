/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        navbar: "#2b2b31ff",
        primary: "#5CB338",
        primaryDark: "#4f9d2f",
      },
    },
  },
  plugins: [],
};
