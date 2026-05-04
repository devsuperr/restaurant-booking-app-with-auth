import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          soft: '#1A1A1D',
          muted: '#5A5A63',
        },
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          soft: '#EEF0FF',
        },
        canvas: '#FFFFFF',
        line: '#ECECEF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Geist"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,10,11,0.04), 0 8px 24px -12px rgba(10,10,11,0.08)',
        cardHover: '0 1px 2px rgba(10,10,11,0.06), 0 16px 40px -12px rgba(10,10,11,0.18)',
        glow: '0 20px 60px -20px rgba(79,70,229,0.45)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;