// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: true, // Enable all DaisyUI themes
    base: true,
    utils: true,
    logs: true,
  },
};
