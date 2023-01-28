/** @type {import('tailwindcss').Config} */

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
    animation: {
      snore: "snore 9s infinite linear forwards",
      nod: "nod 5s ease-in-out infinite",
    },
    backgroundImage: {
      relaxerBg: "url('~/src/images/relaxer-bg.jpg')",
      brickWall: "url('~/src/images/brick-wall.jpg')",
      postItNote: "url('~/src/images/post-it-note.png')",
      rabbitGradient:
        "radial-gradient(circle at 0 50%, #b5becd, #b5becd 60%, #d7dfed 61%)",
      focusGradient: "linear-gradient(45deg,#ff0057,#2196f3)",
    },
    boxShadow: {
      paperShadow: "inset 0px 5px 6px grey, 0px 8px hsl(230, 89%, 53%)",
      paperBigShadow:
        "inset 0px 5px 6px grey, 0px 8px hsl(230, 89%, 53%), 0px 0px 0px 50px rgba(#ffffff, .07), 0px 0px 0px 100px rgba(#ffffff, .05), 0px 0px 0px 150px rgba(#ffffff, .025)",
      scissorsShadow: "inset 0px 5px 6px grey, 0px 8px hsl(39, 89%, 42%)",
      scissorsBigShadow:
        "inset 0px 5px 6px grey, 0px 8px hsl(39, 89%, 42%), 0px 0px 0px 50px rgba(#ffffff, .07), 0px 0px 0px 100px rgba(#ffffff, .05), 0px 0px 0px 150px rgba(#ffffff, .025)",
      rockShadow: "inset 0px 5px 6px grey, 0px 8px hsl(349, 71%, 44%)",
      rockBigShadow:
        "inset 0px 5px 6px grey, 0px 8px hsl(349, 71%, 44%), 0px 0px 0px 50px rgba(#ffffff, .07), 0px 0px 0px 100px rgba(#ffffff, .05), 0px 0px 0px 150px rgba(#ffffff, .025)",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
