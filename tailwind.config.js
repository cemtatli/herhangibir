/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
      },
      colors: {
        "browser-dark": "rgba(61, 61, 61, 0.88)",
        "browser-light": "rgba(249, 249, 249, 0.94)",
        "browser-ui": "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
