/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uo-black': '#111111',
        'uo-gray-100': '#f6f6f6',
        'uo-gray-200': '#eeeeee',
        'uo-gray-300': '#999999',
      },
      fontFamily: {
        // UO uses a clean sans-serif. Helvetica is a safe bet.
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        widest: '.2em',
      }
    },
  },
  plugins: [],
}