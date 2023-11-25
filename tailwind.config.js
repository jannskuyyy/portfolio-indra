/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D033B",
        secondary: "#F2F2F2",
        third: "#810CA8",
      },
    },
  },
  plugins: [],
};
