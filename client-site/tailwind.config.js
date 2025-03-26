import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chewy: ['"Allerta Stencil"', "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
