/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bg_animate: 'bg_animate 10s infinite'
      },
    },
  },
  plugins: [],
}

