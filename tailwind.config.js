/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        color1: "rgba(98, 106, 136, 0.1)",
        color2: "rgba(46, 49, 73, 0.1)",
        color3: "#14172B",
        text1: "#737BAE",
        color4:"#FF4D4D",
        color5:"#ECF0FF"
      },
      fontFamily: {
        Tomorrow: "Tomorrow",
      },
    },
  },
  plugins: [],
};