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
      },
    },
  },
  plugins: [],
};
