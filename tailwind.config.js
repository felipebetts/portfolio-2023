/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: 'var(--color-primary-100)',
        dark: 'var(--color-primary-500)'
      }
    }
  },
  plugins: []
}
