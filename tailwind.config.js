/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'desktop': {'min': '1600px'},
      // => @media (min-width: 1600px) { ... }

      'large_laptop': {'min': '1201px', 'max': '1599px'},
      'laptop': {'min': '769px', 'max': '1200px'},
      'tablet': {'min': '476px', 'max': '768px'},
      'mobile': {'min': '375px','max': '475px'},
    },
  },
  plugins: [],
}