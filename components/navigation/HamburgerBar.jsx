// The navigation drawer. Made with Chakra UI.

import MENU_LIST from "../../data/menu_list";
import NavItem, { DropDown, DropDownItem } from "./NavItem";
import LogoComponent from "../base_components/Logo";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../Utilities/UserContext";
import { useContext, useEffect, useRef } from "react";
import { NavigationContext } from "../Utilities/NavigationContext";

export default function HamburgerBar({
  //TODO: Too many props...make a context for it?
  handleMenuToggle,
  drop_down,
  drop_down_items,
}) {
  const { theme, language, currentPath } = useContext(UserContext);
  const { isOpen, setIsOpen, toggleDropDown, setToggleDropDown } = useContext(
    NavigationContext)

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [setIsOpen]);
  
    const menuRef = useRef(null);


  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];

  return (
    <>
      <div className="z-[99] flex items-center h-full rounded-bl-full md:hidden">
        <button
          className={`block ml-8 duration-200 hover:scale-110 ${theme === "light"
            ? "text-Villo-light-primary"
            : "text-Villo-dark-primary"
            } `}
          onClick={handleMenuToggle}
          aria-label="Åpne navigasjonsmeny"
        >
          <GiHamburgerMenu className={` h-10 w-10 `} />
        </button>

        <div
          className={`fixed top-0 z-10 right-0 w-screen h-screen transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } `}
          ref={menuRef}
        >
          <nav className={`relative z-10 flex justify-center h-screen `}>
            <div
              className={`z-50 w-full h-full
                ${theme === "light"
                  ? "bg-Villo-light-white"
                  : "bg-Villo-dark-black"
                }
                  `}
            >
              <ul className={`mt-0 p-2`}>
                <div className="relative flex flex-col items-center justify-center w-full gap-8 pt-4">
                  <button
                    className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
                    onClick={handleMenuToggle}
                    aria-label="Lukke navigasjonsmeny"
                  >
                    <IoCloseSharp
                      className={` ${isOpen ? "block" : "hidden"} ${theme === "light"
                        ? "text-Villo-light-primary"
                        : "text-Villo-dark-primary"
                        } hover:opacity-70 transition duration-500 z-50 w-10 h-10`}
                    />
                  </button>
                  <LogoComponent
                    onclick={handleMenuToggle}
                  />
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
                      currentPath={currentPath}
                    />
                  ))}
                  <DropDown
                    onClick={() => setToggleDropDown(!toggleDropDown)}
                    textSize="text-h4"
                    currentPath={currentPath}
                    className="-z-50"

                  >
                    {drop_down.text}
                  </DropDown>
                  <div className={`absolute ${toggleDropDown ? "scale-100 translate-y-[200%] translate-x-4" : "scale-0 translate-x-0 translate-y-[130%]"}  transition-all bottom-14`}>

                    <div className="flex flex-col items-start justify-center">


                      {drop_down_items?.map((menu) => (
                        <DropDownItem
                          onClick={() => { setToggleDropDown(false); setIsOpen(false) }}
                          textSize="text-p"
                          key={menu.text}
                          text={menu.text}
                          href={menu.href}
                          color={menu.color}
                          icon={menu.icon}
                          currentPath={currentPath}
                        />
                      ))}

                    </div>
                  </div>
                </div>
                <div className="flex-row hidden justify-end h-[112px] items-center rounded-bl-full gap-8 w-full md:flex">
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
