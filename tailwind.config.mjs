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
    fontSize: {
      xs: '0.7142857143rem', // 10px
      sm: '0.8571428571rem', // 12px
    },
    extend: {
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
};
