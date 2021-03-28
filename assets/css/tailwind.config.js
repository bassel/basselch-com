const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blueGray: colors.blueGray,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      purple: colors.violet,
    },
    extend: {
      fontSize: {
        'md': '.925rem',
      },
      transitionProperty: {
        'border': 'border',
      },
      colors: {
        gray: {
          '950': '#222222',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            '[class~="lead"]': {
              color: theme('colors.blueGray.700'),
            },
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            }
          }
        },
        rtl: {
          css: [
            {
              blockquote: {
                borderLeftWidth: '0',
                borderLeftColor: 'none',
                borderRightWidth: '0.25rem',
                borderRightColor: defaultTheme.colors.gray[300],
              },
              table: {
                textAlign: 'right',
              },
              'ol > li::before': {
                content: 'counter(list-counter, arabic-indic) "."',
                position: 'absolute',
              },
            },
            {
              blockquote: {
                paddingLeft: 0,
                paddingRight: em(20, 20),
              },
              'ol > li': {
                paddingLeft: 0,
                paddingRight: em(28, 16),
              },
              'ol > li::before': {
                right: '0',
                left: 'auto',
              },
              'ul > li': {
                paddingLeft: 0,
                paddingRight: em(28, 16),
              },
              'ul > li::before': {
                right: em(4, 16),
                left: 'auto',
              },
              'thead th:first-child': {
                paddingLeft: 'auto',
                paddingRight: '0',
              },
              'thead th:last-child': {
                paddingRight: 'auto',
                paddingLeft: '0',
              },
              'tbody td:first-child': {
                paddingLeft: 'auto',
                paddingRight: '0',
              },
              'tbody td:last-child': {
                paddingRight: 'auto',
                paddingLeft: '0',
              },
            },
          ],
        },
        dark: {
          css: [
            {
              color: theme('colors.gray.200'),
              '[class~="lead"]': {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.blue.400'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.300'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.500'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.500'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.300'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      typography: ['dark', 'direction'],
      inset: ['direction'],
      padding: ['direction'],
      margin: ['direction'],
      borderWidth: ['direction'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-dir')(),
  ]
}
