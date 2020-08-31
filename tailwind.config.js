const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./components/**/*.ts",
    "./pages/**/*.ts",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      heavy: ["Inter", "Graphik", "sans-serif"],
      ...defaultTheme.fontFamily,
    },
    extend: {
      colors: {
        polablue: "#07668C",
        polared: "#D90404",
        polayellow: "#F2B705",
        polaorange: "#F29F05",
        polawhite: "#F2F2F0",
        "wld-1": "#f8f8f8",
        "wld-2": "#A6A6A6",
        "wld-3": "#595959",
        "wld-4": "#262626",
        "wld-5": "#0D0D0D",
      },
    },
    inset: {
      1: "1rem",
      ...defaultTheme.inset,
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};

// display: [
//   "-apple-system",
//   "BlinkMacSystemFont",
//   "'Segoe UI'",
//   "Roboto",
//   "Oxygen",
//   "Ubuntu",
//   "Cantarell",
//   "'Fira Sans'",
//   "'Droid Sans'",
//   "'Helvetica Neue'",
//   "sans-serif",
// ],
