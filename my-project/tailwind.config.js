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
      blue: '#33bae9',
      darkBlue: '#183861',
      gray: '#EEEEEE',
      white: '#ffffff',
      yellow: '#ffd22a',
    },
    extend: {},
  },
  plugins: [],
};
