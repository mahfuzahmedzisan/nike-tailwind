/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      '2md': '992px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        'Inter': ["Inter", "sans-serif"],
        'Spectral': ["Spectral", "serif"],
        'FontAwesome':["fontawesome"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'bg-primary': '#F6F6F6',
        'bg-secondary': '#f5f5f5',
        'bg-tertiary': '#E5E5E5',
        
        'text-primary': '#111111',
        'text-secondary': '#707072',
      },
      animation: {
        'menuShow': 'menu 0.2s linear forwards',
        'menuHide': 'menu 0.5s linear reverse forwards',
      },
      keyframes: {
        menu: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}