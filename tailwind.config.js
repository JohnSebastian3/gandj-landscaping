/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        moss: "#8d9b77",
        slate: "#e3e1df",
        wood : "#4A442D",
        sand: "#DCD6C8",
        green: "#688B58",
        "light-gray": "#bdbcb1",
        "dark-green": "#25241a"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        nanumgothic: ["Nanum Gothic", "sans-serif"],
      },
      content: {
        landinghero: "url('./assets/hero.jpg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1480px",
    },
  },
  plugins: [],
};
