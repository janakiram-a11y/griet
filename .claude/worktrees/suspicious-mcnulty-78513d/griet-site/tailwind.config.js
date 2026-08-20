/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'pt-serif': ['"PT Serif"', 'serif'],
      },
      colors: {
        brand: {
          primary: '#5B1027',
          'primary-dark': '#3d0919',
          'primary-darkest': '#2d0714',
          highlight: '#C32033',
          'highlight-dark': '#a01c28',
          dark: '#222222',
          neutral: '#BFBFBF',
          soft: '#F3DAB2',
        },
      },
    },
  },
  plugins: [],
};
