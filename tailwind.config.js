/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.jsx"],
  // darkMode: "class",
  theme: {
    extend: {
      screens: {
        ss: {
            max: "900px",
        },
        hp: {
            max: "768px",
        },
    },

      colors: {
        primary:{
          100:"#F0F8FF",
          
        }

      }
    },
  },
  plugins: [],
}
