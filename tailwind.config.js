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
      colors: {
        blue: {
          100: "#73C2FB",
          200: "#007FFF",
        },
        red: {
          100: "#FF9966",
        },
      },
    },
  },
  plugins: [],
};
