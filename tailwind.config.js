/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
    backgroundImage: {
      relaxerBg: "url('~/src/images/relaxer-bg.jpg')",
      brickWall: "url('~/src/images/brick-wall.jpg')",
      postItNote: "url('~/src/images/post-it-note.png')",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
