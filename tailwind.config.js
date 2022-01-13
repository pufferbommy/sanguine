module.exports = {
  important: true, // important in prod is must be
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
}
