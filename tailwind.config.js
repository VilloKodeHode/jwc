/** @type {import('tailwindcss').Config} */
module.exports = {
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
        JWC: {
          primary: "#a2cbcc",

          secondary: "#f78f6a",

          tertiary: "#387184",

          //font colors:
          black: "#202929",
          black75: "#585f5f",
          black50: "#909494",
          black25: "#c7c9c9",
          black15: "#dedfdf",
          logo: "#3c4343",
          white: "#fdfdfd",
          white10: "#f6fafa",
        },
      },
      fontSize: {
        h1: "119px",
        h2: "84px",
        h3: "59px",
        h4: "42px",
        h5: "30px",
        h6: "21px",
        p: "21px",
        p0: "18px",
        small: "16px",
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
        h1: "144px",
        h2: "112px",
        h3: "72px",
        h4: "48px",
        h5: "40px",
        h6: "36px",
        p: "30px",
        p0: "24px",
        small: "18px",
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
        slideLeft: {
          "0%": { translate: "100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
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
        SlideInFromRight: "slideRight 0.5s 1s ease-in-out backwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 0.3s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
