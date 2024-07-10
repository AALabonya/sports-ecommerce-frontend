/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#454545",
        secondary: "#222222",
        tertiary: "#ffd8d4",
      },
    },
  },
  plugins: [],
};
