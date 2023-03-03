/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        "blue-400": "hsl(246, 80%, 60%)",
        "blue-500": "hsl(236, 41%, 34%)",
        "blue-600": "hsl(235, 46%, 20%)",
        "blue-700": "hsl(226, 43%, 10%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        selfcare: "hsl(43, 84%, 65%)",
      },
    },
  },
  plugins: [],
}
