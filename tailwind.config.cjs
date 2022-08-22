/** @type {import('tailwindcss').Config} */

const safelist = [
  "red",
  "blue",
  "pink",
  "gray",
  "emerald",
  "green",
  "yellow",
  "cyan",
].map((color) => `group-hover:text-${color}-400`);

module.exports = {
  safelist,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        head: ["Sora", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
