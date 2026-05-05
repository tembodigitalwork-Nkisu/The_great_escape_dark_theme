/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — pulled from the Great Escape promo posters.
        ink: {
          950: "#0c0c0c",
          900: "#141414",
          800: "#1f1f1f",
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
          orange: "#FF7A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pop: "0 6px 0 0 #0c0c0c",
        popSm: "0 4px 0 0 #0c0c0c",
        glow: "0 0 24px rgba(252, 212, 0, 0.45)",
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
