import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rosegold: '#B76E79',
        beige: '#EEDDCB',
        offwhite: '#FAF7F2',
        mutedbrown: '#8B6F61',
        charcoal: '#2F2F2F',
        pastelpink: '#F7D9E3'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(183,110,121,0.15)'
      }
    }
  },
  plugins: []
} satisfies Config;
