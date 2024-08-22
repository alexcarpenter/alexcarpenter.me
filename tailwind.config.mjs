const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
      mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      screens: {
        md: "860px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
