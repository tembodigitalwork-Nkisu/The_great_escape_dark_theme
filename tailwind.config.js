/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0c0c0c",
          900: "#161616",
          800: "#1f1f1f",
          700: "#2a2a2a",
        },
        cream: {
          50: "#fffdf3",
          100: "#fef9e0",
        },
        escape: {
          yellow: "#FCD400",
          red: "#EE1C25",
          blue: "#1B47DC",
          blueDeep: "#0F2EA0",
          green: "#28B845",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Dark offset — for use on yellow / cream / colour-block surfaces
        // where a black drop reads as a chiselled comic outline.
        pop: "0 6px 0 0 #0c0c0c",
        popSm: "0 4px 0 0 #0c0c0c",
        // Light offset — for use on dark surfaces where a black drop would
        // disappear into the page.
        popLight: "0 6px 0 0 #fffdf3",
        popLightSm: "0 4px 0 0 #fffdf3",
        // Yellow glow for highlighted dark cards.
        glow: "0 0 28px rgba(252, 212, 0, 0.35)",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        bob: "bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
