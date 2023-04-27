/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "416px",
      },
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
      animation: {
        snore: "snore 9s infinite linear forwards",
        spinner: "spinner 1.8s ease-in-out infinite",
        nod: "nod 5s ease-in-out infinite",
        blink: "blink 1s infinite",
        expand: "expand 4s linear infinite",
        imageExpand: "imageExpand 6s linear infinite",
        colorSplash: "colorSplash 4s linear infinite",
        alarm: "alarm 2s infinite alternate",
        progressBar: "progressBar linear forwards",
        orbitalSpin: "orbitalSpin linear infinite",
        diceShake: "diceShake 0.5s infinite",
        flicker: "flicker 1.5s infinite alternate",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        relaxerBg: "url('~/src/images/relaxer-bg.jpg')",
        brickWall: "url('~/src/images/brick-wall.jpg')",
        postItNote: "url('~/src/images/post-it-note.png')",
        bmiCalculatorBg: "url('https://digitshack.com/codepen/bmical/bg.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
