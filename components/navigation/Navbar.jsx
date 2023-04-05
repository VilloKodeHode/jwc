//Unused, but can still be used if I want to have a navbar for bigger screens

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import MENU_LIST from "./menu_list";

export default function Navbar({
  activeLink,
  setActiveLink,
  handleImageClick,
  isOpen,
  onOpen,
  onClose,
  className,
}) {
  const filteredMenuList = MENU_LIST.filter((menu) => menu.text !== "Home");

  return (
    <div className={`flex items-center w-[800px] ${className}`}>
      <div className="flex-row justify-start hidden w-full gap-8 xl:flex">
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
    </div>
  );
}
