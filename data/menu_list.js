// This file contains the menu list for the navigation

export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Hjem", href: "/" },
      { text: "Om", href: "/about" },
      {
        text: "Portofølje",
        href: "/portfolio",
      },
      // { text: "Arbeid", href: "/work", },
      // { text: "AI kunst", href: "/aiArt", },
      { text: "Kontakt", href: "/contact", },
      // { text: "Laster", href: "/loading",},
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about", },
      { text: "Portfolio", href: "/portfolio", },
      // { text: "Work", href: "/work", },
      // { text: "AI art", href: "/aiArt", },
      { text: "Contact", href: "/contact", },
      // { text: "Loading", href: "/loading",},
    ],
  },
];

export const LOGO = [
  {
    light: {
      text: "Home",
      href: "/",
      imageSrc: "/logo/WindLogoLightmode.svg",
      imageWidth: 200,
      imageHeight: 200,
    },
  },
  {
    dark: {
      text: "Home",
      href: "/",
      imageSrc: "/logo/WindLogoDarkmode.svg",
      imageWidth: 200,
      imageHeight: 200,
    },
  },
];

export default MENU_LIST;
