// This file contains the menu list for the navigation

export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Om", href: "/about"},
      {
        text: "Prosjekter",
        href: "/projects",
      },
      // { text: "AI kunst", href: "/aiArt",},
      { text: "Kontakt", href: "/contact",},
      // { text: "Laster", href: "/loading",},
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "About", href: "/about",},
      { text: "Projects", href: "/projects",},
      // { text: "AI art", href: "/aiArt",},
      { text: "Contact", href: "/contact",},
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
