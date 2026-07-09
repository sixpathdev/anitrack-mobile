/** @type {import('tailwindcss').Config} */
module.exports = {
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
        logo: ["Outfit_800ExtraBold"],
        heading: ["PlusJakartaSans_700Bold"],
        subheading: ["PlusJakartaSans_600SemiBold"],
        body: ["Inter_400Regular"],
        medium: ["Inter_500Medium"],
      },
    },
  },
  plugins: [],
};
