const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx', './data/**/*.ts'],
  },
  darkMode: false, // or 'media' or 'class'
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
