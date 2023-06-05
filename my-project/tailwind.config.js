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
      black: '#000913',
      blue: '#00C4E7',
      boldBlue: '#00afb6',
      darkBlue: '#00678D',
      darkGreen: '#002A2A',
      lightGray: 'rgba(176, 176, 176, 0.2)',
      gray: '#b6b6b6',
      green: '#3CCF4E',
      white: '#f1f1f1',
      yellow: '#e2ff7e',
    },
    extend: {},
  },
  plugins: [],
};
