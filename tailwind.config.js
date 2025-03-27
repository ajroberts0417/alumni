/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#FF1493',
        'neon-green': '#39FF14',
        'cyber-blue': '#00FFFF',
        'bright-orange': '#FF4500',
        'electric-yellow': '#FFD700',
        'retro-purple': '#8A2BE2',
        'midnight': '#121224',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'mono': ['Space Mono', 'monospace'],
        'pixel': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      textShadow: {
        'glow': '0 0 5px currentColor',
        'neon': '0 0 5px #fff, 0 0 10px currentColor, 0 0 15px currentColor',
        'retro': '2px 2px 0px #000',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          'text-shadow': '0 0 5px currentColor',
        },
        '.text-shadow-neon': {
          'text-shadow': '0 0 5px #fff, 0 0 10px currentColor, 0 0 15px currentColor',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};