/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ms: "320px",

      mm: "375px",

      ml: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        Villo: {
          dark: {
            primary: "#858ee0",

            secondary: "#571dff",

            black: "#161618",
            black85: "#2e2f34",
            black75: "#383844",
            black50: "#48485b",

            white: "#fbfbfe",
            white10: "#f3f4fc",
            white15: "#e9ebf9",
            white20: "#e0e2f7",
          },

          light: {
            primary: "#571dff",

            secondary: "#858ee0",

            black: "#141315",
            black85: "#2e2f34",
            black75: "#383844",
            black50: "#48485b",

            white: "#fefdff",
            white10: "#f6f3ff",
            white15: "#efe9ff",
            white20: "#e6ddff",
          },
        },
      },
      fontSize: {
        h1: "4.209rem",
        h2: "3.157rem",
        h3: "2.369rem",
        h4: "1.777rem",
        h5: "1.333rem",
        h6: "1rem",
        p: "1rem",
        p0: "0.75rem",
        small: "0.563rem",
        mini: "0.422rem",
        "4xl": "2.25rem",
        "3xl": "1.875rem",
        "2xl": "1.5rem",
        xl: "1.25rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      lineHeight: {
        h1: "1.2em",
        h2: "1.2em",
        h3: "1.2em",
        h4: "1.2em",
        h5: "1.2em",
        h6: "1.2em",
        p: "1.5em",
        p0: "1.5em",
        small: "1.5em",
        mini: "1.5em",
        "4xl": "2.75rem",
        "3xl": "2.5rem",
        "2xl": "2.25rem",
        xl: "1.75rem",
        lg: "1.5rem",
        base: "1.375rem",
        sm: "1.25rem",
        xs: "1.125rem",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },

      keyframes: {
        buttonHover: {
          "0%": { color: "#C9FEF5" },
          "50%": { color: "#22555C" },
          "100%": { color: "#C9FEF5" },
        },
        waveSlideLeft: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        waveSlideRight: {
          "0%": { translate: "1000px" },
          "100%": { translate: "-1000px" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideRight: {
          "0%": { translate: "-100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        slideLeft: {
          "0%": { translate: "100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        slideInRight: {
          "0%": { translate: "-100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "-0%", opacity: "100%", display: "block" },
        },
        slideInLeft: {
          "0%": { translate: "100%", opacity: "0%", display: "hidden" },
          "100%": { translate: "0%", opacity: "100%", display: "block" },
        },
        slideOutRight: {
          "0%": { translate: "-0%", opacity: "100%", display: "hidden" },
          "100%": { translate: "-100%", opacity: "0%" },
        },
        slideOutLeft: {
          "0%": { translate: "0%", opacity: "100%", display: "hidden" },
          "100%": { translate: "50%", opacity: "0%", display: "block" },
        },
      },
      animation: {
        waveSlideLeft: "waveSlideLeft ease-in 16s alternate infinite",
        waveSlideRight: "waveSlideRight ease-in 15s 1s alternate infinite",
        ButtonHover: "buttonHover ease-in 1.5s infinite",
        ModalSlideIn: "slideRight ease 0.3s",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 3s ease-in-out infinite alternate",
        SlideInFromLeft: "slideLeft 0.5s ease-in-out",
        SlideInFromRight: "slideInRight 0.5s 1s ease-in-out backwards",
        ThemeSwitchSlideIn: "slideInRight 0.5s ease-in-out backwards",
        ThemeSwitchSlideOut: "slideOutRight 0.5s ease-in-out forwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 0.3s ease-in-out",
        Disappear: "appear 0.3s ease-in-out backwards",
        PageAppearRight: "slideInRight 0.6s ease-in-out forwards",
        PageAppearLeft: "slideInLeft 0.3s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
