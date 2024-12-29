/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ae2f64',
        secondary: '#f9b658',
      },
    },
  },
  plugins: [],
};
