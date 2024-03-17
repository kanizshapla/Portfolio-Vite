/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
import react from "@vitejs/plugin-react";
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
};
