import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}', // Adjusted for standard pages dir, might need update if using app dir heavily
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}', // Include app directory
    ],
    theme: {
        extend: {
            colors: {
                'hot-pink': '#FF1493',
                'neon-green': '#39FF14',
                'cyber-blue': '#00FFFF',
                'bright-orange': '#FF4500',
                'electric-yellow': '#FFD700',
                'retro-purple': '#8A2BE2',
            },
            fontFamily: {
                pixel: ['"Press Start 2P"', 'cursive'],
                mono: ['"Space Mono"', 'monospace'], // Overrides default mono
            },
            boxShadow: {
                glow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(57, 255, 20, 0.4)',
                'retro-card': '0 0 15px rgba(57, 255, 20, 0.5), 0 0 30px rgba(0, 255, 255, 0.3)',
                'pulse-border-0': '0 0 10px rgba(0, 255, 255, 0.7)',
                'pulse-border-50': '0 0 15px rgba(57, 255, 20, 0.7)',
                'pulse-border-100': '0 0 10px rgba(255, 20, 147, 0.7)',
            },
            backgroundImage: {
                'bghd': "url('/img/bghd.png')", // If needed as utility
            },
            // Add keyframes and animations if needed here, or keep in CSS
        },
    },
    plugins: [],
};
export default config; 