/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
      colors:
      {
        primary: '#080a12',
        secondary: '#ff174d',
        neutral: '#f7f7ff',
        complementary: '#7c3cff',
        fill: '#14f1ff',
        par: '#121625',
        surface: '#101321',
        cyber: '#14f1ff',
        neon: '#b6ff00',
        muted: '#a9b3c9',
      },
      boxShadow: {
        glow: '0 0 28px rgba(20, 241, 255, 0.28)',
        violet: '0 0 36px rgba(124, 60, 255, 0.35)',
        danger: '0 0 26px rgba(255, 23, 77, 0.28)',
      },
      },
  },
  plugins: [],
}
