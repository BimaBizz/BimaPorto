/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily:{
      'UI': ['Fugaz One'],
    },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}