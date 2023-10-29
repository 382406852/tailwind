/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./src/**/*.{js, jsx, ts, tsx,vue}"
  ],
  theme: {
    theme: {
    },
    extend: {
      colors:{
        "gray":'#545c64'
      },
      backgroundColor:{
        "gray":'#545c64'
        
      }
    },
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

