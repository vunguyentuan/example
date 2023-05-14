const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "pages/**/*.{ts,tsx}",
    "stories/**/*.{ts,tsx}",
    "index.html",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      current: "currentColor",
      transparent: "transparent",
      primary: {
        100: "#ECE6FB",
        200: "#C7B6F3",
        300: "#A386EC",
        400: "#7E55E4",
        500: "#5925DC",
        600: "#491DB6",
        700: "#39178E",
      },
      secondary: {
        100: "#EBF1FF",
        200: "#D3E2FF",
        300: "#99BBFF",
        400: "#70A0FF",
        500: "#1F69FF",
        600: "#004FF0",
        700: "#0040C2",
      },
      gray: {
        100: "#F7F7F9",
        200: "#E4E7EC",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#344054",
        700: "#1D2939",
      },
      blue: {
        100: "#E2EFF8",
        400: "#58A1D4",
        600: "#0F71BB",
      },
      amber: {
        100: "#FFFAEB",
        400: "#FEC84B",
        600: "#F79009",
      },
      green: {
        100: "#ECFBEE",
        400: "#58BE62",
        600: "#0A8217",
      },
      red: {
        100: "#FFF4F3",
        400: "#FB7463",
        600: "#D7260F",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-right": {
          from: { transform: "translateX(-1000px)" },
          to: { transform: "translateX(0px)" },
        },
        slide: {
          from: {
            transform: "var(--origin)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-right": "slide-right 0.2s ease-out",
        slide: "slide 200ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
