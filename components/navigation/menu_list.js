// This file contains the menu list for the navigation drawer


export const MENU_LIST = [
  {
    language: "Norwegian",
    menu_items: [
      { text: "Om", href: "/about", icon: "/tl_logo_floaters.svg" },
      { text: "Prosjekter", href: "/projects", icon: "/tr_logo_floaters.svg" },
      { text: "AI kunst", href: "/aiArt", icon: "/bl_logo_floaters.svg" },
      { text: "Kontakt", href: "/contact", icon: "/br_logo_floaters.svg" },
    ],
  },
  {
    language: "English",
    menu_items: [
      { text: "About", href: "/about", icon: "/tl_logo_floaters.svg" },
      { text: "Projects", href: "/projects", icon: "/tr_logo_floaters.svg" },
      { text: "AI art", href: "/aiArt", icon: "/bl_logo_floaters.svg" },
      { text: "Contact", href: "/contact", icon: "/br_logo_floaters.svg" },
    ],
  },
];

export const LOGO = [
  {
    text: "Home",
    href: "/",
    imageSrc: "/newLogo.svg",
    imageWidth: 200,
    imageHeight: 200,
  },
];


export default MENU_LIST;
