import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sb-black':        'var(--color-black)',
        'sb-surface':      'var(--color-surface)',
        'sb-surface-2':    'var(--color-surface-2)',
        'sb-accent':       'var(--color-accent)',
        'sb-accent-light': 'var(--color-accent-light)',
        'sb-text':         'var(--color-text)',
        'sb-text-muted':   'var(--color-text-muted)',
        'sb-text-dim':     'var(--color-text-dim)',
        'sb-border':       'var(--color-border)',
        'sb-border-light': 'var(--color-border-light)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.375rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 30% 60%, #2A2520 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, #1E1C18 0%, transparent 40%), linear-gradient(160deg, #0B0B09 0%, #1C1A16 40%, #141210 70%, #0B0B09 100%)',
      },
    },
  },
  plugins: [],
}

export default config
