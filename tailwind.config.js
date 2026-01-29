/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F1A',
        'background-dark': '#0a0a0a',
      },
    },
  },
  plugins: [],
};