/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      keyframes: {
        bgMoveBot: {
          "0%": { backgroundPosition: "0% 100%" },
        },
        bgMoveTop: {
          "0%": { backgroundPosition: "0% 0%" },
        },
      },
      colors: {
        violetPrimary: "#8A368E",
      },
    },
  },
  plugins: [],
};
