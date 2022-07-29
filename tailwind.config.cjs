/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pine': '#69A297',
        'bone': '#DDD8C4',
        'greensheen': '#84B59F',
        'tealblue': '#50808E',
        'etonblue': '#A3C9A8',
        'black': '#1B262C',
        'navy': '#0F4C75',
        'blue': '#3282B8',
        'lightblue': '#BBE1FA'

      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
