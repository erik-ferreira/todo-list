/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: {
          normal: "#4EA8DE",
          dark: "#1E6F9F",
        },

        purple: {
          normal: "#8284FA",
          dark: "#5E60CE",
        },

        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },

        danger: {
          300: "#E25858",
        },
      },
      fontFamily: {
        "inter-regular": "Inter_400Regular",
        "inter-bold": "Inter_700Bold",
      },
    },
  },
  plugins: [],
}
