/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ruby: {
          50:  '#fff1f2',
          100: '#ffe0e2',
          200: '#ffc5c8',
          300: '#ff9aa0',
          400: '#ff5f68',
          500: '#f83c46',
          600: '#e51c27',
          700: '#c1121c',
          800: '#9f131b',
          900: '#83161e',
          950: '#47060a',
        },
        gold: {
          50:  '#fefdf2',
          100: '#fdfbe3',
          200: '#faf4c5',
          300: '#f6e79b',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        navy: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          800: '#1e2a3a',
          900: '#0f1923',
          950: '#05090e',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'premium-glow': '0 0 25px -5px rgba(193, 18, 28, 0.4)',
        'gold-glow': '0 0 25px -5px rgba(217, 119, 6, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

