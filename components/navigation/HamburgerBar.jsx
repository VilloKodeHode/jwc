// The navigation drawer. Made with Chakra UI.

import MENU_LIST from "../../data/menu_list";
import NavItem from "./NavItem";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import LogoComponent from "../base components/Logo";
import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {GiHamburgerMenu} from "react-icons/gi";
import Image from "next/image";

export default function HamburgerBar({
  language,
  Theme,
  currentPath,
  setIsOpen,
  isOpen,
  handleMenuToggle,
  menuRef,
}) {
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];

  return (
    <>
      <div className="z-[99] flex items-center h-full rounded-bl-full md:hidden">
        <button
              className={`block ml-8 duration-200 hover:scale-110 ${
                Theme === "light"
                  ? "text-Villo-light-primary"
                  : "text-Villo-dark-primary"
              } `}
          onClick={handleMenuToggle}
          aria-label="Åpne navigasjonsmeny"
        >
            <GiHamburgerMenu
                className={` h-10 w-10 `}
            />
          {/* <svg
            className={` ${isOpen ? "hidden" : "block"}`}
            width="35"
            height="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 13"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M0 13H25V11.8333H0V13ZM5 7.58333H25V6.41667H5V7.58333ZM0 0V2.16667H25V1H0Z"
              fill="#1D3458"
            />
          </svg> */}
        </button>

        <div
          className={`absolute top-0 z-[99] right-0 w-screen h-screen transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
          ref={menuRef}
        >
          <nav className={`relative z-[99] flex justify-center h-screen `}>
            <button
              className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
              onClick={handleMenuToggle}
              aria-label="Lukke navigasjonsmeny"
            >
              {" "}
              <IoCloseSharp
                className={` ${
                  isOpen ? "block" : "hidden"
                } text-black rounded-full transition duration-500 hover:text-hawii-greyBlue  z-50 w-12 h-12`}
              />
            </button>
            <div
              className={`relative flex justify-center  ${
                Theme === "light"
                  ? "bg-Villo-light-white"
                  : "bg-Villo-dark-black"
              }`}
            >
             
            </div>
            <div
              className={`z-50 w-full h-full
                ${Theme === "light"
                  ? "bg-Villo-light-white15"
                  : "bg-Villo-dark-black"}
                  `}
            >
              <ul className={`mt-0 p-2`}>
                
                <div className="flex flex-col items-center justify-center w-full gap-8 mt-8">
                <LogoComponent onClick={handleMenuToggle}  currentPath={currentPath} />
                  {menu_items.map((menu) => (
                    <NavItem
                      onClick={() => {
                        setIsOpen(false);
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
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
