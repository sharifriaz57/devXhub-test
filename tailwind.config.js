/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightGray': '#cecece',
        'midnightDark': '#212121'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}


