const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './data/**/*.ts'],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono Web', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      white: '#fafafa',
      black: '#04070c',
      ...colors,
    },
  },
};
