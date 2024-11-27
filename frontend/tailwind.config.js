/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueShadeado: `#1B2631`,
        darkBlue: `#0d0e0f`,
      },
    },
  },
  plugins: [],
};
