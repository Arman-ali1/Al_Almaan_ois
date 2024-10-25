/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          930: '#163809', // Define your custom green-950 color here
        },
      },
    },
  },
  plugins: [],
}

