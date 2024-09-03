/* eslint-disable no-undef */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["PT Serif", "serif"],
      },

      keyframes: {
        bubble: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-20px)", opacity: "1" },
        },
      },
      animation: {
        bubble: "bubble 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
