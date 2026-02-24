/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'purple': '#7b2ff7',
        'pink': '#ff4ecd',
        'violet': '#a855f7',
        'lavender': '#c084fc',
        'soft-pink': '#fce7f3',
        'soft-purple': '#f3e8ff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #ffffff 0%, #fce7f3 25%, #f3e8ff 50%, #e9d5ff 75%, #ffffff 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #7b2ff7 0%, #ff4ecd 50%, #a855f7 100%)',
        'gradient-glow': 'linear-gradient(135deg, rgba(123, 47, 247, 0.1) 0%, rgba(255, 78, 205, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'ripple': 'ripple 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(123, 47, 247, 0.5), 0 0 20px rgba(123, 47, 247, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(123, 47, 247, 0.8), 0 0 40px rgba(255, 78, 205, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(123, 47, 247, 0.4), 0 0 40px rgba(123, 47, 247, 0.2)',
        'glow-pink': '0 0 20px rgba(255, 78, 205, 0.4), 0 0 40px rgba(255, 78, 205, 0.2)',
        'soft': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

