import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F2EFE3',
        ink: {
          DEFAULT: '#171717',
          soft: '#3A3628',
          muted: '#73705F',
        },
        accent: {
          DEFAULT: '#E9B638',
          ink: '#171717',
        },
        cream: {
          50: '#FAF9F2',
          100: '#F2EFE3',
          200: '#E8E3D2',
          300: '#D8D1BA',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fragment Mono"', '"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
    },
  },
  plugins: [],
} satisfies Config;