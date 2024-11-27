/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#007D4F",
        secondary:"#7c7c7c",
        tertiary:"#C4E3D7"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"4rem",
          lg:"5rem"
        }
      }
    },
  },
  plugins: [],
}