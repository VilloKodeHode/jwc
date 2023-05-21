// This file contains the menu list for the navigation

export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Om", href: "/about", icon: "/logo/WindLogoNoText.svg" },
      {
        text: "Prosjekter",
        href: "/projects",
        icon: "/logo/WindLogoNoText.svg",
      },
      // { text: "AI kunst", href: "/aiArt", icon: "/logo/WindLogoNoText.svg" },
      { text: "Kontakt", href: "/contact", icon: "/logo/WindLogoNoText.svg" },
      // { text: "Laster", href: "/loading", icon: "/logo/WindLogoNoText.svg" },
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "About", href: "/about", icon: "/logo/WindLogoNoText.svg" },
      { text: "Projects", href: "/projects", icon: "/logo/WindLogoNoText.svg" },
      // { text: "AI art", href: "/aiArt", icon: "/logo/WindLogoNoText.svg" },
      { text: "Contact", href: "/contact", icon: "/logo/WindLogoNoText.svg" },
      // { text: "Loading", href: "/loading", icon: "/logo/WindLogoNoText.svg" },
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
