/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "1/4": "25%",
        "3/4": "75%",
      },
      colors: {
        white: "#ffffff",
      },
      backgroundColor: {
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
