/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    padding: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    "tailwindcss-children",
    "prettier-plugin-svelte",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
};
