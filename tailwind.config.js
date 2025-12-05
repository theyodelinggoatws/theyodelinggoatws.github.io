/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rustic: {
          50: '#faf7f2',
          100: '#f5ede0',
          200: '#e8d4b8',
          300: '#d9b88a',
          400: '#c8965f',
          500: '#b87d4a',
          600: '#a8663d',
          700: '#8b5134',
          800: '#714330',
          900: '#5d3829',
        },
        terracotta: {
          50: '#fef5f2',
          100: '#fde8e0',
          200: '#fbd5c8',
          300: '#f7b6a3',
          400: '#f28d6e',
          500: '#ed6b47',
          600: '#de4f2a',
          700: '#ba3d1f',
          800: '#99351d',
          900: '#7d311d',
        },
        sage: {
          50: '#f6f7f4',
          100: '#eaede4',
          200: '#d5dcc9',
          300: '#b8c4a5',
          400: '#9aa87f',
          500: '#7d8b63',
          600: '#636f4f',
          700: '#4f5842',
          800: '#424938',
          900: '#393e32',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

