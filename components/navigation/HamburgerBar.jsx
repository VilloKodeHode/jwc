import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
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
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

export default function HamburgerBar({
  activeLink,
  setActiveLink,
  setActiveMenu,
}) {
  const router = useRouter();
  const filteredMenuList = MENU_LIST.filter((menu) => menu.text !== "Home");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => onOpen();
  const handleImageClick = () => {
    setActiveMenu("");
    activeLink && setActiveLink("");
    onClose();
  };
  return (
    <div className="block sm:hidden">
      <IconButton
        variant=""
        aria-label="Open Menu"
        size="lg"
        color="#1fabb7"
        className="duration-1000 ease-in-out hover:scale-110"
        icon={<HamburgerIcon boxSize="3rem" />}
        onClick={() => handleClick()}
      />
      <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {MENU_LIST.map((menu) =>
              menu.isImage ? (
                <Link key={menu.text} href={menu.href}>
                  <Image
                    onClick={handleImageClick}
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
              className={`
           mt-0 p-2`}
            >
              <div className="flex flex-col items-center justify-center w-full">
                {filteredMenuList.map((menu) => (
                  <NavItem
                    key={menu.text}
                    text={menu.text}
                    textsize="text-8xl"
                    href={menu.href}
                    color={menu.color}
                    active={activeLink === menu.text}
                    activeHeight="h-36"
                    activeWidth="w-36"
                    position="-left-8"
                    underline="border-b-4"
                    handleMenuClick={() => {
                      setActiveLink(menu.text);
                      onClose();
                    }}
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
