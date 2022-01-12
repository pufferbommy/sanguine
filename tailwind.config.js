module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true, // important in prod is must be
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
}
