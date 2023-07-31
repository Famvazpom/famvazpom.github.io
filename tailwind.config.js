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
          primary: '#2e3532',
          secondary: '#a41623',
          neutral: '#f7f7ff',
          complementary: '#3626a7',
          fill: '#657ed4',
        },
      },
  },
  plugins: [],
}

