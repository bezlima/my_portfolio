/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#171717',
        'brown': '#795548',
        'white': '#FFFFFF'
      },
      fontSize: {
        xl: '3.3rem', // 52px
        lg : '2.2rem', // 35px
        md: '1.5rem', // 24px
        sm : '0.9rem', // 14px
      },
      height: {
        '90': '90%'
      },
      keyframes: {
        'shake-right': {
          '0%, 100%': {
            transform: 'rotate(0deg)',
            transformOrigin: '100% 50%'
          },
          '10%': {
            transform: 'rotate(6deg)'
          },
          '20%, 40%, 60%': {
            transform: 'rotate(-8deg)'
          },
          '30%, 50%, 70%': {
            transform: 'rotate(8deg)'
          },
          '80%': {
            transform: 'rotate(-6deg)'
          },
          '90%': {
            transform: 'rotate(6deg)'
          }
        },
        'shake-left': {
          '0%, 100%' : {
            transform: 'rotate(0deg)',
            transformOrigin: '0 50%'
          },
          '10%' : {
            transform: 'rotate(6deg)'
          },
          '20%, 40%, 60% ' : {
            transform: 'rotate(-8deg)'
          },
          '30%, 50%, 70%' : {
            transform: 'rotate(8deg)'
          },
          '80%' : {
            transform: 'rotate(-6deg)'
          },
          '90%' : {
            transform: 'rotate(6deg)'
          }
        }
      },
      animation: {
        'shake-right': 'shake-right 3s linear infinite both',
        'shake-left' : 'shake-left 3s linear infinite both'
      },
    },
  },
  plugins: [],
}
