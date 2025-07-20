/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        gold: 'var(--gold)',
        'gold-dark': 'var(--gold-dark)',
      },
      fontFamily: {
        sans: ['Merriweather', 'sans-serif'],
        heading: ['Special Elite', 'cursive'],
      },
    },
  },
  plugins: [],
}
