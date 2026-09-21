/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ice: '#F7F7F7',
          black: '#2C2C2C',
          red: '#E32227',
          gray: {
            100: '#F7F7F7',
            300: '#C9C9C9',
            500: '#9B9B9B',
            700: '#6B6B6B',
            900: '#2C2C2C',
          }
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
