/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(18, 194, 233, 0.7), rgba(196, 113, 237, 0.7), rgba(246, 79, 89, 0.7))",
      },
    },
  },
  plugins: [],
};
