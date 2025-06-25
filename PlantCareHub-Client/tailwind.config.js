/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nature-green': '#4F8A10',
        'nature-light': '#A8D5BA',
        'nature-dark': '#285430',
        'nature-brown': '#8D6748',
        'nature-beige': '#F5F5DC',
        'nature-sky': '#B7E5DD',
      },
    },
  },
  plugins: [],
}
