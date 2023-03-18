/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
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
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        JWC: {
          // header, footer and highlights:
          teal: "#0E7D87",
          // logo contrast, highlighting heading and subheading, dividers between sections
          moonstone: "#21ABB8",
          //
          robineggblue: "#33C2CC",
          // main text:
          tiffanyblue: "#77D3DC",
          //main background:
          nonphotoblue: "#B1E4E9",
        },
      },
      keyframes: {
        buttonHover: {
          "0%": { color: "#C9FEF5" },
          "50%": { color: "#22555C" },
          "100%": { color: "#C9FEF5" },
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
        ButtonHover: "buttonHover ease-in 1.5s infinite",
        ModalSlideIn: "slideRight ease 0.3s",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 1s ease-in-out infinite alternate",
        SlideInFromLeft: "slideLeft 0.5s ease-in-out",
        SlideInFromRight: "slideRight 0.5s 1s ease-in-out backwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 0.3s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
