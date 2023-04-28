// This file contains the menu list for the navigation drawer


export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Om", href: "/about" },
      { text: "Prosjekter", href: "/projects" },
      { text: "AI kunst", href: "/aiArt" },
      { text: "Kontakt", href: "/contact" },
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "About", href: "/about" },
      { text: "Projects", href: "/projects" },
      { text: "AI art", href: "/aiArt" },
      { text: "Contact", href: "/contact" },
    ],
  },
];

export const LOGO = [
  {
    text: "Home",
    href: "/",
    color: "bg-yellow-400",
    imageSrc: "/JWC-logo-compact.png",
    imageWidth: 150,
    imageHeight: 150,
  },
];


export default MENU_LIST;
