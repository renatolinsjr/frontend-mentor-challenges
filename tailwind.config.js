/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(14, 45%, 36%)",
      secondary: "hsl(332, 51%, 32%)",
      white: "hsl(0, 0%, 100%)",
      "rose-white": "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      "light-grey": "hsl(30, 18%, 87%)",
      "wenge-brown": "hsl(30, 10%, 34%)",
      "dark-charcoal": "hsl(24, 5%, 18%)",
    },
    extend: {
      fontFamily: {
        "young-serif": ['"Young Serif"', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        sm: "375px",
      },
      backgroundImage: {
        "recipe-hero":
          "url('/src/pages/recipe-page/assets/images/image-omelette.jpeg')",
      },
    },
  },
  plugins: [],
};
