/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Warm-tinted slate overrides for M3 on-surface feel */
        slate: {
          900: "#1e1b2e",
          800: "#2d2943",
        },
        /* M3 color tokens as Tailwind utilities */
        md: {
          primary:           "#7c3aed",
          secondary:         "#c55ea2",
          surface:           "#fffbfe",
          "surface-low":     "#f7f2fe",
          "surface-med":     "#f1ecfd",
          "surface-high":    "#ece6f8",
          "surface-highest": "#e6e0f2",
          outline:           "#79747e",
          "outline-var":     "#cac4d0",
          "on-surface":      "#1e1b2e",
          "on-surface-var":  "#49454f",
        },
      },
      fontFamily: {
        sans:    ['"Google Sans Text"', '"DM Sans"', "sans-serif"],
        display: ['"Google Sans Display"', '"DM Sans"', "sans-serif"],
        heading: ['"Google Sans"', '"DM Sans"', "sans-serif"],
      },
      borderRadius: {
        /* M3 shape scale */
        "m3-xs": "4px",
        "m3-sm": "8px",
        "m3-md": "12px",
        "m3-lg": "16px",
        "m3-xl": "28px",
      },
      boxShadow: {
        "m3-1": "0px 1px 2px rgba(0,0,0,0.30), 0px 1px 3px 1px rgba(0,0,0,0.15)",
        "m3-2": "0px 1px 2px rgba(0,0,0,0.30), 0px 2px 6px 2px rgba(0,0,0,0.15)",
        "m3-3": "0px 4px 8px 3px rgba(0,0,0,0.15), 0px 1px 3px rgba(0,0,0,0.30)",
      },
      transitionTimingFunction: {
        "m3-standard":   "cubic-bezier(0.2,0,0,1)",
        "m3-decelerate": "cubic-bezier(0,0,0,1)",
        "m3-accelerate": "cubic-bezier(0.3,0,1,1)",
      },
    },
  },
  plugins: [],
};
