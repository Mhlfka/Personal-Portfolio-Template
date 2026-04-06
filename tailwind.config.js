/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        myFont: ["MoscowMetro", "sans"],
        brunoAce:["Bruno Ace", "sans"]
      },
    },
  },  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
