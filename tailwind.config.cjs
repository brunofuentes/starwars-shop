/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        starwars: ['starwars', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
