import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-card': '#1a1a1a',
        'accent-3d': '#00D9FF',
        'accent-video': '#FF6B6B',
        'accent-animation': '#9B59B6',
      },
      backgroundImage: {
        'gradient-3d': 'linear-gradient(135deg, #00D9FF, #0066FF)',
        'gradient-video': 'linear-gradient(135deg, #FF6B6B, #FF9F43)',
        'gradient-animation': 'linear-gradient(135deg, #9B59B6, #E91E63)',
      },
    },
  },
  plugins: [],
};

export default config;
