const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["iA Writer Quattro", ...defaultTheme.fontFamily.sans],
      mono: [defaultTheme.fontFamily.mono],
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
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
