/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '80%': {
            transform: 'scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      colors: {
        dark: '#101014',
        grayish: '#1a1a1e',
      },
      blur: {
        '3xl': '60px',
      },
    },
  },
  plugins: [],
}
  