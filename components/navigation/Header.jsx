//Header component
import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import LanguageSwitch from "../features/LanguageSwitch/LanguageSwitch";
import MENU_LIST from "../../data/menu_list";
import ThemeSwitch from "../features/ThemeSwitch/ThemeSwitch";
import LogoComponent from "../base_components/Logo";
import { SiGithub, SiLinkedin } from "react-icons/si";
import HamburgerBar from "./HamburgerBar";
import { FcSettings } from "react-icons/fc";
import { UserContext } from "../Utilities/UserContext";
import { NavigationContext } from "../Utilities/NavigationContext";
import { Banner } from "./Banner";
import { FloatingUtilsBar } from "./FloatingUtilBar";

export default function Header() {
  //TODO: Too many useStates...make a context for it?
  const { language, theme, currentPath } = useContext(UserContext);
  const {
    notTop,
    setNotTop,
    isOpen,
    setIsOpen,
    showToolBar,
    setShowToolBar,
    setToggleDropDown,
  } = useContext(NavigationContext);
  //TODO: See if logic can be moved (to utils?)
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];
  const drop_down = menuObj ? menuObj.drop_down : {};
  const drop_down_items = drop_down ? drop_down.drop_down_items : [];
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  //TODO: Move logic to utils. See if can be improved also.




  return (
    <>
      <Banner />
      <FloatingUtilsBar />
      <header
        className={`relative transition-all duration-1000 z-50 bg-opacity-[0.925] ${
          theme === "light" ? "bg-Villo-light-white10" : "bg-black"
        } flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="grid items-center h-[112px] min-w-[200px] gap-8 rounded-br-full">
            <div className="relative z-40 flex flex-row items-center">
              <LogoComponent
                onClick={() => {
                  handleMenuToggle();
                  setToggleDropDown(false);
                }}
              />
            </div>
          </div>
          <Navbar
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
          />

          <HamburgerBar
            handleMenuToggle={handleMenuToggle}
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
          />
        </div>
      </header>
    </>
  );
}
