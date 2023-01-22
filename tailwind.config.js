/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': {'max': '1660px'},

      '2xl': {'max': '1450px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '991px'},

      'md': {'max': '767px'},

      'sm': {'max': '479px'},
    }
  },
  plugins: [],
}