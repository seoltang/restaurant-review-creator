const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      gray: colors.stone,
      tomato: "#e56353",
      coral: "#fa8f82",
      peach: "#ffcdc7",
    },

    fontFamily: {
      title: "PyeongChangPeace-Bold",
    },

    transitionProperty: {
      box: "margin, padding, border, height",
    },
  },
};
