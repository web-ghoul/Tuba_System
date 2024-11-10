/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '560px' },
        sm: { max: '768px' },
        md: { max: '992px' },
        lg: { max: '1200px' },
        xl: { max: '1440px' },
        '2xl': { max: '1560px' },
      },
      colors: {
        primary: '#5643E1',
      },
      fontFamily: {
        elmessiri: ['El Messiri', 'sans-serif'],
      },
      backgroundImage: {
        gradient_primary: 'linear-gradient(90deg,#2ad2c5 20% ,#5a46e6 100%)',
      },
    },
  },
  plugins: [],
};
