import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import MENU_LIST from "./menu_list";

export default function Navbar({}) {
  const router = useRouter();

  const handleImageClick = () => {
    setActiveMenu("");
    activeLink && setActiveLink("");
  };

  const filteredMenuList = MENU_LIST.filter((menu) => menu.text !== "Home");

  return (
    <div className="flex items-center w-full">
      {MENU_LIST.map((menu) =>
        menu.isImage ? (
          <Link key={menu.text} href={menu.href}>
            <Image
              onClick={handleImageClick}
              src={menu.imageSrc}
              width={menu.imageWidth}
              height={menu.imageHeight}
              alt="JV web consult"
            />
          </Link>
        ) : null
      )}
      <div className="flex-row justify-center hidden w-full pr-24 sm:flex text-JWC-black">
        {filteredMenuList.map((menu) => (
          <NavItem
            key={menu.text}
            text={menu.text}
            textsize="text-h6"
            href={menu.href}
            active={activeLink === menu.text}
            activeWidth="w-11"
            activeHeight="h-11"
            underline="border-b-2"
            position="left-0"
            handleMenuClick={() => setActiveLink(menu.text)}
            activeLink={activeLink}
          />
        ))}
      </div>
    </div>
  );
}
