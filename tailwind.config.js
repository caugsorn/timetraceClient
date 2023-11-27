module.exports = {
  content: ["../src/index.js", "./src/**/*.{html,js,jsx}"],
  theme: {
    letterSpacing: {
      decentlyWide: ".15em",
      superWide: ".25em",
    },
    // gridTemplateRows: {
    //   3: "repeat(3, 33%)",
    // },
    gridTemplateColumns: {
      3: "repeat(3, minmax(33%, 33%))",
      2: "repeat(2, 50%)",
    },
    colors: {
      purple: "#9381FF",
      lavender: "#CEC4FC",
      white: "#F8F7FF",
      gray: "#E8EDF1",
      black: "#191944",
      silver: "#A3AED0",
      red: "#BF0A30"
    },
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [require("daisyui")],
};
