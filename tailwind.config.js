const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono Web', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...colors,
      white: '#fafafa',
      black: '#04070c',
      gray: colors.neutral,
    },
    extend: {},
  },
  plugins: [],
};
