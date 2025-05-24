/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1128', // Darkest navy
          800: '#1C2541',
          700: '#2E3A59',
          600: '#3D4B6E',
        },
        silver: {
          100: '#F7F7F9',
          200: '#E6E6EA',
          300: '#D5D5DB',
          400: '#C0C5C1',
          500: '#A5A9A6',
        },
        gold: {
          400: '#FFD700',
          500: '#FFC300',
        },
        accent: {
          blue: '#4361EE',
          purple: '#7209B7',
          pink: '#F72585',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'fadein': 'fadein 2s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
    },
  },
  plugins: [],
};