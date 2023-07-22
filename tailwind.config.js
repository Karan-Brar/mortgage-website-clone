/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        franklin: ["Libre Franklin", "sans-serif"],
      },
      screens: {
        'xs': '345px',
      },
      colors: {
        blue: {
          100: "#99CCFF",
          200: "#007FFF",
        },
        red: {
          100: "#FF9966",
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out",
        // "fade-in-from-side": "fadeInFromSide 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          // "0%": { opacity: "0", transform: "translateX(-20px)" }, // Starting position and opacity
          // "100%": { opacity: "1", transform: "translateX(0)" },
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
