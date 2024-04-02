/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serif: "Cinzel Decorative",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
