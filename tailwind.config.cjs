/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",,"./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors:{
        'primary1':'#F63E7B',
        "bg1":'#E5E5E5'
      },
    },

  },

  plugins: [require("daisyui")],
}
