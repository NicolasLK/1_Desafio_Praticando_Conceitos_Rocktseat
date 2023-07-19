/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      product: {
        "blue-dark": "#1E6F9F",
        blue: "#4EA8DE",
        "purple-dark": "#5E60CE",
        purple: "#8284FA",
      },
      base: {
        "gray-700": "#0D0D0D",
        "gray-600": "#1A1A1A",
        "gray-500": "#262626",
        "gray-400": "#333333",
        "gray-300": "#808080",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
      },
      feedback: {
        danger: "#E25858",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      width: {
        640: "40rem",
        90: "5.625rem",
      },
      maxWidth: {
        736: "46rem",
      },
      height: {
        1024: "64rem",
        824: "51.5rem",
        200: "12.5rem",
        54: "3.375rem",
      },
      lineHeight: {
        140: "22.4px",
        52: "3.25rem",
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
      },
    },
  },
  plugins: [],
};
