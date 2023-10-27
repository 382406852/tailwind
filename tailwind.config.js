/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./src/**/*.{js, jsx, ts, tsx,vue}"
  ],
  theme: {
    theme: {
    },
    extend: {},
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          tab: (value) => ({
            fontSize: `${value}px`
          }),
        }
      )
    }),
    plugin(function({ addBase, theme }) {
      // addBase({
      //   'h1': { fontSize: theme('fontSize.2xl') },
      //   'h2': { fontSize: theme('fontSize.xl') },
      //   'h3': { fontSize: theme('fontSize.lg') },
      // })
    })
  ],
}

