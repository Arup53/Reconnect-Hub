const flowbite = require("flowbite-react/tailwind");

import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [daisyui, flowbite.plugin()],
  daisyui: {
    themes: ["light", "dark"], // add more if you like
  },
};
