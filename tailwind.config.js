/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        singerOverlay: "url(/hero/singer-overlay.png)",
        newsLetter: "url(/newsletter/bg.png)",
      },
      fontFamily: {
        alexBrush: ["Alex Brush", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#06062a",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
