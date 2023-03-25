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
    <div>
      <IconButton
        variant="ghost hover:bg-none hover-scale-110"
        aria-label="Open Menu"
        size="lg"
        icon={<HamburgerIcon boxSize="3rem" />}
        onClick={() => onOpen()}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {MENU_LIST.map((menu) =>
              menu.isImage ? (
                <Link key={menu.text} href={menu.href}>
                  <Image
                    onClick={() => {
                      activeLink && setActiveLink("");
                      onClose();
                    }}
                    src={menu.imageSrc}
                    className=""
                    width={menu.imageWidth}
                    height={menu.imageHeight}
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
              <div className="flex flex-col items-center justify-center w-full">
                {filteredMenuList.map((menu) => (
                  <NavItem
                    onClick={() => {
                      setActiveLink(menu.text);
                      onClose();
                    }}
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
  );
}
