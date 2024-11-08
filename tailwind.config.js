/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    animation: {
      'preloader-line': 'preloaderGlow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'
    },
    keyframes: {
      preloaderGlow: {
        '0%': {
          transform: 'scaleX(0.7)',
          boxShadow: '0 0 10px rgba(173, 20, 87, 0.6)',
        },
        '50%': {
          transform: 'scaleX(1)',
          boxShadow: '0 0 30px rgba(173, 20, 87, 0.8)',
        },
        '100%': {
          transform: 'scaleX(0.7)',
          boxShadow: '0 0 10px rgba(173, 20, 87, 0.6)',
        },
      },
    },
    extend: {
      colors: {
        'dark': {
          50: '#E0E0E0',
          100: '#B3B3B3',
          200: '#808080',
          300: '#4D4D4D',
          400: '#3B3B3B',
          DEFAULT: '#303030', // main
          600: '#262626',
          700: '#1F1F1F',
          800: '#1A1A1A',
          900: '#141414'
        },
        'light': {
          50: '#FFFFFF',
          DEFAULT: '#F5F5F5', // main
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#D6D6D6',
          500: '#CFCFCF',
          600: '#B0B0B0',
          700: '#A0A0A0',
          800: '#909090',
          900: '#808080'
        },
        'accent': {
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          DEFAULT: '#D81B60', // main
          400: '#C2185B',
          500: '#AD1457',
          600: '#880E4F',
          700: '#720E4C',
          800: '#5B0B3B',
          900: '#4A0A30'
        },
      },
    },
  },
  plugins: [],
}

