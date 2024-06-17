/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor_black: '#09090B',
        customColor_yellow: '#FFC42B',
        customColor_white: '#FFFFFF',
      },
      height: {
        'custom-40': '40vh',
        'custom-50': '50vh',
        'custom-60': '60vh',
        'custom-70': '70vh',
        'custom-80': '80vh',
        'custom-90': '90vh',
        'custom-100': '100vh',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

