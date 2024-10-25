/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        500: "160px",
        400: "120px",
        300: "80px",
        200: "40px",
        100: "32px",
        50: "24px",
        16: "16px",
        10: "10px",
        8: "8px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "preset-1": ["54px", { lineHeight: "125%", letterSpacing: "0px" }],
        "preset-2": ["24px", { lineHeight: "125%", letterSpacing: "0px" }],
        "preset-3": ["18px", { lineHeight: "125%", letterSpacing: "0px" }],
        "preset-4": ["16px", { lineHeight: "140%", letterSpacing: "0px" }],
      },
      colors: {
        lime: {
          DEFAULT: "#B6D82F",
        },
        slate: {
          900: "#133041",
          700: "#4E667E",
          500: "#6894A8",
          300: "#9ABED5",
          100: "#E6F4FD",
        },
        white: "#FFF",
        red: {
          DEFAULT: "#D73228",
        },
      },
    },
  },
  plugins: [],
};
