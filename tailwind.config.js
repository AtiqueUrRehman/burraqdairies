const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./{components,pages}/**/*.{js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
