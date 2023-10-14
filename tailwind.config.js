/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['public/**/*.html',
   './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta:['Plus Jakarta Sans','sans-serif']
      },
      colors: {
        dark:'#111827',
        gry:'#4B5563',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

