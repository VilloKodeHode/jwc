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

export default function Header({
  currentPath,
}) {
   //TODO: Too many useStates...make a context for it?
  const {language, theme, setTheme, cookiesAccepted} = useContext(UserContext);
  const [notTop, setNotTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showToolBar, setShowToolBar] = useState(false);
  const [toogleDropDown, setToogleDropDown] = useState(false);
  //TODO: See if logic can be moved (to utils?)
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];
  const drop_down = menuObj ? menuObj.drop_down : {};
  const drop_down_items = drop_down ? drop_down.drop_down_items : [];
  console.log(drop_down);
  console.log(drop_down_items);
console.log(language)
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  //TODO: Move logic to utils
  const toggleToolBar = () => {
    setShowToolBar(!showToolBar);
  };

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
  }, []);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setNotTop(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`relative transition-colors bg-opacity-[0.93] duration-1000 backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-12 py-6 ${
          theme === "light"
            ? "bg-Villo-light-white15 text-Villo-light-black"
            : "bg-black text-Villo-dark-white10"
        } `}
      >
        <div
          className={`grid transition-all z-40 grid-flow-col gap-12
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
        >
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
          >
            <SiLinkedin
              className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
          >
            <SiGithub
              className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
        </div>
      </div>

      {/* Floating util bar: */}
      {/* TODO: Add a button to show/hide the floating util bar (add an icon for the button) */}

      <div className="relative">
        <div
          className={`fixed transition-all p-3 group top-2 duration-1000 z-[999] hover:bg-opacity-100 border-b-2 hover:border-opacity-100 bg-opacity-40  border-opacity-40 flex items-center rounded-r-[30px] pr-5 justify-between ${
            notTop ? "animate-ToolsSlideIn" : "animate-ToolsSlideOut"
          } ${
            theme === "light"
              ? "bg-Villo-light-white15  text-Villo-light-black border-Villo-light-primary"
              : "bg-Villo-dark-black75 text-Villo-dark-white10 border-Villo-dark-black85"
          } 
          ${showToolBar ? "" : "translate-x-[-100%]"}
          `}
        >
          <div
            className={`flex 2xl:flex-row flex-col opacity-30 group-hover:opacity-100  right-0 transition-all top-0 gap-4`}
          >
            <LanguageSwitch
              className={`2xl:flex-row flex-col`}
            />

            <ThemeSwitch />
            <button onClick={toggleToolBar} className="">
              <FcSettings
                className={`absolute h-[50px] w-fit top-0 2xl:left-[140px] left-[50px] transition-all duration-500 hover:animate-cogSpin 
          ${showToolBar ? "" : "2xl:left-[165px] left-[65px]"}
          `}
              ></FcSettings>
            </button>
          </div>
        </div>
      </div>

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
                  setToogleDropDown(false);
                }}
                currentPath={currentPath}
              />
            </div>
          </div>
          <Navbar
            toogleDropDown={toogleDropDown}
            setToogleDropDown={setToogleDropDown}
            currentPath={currentPath}
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
          />

          <HamburgerBar
            menuRef={menuRef}
            handleMenuToggle={handleMenuToggle}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            currentPath={currentPath}
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
            toogleDropDown={toogleDropDown}
            setToogleDropDown={setToogleDropDown}
          />
        </div>
      </header>
    </>
  );
}
