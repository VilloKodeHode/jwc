// The navigation drawer. Made with Chakra UI.

import Link from "next/link";
import MENU_LIST, { LOGO } from "./menu_list";
import NavItem from "./NavItem";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";


//chakra components:
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from "@chakra-ui/react";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import { useContext } from "react";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";
import LogoComponent from "../base components/Logo";
import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";

export default function ChakraDrawer({
  activeLink,
  setActiveLink,
  handleImageClick,
  isOpen,
  onOpen,
  onClose,
  language,
  Theme,
}) {
  // const { language } = useContext(LanguageContext);
  // const { Theme } = useContext(ThemeContext);
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];

  //TODO implementer useRef så jeg kan ta bort chakraUI
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <>
      <div className="flex items-center h-full rounded-bl-full md:hidden">
        <IconButton
          variant="ghost hover:bg-none hover-scale-110"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon boxSize="3rem" />}
          onClick={() => onOpen()}
          className="block ml-8 duration-200 hover:scale-110 text-Villo-primary"
        />
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          size="xs"
          placement="right"
          // ref={menuRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex justify-between px-12 py-1 bg-Villo-black text-Villo-white">
              <LanguageSwitch />
              <ThemeSwitch />
              {/* <Link href="/Norwegian resume shorted JWC.png" target="_blank">
                CV
              </Link> */}
            </div>
            <DrawerHeader
              className={`relative flex justify-center  ${
                Theme === "light"
                  ? "bg-Villo-white25"
                  : "bg-Villo-backgroundBlack"
              }`}
            >
              <LogoComponent
                setActiveLink={setActiveLink}
                activeLink={activeLink}
                onClose={onClose}
              />
            </DrawerHeader>
            <DrawerBody
              className={
                Theme === "light"
                  ? "bg-Villo-white"
                  : "bg-Villo-backgroundBlack"
              }
            >
              <ul
                className={`text-Villo-primary
           mt-0 p-2`}
              >
                <div className="flex flex-col items-center justify-center w-full gap-8 mt-8">
                  {menu_items.map((menu) => (
                    <NavItem
                      onClick={() => {
                        setActiveLink(menu.text);
                        onClose();
                      }}
                      textSize="text-h4"
                      key={menu.text}
                      text={menu.text}
                      href={menu.href}
                      color={menu.color}
                      active={activeLink === menu.text}
                      activeLink={activeLink}
                      icon={menu.icon}
                      Theme={Theme}
                    />
                  ))}
                </div>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
