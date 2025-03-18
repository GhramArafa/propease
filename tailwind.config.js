/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               
    "./src/**/*.{js,jsx,ts,tsx}"  
  ],
  theme: {
    extend: {
      colors: {
        main: "#1F4B43",
        yellowCustom:"#E7C873",
        bg:"#FFF8F6",
        text: "#769F7D"
      },
    },
  },
  plugins: [],
}

