/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif']
      },
      colors: {
        'default': '#819bbf',
        'light': '#eaeff5',
        'lighter': '#F1F6F9',
        'dark': '#394867',
        'darker': '#283449',
        'green-accent': '#0c6'
      },
    },
  },
  plugins: [],
}
