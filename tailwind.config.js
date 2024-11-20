/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
      },
      colors: {
        primaryColor: '#6A4DF4',
        heroOverlay: '#0000009e',
        counterBg: '#E0FFF9',
        iconColor: '#F9BD2C',
        quoteIconColor: '#694df466',
        reviewHoverColor: '#F4EFEF',
        1515: '#151515',
        2323: '#232323',
        7373: '#737373',
        F3F3: '#F3F3F3',
        B7B7: '#7B7B7B',
      },
      backgroundImage: {
        heroBackground: "url('/src/assets/images/hero-background.png')",
      },
      boxShadow: {
        '3xl': '0 0 10px 2px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}