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
      sans: ["var(--font-instrument-sans)", ...fontFamily.sans],
      serif: ["var(--font-instrument-serif)", ...fontFamily.serif],
    },
    extend: {
      gradientColorStops: {
        "text-gradient-start": "hsl(var(--foreground))",
        "text-gradient-end": "hsl(var(--foreground-neutral))",
      },
      backgroundColor: {
        page: "hsl(var(--page))",
        "surface-action": "hsl(var(--surface-action))",
        "surface-neutral": "hsl(var(--surface-neutral))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
        "foreground-neutral": "hsl(var(--foreground-neutral))",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      textDecorationColor: {
        underline: "hsl(var(--underline))",
      },
    },
  },
  plugins: [],
};
