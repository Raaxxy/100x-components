/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-400":"a2a2a2",
        "neutral-1000":"#000",
        "gray":"rgba(255,255,255,",
        "red-error":"#8b141a",
        "green-success":"#00be74",
        "card-fill":"#16181c",
        "searchbar-fill":"#212327",
        "blue-wash":"rgba(117,190,",
        "twitter-blue":"#1D9BF0",

      },
    },
  },
  plugins: [],
}