/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C9BCF',
        danger: '#FF0060',
        success: '#1B9C85',
        warning: '#F7D060',
        white: '#fff',
        infoDark: '#7d8da1',
        dark: '#363949',
        light: 'rgb(132 139 200 / 0.18)',
        darkVariant: '#677483',
        background: '#f6f6f9',
      },
      boxShadow: {
        '3xl': '0 2rem 3rem rgb(132 139 200 / 0.18)',
      }
    },
  },
  plugins: [],
}