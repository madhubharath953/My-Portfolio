/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#0A0E17',
        surface: '#0F1420',
        line: 'rgba(255,255,255,0.08)',
        glass: 'rgba(255,255,255,0.03)',
        ink: '#E7E9EE',
        muted: '#8B93A7',
        violet: {
          400: '#8B7CFF',
          500: '#7C5CFF',
          600: '#6845F0',
        },
        cyan: {
          300: '#7DE8F5',
          400: '#3FD8ED',
          500: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'glow-violet':
          'radial-gradient(circle, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 70%)',
        'glow-cyan':
          'radial-gradient(circle, rgba(34,211,238,0.28) 0%, rgba(34,211,238,0) 70%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(124,92,255,0.25)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
