/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#015788",
        black: "#1E2022",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
      },
      fontFamily: {
        "quicksand": ["Quicksand-Regular"],
        "quicksand-medium": ["Quicksand-Medium"],
        "quicksand-bold": ["Quicksand-Bold"],
        "quicksand-extrabold": ["Quicksand-ExtraBold"],
      },
    },
  },
  plugins: [],
};

