const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './content/**/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono Web', ...defaultTheme.fontFamily.mono],
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
    extend: {
      scale: ['group-hover', 'group-focus'],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const prose = {
        '.prose, .prose > div': {
          '> * + *': {
            marginTop: '1rem',
          },
          '* + h2, * + h3': {
            marginTop: '2rem',
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
