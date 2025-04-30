/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "560px" },
        sm: { max: "768px" },
        md: { max: "992px" },
        lg: { max: "1200px" },
        xl: { max: "1440px" },
        "2xl": { max: "1560px" },
      },
      colors: {
        primary: "#5643E1",
        primary_light:"#EFEDFD",
        primary_bg: "#F3F5F9",
        tuba_gray:"#82808D"
      },
      boxShadow: {
        primary:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
      },
      fontFamily: {
        elmessiri: ["El Messiri", "sans-serif"],
      },
      backgroundImage: {
        gradient_primary: "linear-gradient(90deg,#2ad2c5 20% ,#5a46e6 100%)",
        gradient_primary_reverse: "linear-gradient(90deg,#5a46e6 20% ,#2ad2c5 100%)",
      },
    },
  },
  plugins: [],
};
