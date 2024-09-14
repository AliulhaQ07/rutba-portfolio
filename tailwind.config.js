/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      LuckiestGuy: ['Luckiest Guy', 'cursive'],
      Montserrat: ['Montserrat', 'sans-serif'],

    },
    },
  },
  plugins: [],
}