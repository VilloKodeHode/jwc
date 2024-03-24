// The navigation drawer. Made with Chakra UI.

import MENU_LIST from "../../data/menu_list";
import NavItem, { DropDown, DropDownItem } from "./NavItem";
import LogoComponent from "../base_components/Logo";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "../Utilities/UserContext";
import { useContext } from "react";

export default function HamburgerBar({
  //TODO: Too many props...make a context for it?
  currentPath,
  setIsOpen,
  isOpen,
  handleMenuToggle,
  menuRef,
  drop_down,
  drop_down_items,
  toogleDropDown,
  setToogleDropDown,
}) {
  const { theme, language } = useContext(UserContext);
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
          className={`absolute top-0 z-10 right-0 w-screen h-screen transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } `}
          ref={menuRef}
        >
          <nav className={`relative z-10 flex justify-center h-screen `}>
            <div className={`relative flex justify-center  `}></div>
            <div
              className={`z-50 w-full h-full bg-opacity-[0.99]
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
                    handleMenuToggle={handleMenuToggle}
                    currentPath={currentPath}
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
                      Theme={theme}
                      currentPath={currentPath}
                    />
                  ))}
                  <DropDown
                    onClick={() => setToogleDropDown(!toogleDropDown)}
                    textSize="text-h4"
                    Theme={theme}
                    language={language}
                    currentPath={currentPath}
                    className="-z-50"

                  >
                    {drop_down.text}
                  </DropDown>
                  <div className={`absolute ${toogleDropDown ? "scale-100 translate-y-[200%] translate-x-1/4" : "scale-0 translate-x-0 translate-y-[130%]"}  transition-all`}>

                    <div className="flex flex-col justify-center items-start gap-4 min-h-[160px]">


                      {drop_down_items?.map((menu) => (

                        <DropDownItem
                          onClick={() => { setToogleDropDown(false); setIsOpen(false) }}
                          textSize="text-h5"
                          key={menu.text}
                          text={menu.text}
                          href={menu.href}
                          color={menu.color}
                          icon={menu.icon}
                          Theme={theme}
                          language={language}
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
