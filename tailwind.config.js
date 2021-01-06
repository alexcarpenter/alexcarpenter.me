const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      gray: colors.blueGray,
      blue: '#0055FF',
      green: '#4CA55E',
      red: '#FF3300',
      white: '#FFFFFF',
      black: '#04070C',
    },
    extend: {
      spacing: {
        '16/9': '56.25%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const prose = {
        '.prose': {
          '> * + *': {
            marginTop: '1rem',
          },
          ul: {
            paddingLeft: '1.25rem',
          },
          'ul li ul': {
            marginTop: '0.25rem',
          },
        },
      };

      addComponents(prose);
    }),
  ],
};
