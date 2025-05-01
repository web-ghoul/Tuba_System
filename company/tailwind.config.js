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
        primary_light: "#EFEDFD",
        primary_bg: "#F3F5F9",
        counter_card_red: "rgba(255, 40, 40, 1)",
        counter_card_red_light: "rgba(255, 240, 240, 1)",
        counter_card_cyan: "rgba(42, 210, 197, 1)",
        counter_card_cyan_light: "rgba(234, 251, 249, 1)",
        counter_card_purple: "rgba(90, 70, 230, 1)",
        counter_card_purple_light: "rgba(239, 237, 253, 1)",
        counter_card_green: "rgba(30, 201, 64, 1)",
        counter_card_green_light: "rgba(240, 253, 242, 1)",
        available_balance_card: "#EFEDFD",
        required_balance_card: "#CEC8F8",
        remain_balance_card: "#EAFBF9",
        balance_card_text: "#999",
        table_head: "rgba(250, 250, 250, 1)",
        profile_employees_counter: "rgba(130, 128, 255, 1)",
        profile_employees_counter_light: "rgba(210, 246, 243, 1)",
        profile_employees_counter_gray: "rgba(250, 250, 250, 1)",
        profile_employees_counter_text_gray: "#636466",
        table_border:"#E6E6E6",
        text_label:"#4D4D4D",
        tuba_gray: "#82808D",
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
        gradient_primary_reverse:
          "linear-gradient(90deg,#5a46e6 20% ,#2ad2c5 100%)",
      },
    },
  },
  plugins: [],
};
