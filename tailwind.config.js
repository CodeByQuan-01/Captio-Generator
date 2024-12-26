module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // blue-500
        secondary: '#10B981', // emerald-500
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

