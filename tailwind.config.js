/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(0,212,255,1) 7%, rgba(9,9,121,1) 50%, rgba(9,9,121,1) 94%)',
      },
      height: {
        'screen': '100vh',
      },
    },
  },
  plugins: [],
};
