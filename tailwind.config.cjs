/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-scale-placeholder": "#888888",
        "gray-scale-body": "#333333",
        "gray-scale-label": "#555555",
        primary: "#DD8560",
      },
      fontFamily: {
        tenor: ["Tenor Sans"],
      },
      lineHeight: {
        345: "34.5px",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  important: true,
};
