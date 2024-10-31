/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          dark: '#3b82f6',
        },
        background: {
          light: '#ffffff',
          dark: '#1e293b',
        },
        text: {
          light: '#1e293b',
          dark: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}

