/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-custom': 'rgb(229, 9, 20)',
        '#121010': '#121010',
        'blue': '#0071eb',
        'gray': '#232323',
        'darkgray': '#2D2D2D',
        'bdrclr': '#5F5F60',
        'textclr': '#854F22',
        'moreclr': '#52514F',
      },
      inset: {
        '170px': '170px',
      },
      backgroundImage: {
        'downloadImg': "url('./assets/')",
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}