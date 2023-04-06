/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset:{
        1: "#eeb8a7",
        2: "#9fdfc2",
        3: "#a2c5f3",
        4: "#f7cec1"
      }
    },
  },
  plugins: [require("daisyui")],
}