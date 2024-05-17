/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "1/4": "15%",
        "3/4": "85%",
        "4/4": "100%",
        "6/10": "60%",
      },
      width: {
        "1/5": "35%",
        "2/5": "65%",
        "1/2": "50%",
        "3/5": "25%",
      },
      colors: {
        color0: "rgb(232, 230, 230)",
        color1: "rgb(190, 209, 184)",
        color2: "rgb(239, 244, 245)",
        color3: "#fff8e6",
        color4: "#fffcf3",
        color5: "#ffffff",
        color6: "#141414",
        color7: "#131010",
        color8: "#3B3B3B",
        color9: "#585858",
        color10: "#03866A",
      },
      backgroundColor: {
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
