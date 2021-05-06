const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx',
      './content/**/*.mdx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono Web', ...defaultTheme.fontFamily.mono],
    },
    colors: {
      white: '#fafafa',
      black: '#04070c',
      ...colors,
    },
    extend: {
      spacing: {
        '16/9': '56.25%',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const prose = {
        '.prose, .prose > div': {
          '> * + *': {
            marginTop: '1.25rem',
          },
          a: {
            textDecoration: 'underline',
            textDecorationColor: theme('colors.gray.600'),
            '&:hover': {
              textDecorationColor: theme('colors.gray.400'),
            },
          },
        },
      };

      addComponents(prose);
    }),
  ],
};
