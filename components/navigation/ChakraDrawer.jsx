// The navigation drawer. Made with Chakra UI.

import MENU_LIST from "./menu_list";
import NavItem from "./NavItem";
import { HamburgerIcon } from "@chakra-ui/icons";

//chakra components:
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from "@chakra-ui/react";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import LogoComponent from "../base components/Logo";
import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";

export default function ChakraDrawer({
  isOpen,
  onOpen,
  onClose,
  language,
  Theme,
  currentPath,
}) {
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
          className={`block ml-8 duration-200 hover:scale-110 ${
            Theme === "light"
              ? "text-Villo-light-primary"
              : "text-Villo-dark-primary"
          } `}
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
            <div
              className={`flex justify-between px-12 py-1 ${
                Theme === "light"
                  ? "bg-Villo-light-white"
                  : "bg-Villo-dark-black"
              }`}
            >
              <LanguageSwitch />
              <ThemeSwitch />
              {/* <Link href="/Norwegian resume shorted JWC.png" target="_blank">
                CV
              </Link> */}
            </div>
            <DrawerHeader
              className={`relative flex justify-center  ${
                Theme === "light"
                  ? "bg-Villo-light-white"
                  : "bg-Villo-dark-black"
              }`}
            >
              <LogoComponent onClose={onClose} />
            </DrawerHeader>
            <DrawerBody
              className={
                Theme === "light"
                  ? "bg-Villo-light-white"
                  : "bg-Villo-dark-black"
              }
            >
              <ul className={`mt-0 p-2`}>
                <div className="flex flex-col items-center justify-center w-full gap-8 mt-8">
                  {menu_items.map((menu) => (
                    <NavItem
                      onClick={() => {
                        onClose();
                      }}
                      textSize="text-h4"
                      key={menu.text}
                      text={menu.text}
                      href={menu.href}
                      color={menu.color}
                      icon={menu.icon}
                      Theme={Theme}
                      currentPath={currentPath}
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
