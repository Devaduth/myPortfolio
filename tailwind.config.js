/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#121212',
          secondary: '#1a1a1a',
          tertiary: '#222222'
        },
        primary: {
          DEFAULT: '#7928CA',
          hover: '#9046E0'
        },
        secondary: {
          DEFAULT: '#FF0080',
          hover: '#FF339D'
        },
        accent: {
          DEFAULT: '#00CFFD',
          hover: '#33D9FD'
        },
        text: {
          DEFAULT: '#FFFFFF',
          secondary: '#AAAAAA',
          tertiary: '#777777'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-slow': 'gradient 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};