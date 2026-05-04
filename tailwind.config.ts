import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        garden: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        soil: {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f4dcb0',
          300: '#ecc47c',
          400: '#e2a445',
          500: '#d4861e',
          600: '#b86814',
          700: '#994f12',
          800: '#7d3f14',
          900: '#673414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;