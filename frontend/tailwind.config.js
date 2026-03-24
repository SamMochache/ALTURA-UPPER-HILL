
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        altura: {
          black: '#0A0A0A',
          charcoal: '#111111',
          surface: '#1A1A1A',
          card: '#1E1E1E',
          gold: '#C9A96E',
          'gold-dark': '#B8924C',
          'gold-light': '#D4B87A',
          white: '#FAFAF9',
          warm: '#E8E4DF',
          muted: '#8A8A8A',
          border: '#2A2A2A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      }
    },
  },
  plugins: [],
}
