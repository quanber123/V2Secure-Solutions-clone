/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1368px',
      xxl: '1440px',
    },
    colors: {
      black: '#000000',
      blue: '#88fee7',
      darkBlue: '#183861',
<<<<<<< HEAD
      darkGreen: '#000913',
      lightGreen: '#5a8488',
      green: '#e2ff7e',
      gray: '#b6b6b6',
      white: '#f1f1f1',
=======
      darkGray: '#00000099',
      gray: '#EEEEEE',
      white: '#ffffff',
>>>>>>> 754f6ac478704b41a5c6fba11ca976c5ce3b848e
      yellow: '#ffd22a',
    },
    extend: {},
  },
  plugins: [],
};
