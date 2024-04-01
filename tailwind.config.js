/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    colors: {
      white: '#e6f1ff',
      'white-dark': '#8892b0',
      'light-slate': '#ccd6f6',
      black: '#000',
      'black-light': 'rgba(0, 0, 0, 0.6)',
      'light-black2': '#121212',
      'green-primary': '#64ffda',
      'navy-primary': '#0a192f',
      'navy-secondary': '#233554',
      accent: '#D96666'
    }
  },
  plugins: []
};
