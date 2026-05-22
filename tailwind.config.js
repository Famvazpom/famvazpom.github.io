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
        secondary: '#b91c1c',
        neutral: '#f7f7ff',
        complementary: '#7c3cff',
        fill: '#ef4444',
        par: '#121625',
        surface: '#101321',
        cyber: '#ef4444',
        neon: '#b6ff00',
        muted: '#a9b3c9',
      },
      boxShadow: {
        glow: 'none',
        violet: 'none',
        danger: 'none',
      },
      },
  },
  plugins: [],
}
