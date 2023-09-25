/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-white": "var(--pure-white)",
        "text-black": "var(--text-black)",
      },
    },
  },
  plugins: [],
};
