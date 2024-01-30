/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#04040C', 
        'gradient-blue' : '#5C43F6',
        'gradient-purple': '#BC61F3',
        'white':'#F2F2F2',
        'light-dark': "#16192A"
      },
    },
  },
  plugins: [],
}