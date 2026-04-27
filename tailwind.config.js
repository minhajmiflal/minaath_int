/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#071326',
        tealdeep: '#0D3B4B',
        slatebrand: '#2A3E63',
        graphite: '#1C2637',
        pearl: '#EEF2F7',
        silver: '#A5B2C7',
        champagne: '#C9AE7B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 14px 45px rgba(6, 20, 38, 0.36)',
      },
    },
  },
  plugins: [],
};
