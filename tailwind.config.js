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
          fs: (value) => ({
            fontSize: `${value}px`
          })
        }
      )
    })
  ],
}

