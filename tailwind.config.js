const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      gray: colors.blueGray,
      blue: '#0055FF',
      white: '#FFFFFF',
      black: '#04070C',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
