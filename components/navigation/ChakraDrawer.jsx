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
}) {
  const { language } = useContext(LanguageContext);
  const { Theme } = useContext(ThemeContext);
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];
  return (
    <>
      <div className="flex items-center h-full rounded-bl-full md:hidden">
        <IconButton
          variant="ghost hover:bg-none hover-scale-110"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon boxSize="3rem" />}
          onClick={() => onOpen()}
          className="block ml-8 duration-200 hover:scale-110 text-JWC-primary"
        />
        <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex justify-between px-12 py-1 bg-JWC-black text-JWC-white">
              <LanguageSwitch />
              <ThemeSwitch />
              <Link href="/Norwegian resume shorted JWC.png" target="_blank">
                CV
              </Link>
            </div>
            <DrawerHeader
              className={`relative flex justify-center  ${
                Theme === "light" ? "bg-JWC-white25" : "bg-JWC-backgroundBlack"
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
                Theme === "light" ? "bg-JWC-white" : "bg-JWC-backgroundBlack"
              }
            >
              <ul
                className={`text-JWC-primary
           mt-0 p-2`}
              >
                <div className="flex flex-col items-center justify-center w-full mt-8">
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
