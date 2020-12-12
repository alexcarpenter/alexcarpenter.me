const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      gray: colors.blueGray,
      blue: "#0055FF",
      green: "#4CA55E",
      red: "#FF3300",
      yellow: "#FFCC00",
      white: "#FFFFFF",
      black: "#04070C",
    },
    extend: {
      spacing: {
        "16/9": "56.25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
