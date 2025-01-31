import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#E7C8B4",
        darkBrown: "rgb(76,43,22)",
        mediumBrown: "rgb(122,57,22)",
        lightYellow: "rgb(225,173,61)",
        darkYellow: "rgb(138,103,35)",
        lightBrown: "rgb(132,46,32)",
        white: "#fff",
        dark: "#000",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      animation: {
        marquee: "marquee 15s linear infinite", // Marquee animation for scrolling
        bounceScroll: "bounceScroll 15s ease-in-out infinite", // Continuous scrolling with bounce effect
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Start off-screen right
          "100%": { transform: "translateX(-100%)" }, // End off-screen left
        },
        bounceScroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "10%": {
            transform: "translateX(0)", // Stay in place for 1 second (slow phase)
          },
          "20%": {
            transform: "translateX(-10px)", // Small slide-in "bounce"
          },
          "40%": {
            transform: "translateX(5px)", // Quick overshoot for bounce effect
          },
          "60%": {
            transform: "translateX(-3px)", // Slight back for natural bounce
          },
          "80%": {
            transform: "translateX(0)", // Settle back to the final position
          },
          "100%": {
            transform: "translateX(-100%)", // Scroll to the next slide
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
