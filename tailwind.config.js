const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
    },
    extend: {
      colors: {
        highlight: "rgb(var(--highlight))",
      },
      backgroundColor: {
        page: "rgb(var(--page))",
      },
      textColor: {
        primary: "rgb(var(--foreground-primary))",
        secondary: "rgb(var(--foreground-secondary))",
      },
      borderColor: {
        DEFAULT: "rgb(var(--border))",
      },
      listStyleType: {
        circle: "circle",
        square: "square",
      },
      boxShadow: {
        btn: "2px 2px rgb(var(--shadow))",
      },
    },
  },
  plugins: [],
};
