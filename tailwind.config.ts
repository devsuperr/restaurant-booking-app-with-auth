import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff5ed',
          100: '#ffe7d2',
          200: '#ffcaa4',
          300: '#ffa56c',
          400: '#ff7a3a',
          500: '#ff5417',
          600: '#ed3a0c',
          700: '#c5290c',
          800: '#9c2412',
          900: '#7e2113',
          950: '#440c06',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e2e3e6',
          200: '#c5c6cd',
          300: '#9c9eaa',
          400: '#717381',
          500: '#565867',
          600: '#3f4150',
          700: '#2d2f3a',
          800: '#1c1d25',
          900: '#0f1015',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(237, 58, 12, 0.18)',
        card: '0 1px 2px rgba(15,16,21,0.04), 0 8px 24px -12px rgba(15,16,21,0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config;