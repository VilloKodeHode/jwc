// This file contains the menu list for the navigation drawer


export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Om", href: "/about", icon: "/WindLogoNoText.svg" },
      { text: "Prosjekter", href: "/projects", icon: "/WindLogoNoText.svg" },
      { text: "AI kunst", href: "/aiArt", icon: "/WindLogoNoText.svg" },
      { text: "Kontakt", href: "/contact", icon: "/WindLogoNoText.svg" },
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "About", href: "/about", icon: "/WindLogoNoText.svg" },
      { text: "Projects", href: "/projects", icon: "/WindLogoNoText.svg" },
      { text: "AI art", href: "/aiArt", icon: "/WindLogoNoText.svg" },
      { text: "Contact", href: "/contact", icon: "/WindLogoNoText.svg" },
    ],
  },
];

export const LOGO = [
  {
    text: "Home",
    href: "/",
    imageSrc: "/windLogo.svg",
    imageWidth: 200,
    imageHeight: 200,
  },
];


export default MENU_LIST;
