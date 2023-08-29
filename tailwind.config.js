/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-orange': '#FF5722'
      },
      backgroundImage: {
        'ui-corners': "url('/assets/icons/actions/ui-corners.svg')"
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        pogTheme: {
          colors: {
            default: '#cefcff',
            primary: {
              DEFAULT: '#cefcff',
              foreground: '#cefcff'
            },
            focus: '#cefcff'
          }
        },
        dark: {
          colors: {
            default: '#cefcff',

            primary: {
              DEFAULT: '#BEF264',
              foreground: '#00EAB3'
            },
            focus: '#00FFF0'
          }
        }
      }
    })
  ]
}
