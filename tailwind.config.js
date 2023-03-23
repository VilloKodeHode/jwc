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
      waveSlideLeft: "waveSlideLeft ease-in 50s alternate infinite",
      waveSlideRight: "waveSlideRight ease-in 55s 1s alternate infinite",
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
    extend: {
      colors: {
        JWC: {
          // header, footer and highlights:
          primary: "#ac6bde",
          // logo contrast, highlighting heading and subheading, dividers between sections
          secondary: "#eb65cf",
          //
          tertiary: "#6865eb",
          // main text:
          tiffanyblue: "#77D3DC",
          //main background:
          nonphotoblue: "#B1E4E9",
          //font colors:
          black: "#312b35",
          black75: "#656068",
          black50: "#98959a",
          black25: "#cbcacc",
          black15: "#e0dfe1",
          logo: "#3c4343",
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
        "4xl": "2.75rem",
        "3xl": "2.5rem",
        "2xl": "2.25rem",
        xl: "1.75rem",
        lg: "1.5rem",
        base: "1.375rem",
        sm: "1.25rem",
        xs: "1.125rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
