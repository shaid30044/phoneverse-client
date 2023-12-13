/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
      },
      colors: {
        primary: "#ee4037",
      },
    },
  },
  plugins: [require("daisyui")],
};
