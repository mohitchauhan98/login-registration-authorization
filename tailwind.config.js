/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        titleFont : "Roboto",
        bodyFont : "Poppins",
      },
      boxShadow : {
        testShadow : "0px 0px 32px 1px rgba(199,199,199,1)",
        formInput : "0 0 3px 2px rgba(228 121 17 / 50%)"
      },
    },
  },
  plugins: [],
}

