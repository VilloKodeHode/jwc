// The navigation drawer. Made with Chakra UI.

import Link from "next/link";
import MENU_LIST from "./menu_list";
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
  DrawerCloseButton,
  IconButton,
} from "@chakra-ui/react";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";

export default function ChakraDrawer({
  activeLink,
  setActiveLink,
  handleImageClick,
  isOpen,
  onOpen,
  onClose,
}) {
  const filteredMenuList = MENU_LIST.filter((menu) => menu.text !== "Home");

  return (
    <>
      <div className="block md:hidden">
        <IconButton
          variant="ghost hover:bg-none hover-scale-110"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon boxSize="3rem" />}
          onClick={() => onOpen()}
          className="block ml-8 duration-200 hover:scale-110"
        />
        <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <div className="flex justify-between px-12 py-1 font-bold bg-JWC-black text-JWC-white">
              <LanguageSwitch />
              <Link href="/Norwegian resume shorted JWC.png" target="_blank">
                CV
              </Link>
            </div>
            <DrawerHeader className="relative flex justify-center">
              {MENU_LIST.map((menu) =>
                menu.isImage ? (
                  <Link key={menu.text} href={menu.href}>
                    <Image
                      onClick={() => {
                        activeLink && setActiveLink("");
                        onClose();
                      }}
                      src={menu.imageSrc}
                      className="p-4 my-[1.5px] duration-200 hover:scale-105"
                      width={150}
                      height={150}
                      alt="JV web consult"
                    />
                  </Link>
                ) : null
              )}
            </DrawerHeader>
            <DrawerBody>
              <ul
                className={`text-JWC-primary
           mt-0 p-2`}
              >
                <div className="flex flex-col items-center justify-center w-full mt-8">
                  {filteredMenuList.map((menu) => (
                    <NavItem
                      onClick={() => {
                        setActiveLink(menu.text);
                        onClose();
                      }}
                      textSize="text-h4"
                      textColor="text-JWC-black"
                      key={menu.text}
                      text={menu.text}
                      href={menu.href}
                      color={menu.color}
                      active={activeLink === menu.text}
                      activeLink={activeLink}
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
