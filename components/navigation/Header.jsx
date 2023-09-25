//Header component
import { useEffect, useRef, useState } from "react";
import ChakraDrawer from "./ChakraDrawer";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";

import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";
import LogoComponent from "../base components/Logo";
import { SiGithub } from "react-icons/si";
import HamburgerBar from "./HamburgerBar";
import Image from "next/image";
import { FcSettings } from "react-icons/fc";

export default function Header({
  language,
  setLanguage,
  Theme,
  setTheme,
  currentPath,
  cookiesAccepted,
}) {
  const [notTop, setNotTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showToolBar, setShowToolBar] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

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
        className={`relative transition-colors bg-opacity-[0.93] duration-1000 backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-12 py-2 ${Theme === "light"
          ? "bg-Villo-light-white15 text-Villo-light-black"
          : "bg-black text-Villo-dark-white10"
          } `}
      >
        <div
          className={`grid transition-all z-40 grid-flow-col gap-12
 
          ${notTop
              ? "animate-SlideInFromBottom"
              :
              "animate-SlideInFromTop"
            }`}
        >
          <LanguageSwitch
            setLanguage={setLanguage}
            cookiesAccepted={cookiesAccepted}
          />


          <ThemeSwitch
            setTheme={setTheme}
            cookiesAccepted={cookiesAccepted}
          />

        </div>


        <a href="https://github.com/VilloKodeHode" target="_blank" className={`grid transition-all z-40 grid-flow-col gap-12
 
 ${notTop
            ? "animate-SlideInFromBottom"
            :
            "animate-SlideInFromTop"
          }`}>
          <SiGithub
            className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
          />
        </a>

      </div>

      {/* Floating util bar: */}
      {/* TODO: Add a button to show/hide the floating util bar (add an icon for the button) */}

      <div className="relative">
        <div
          className={`fixed transition-all p-3 top-2 duration-1000 backdrop-blur-[10px] z-[999] flex items-center rounded-r-[30px] pr-5 justify-between ${notTop ? "animate-ToolsSlideIn" : "animate-ToolsSlideOut"
            } ${Theme === "light"
              ? "bg-Villo-light-white10 text-Villo-light-black"
              : "bg-black bg-opacity-40 text-Villo-dark-white10"
            } 
          ${showToolBar ? "" : "translate-x-[-100%]"}
          `}
        >
          <div
            className={`flex 2xl:flex-row flex-col opacity-30 hover:opacity-100 right-0 transition-all top-0 gap-4`}
          >
            <LanguageSwitch
              className={`2xl:flex-row flex-col`}
              setLanguage={setLanguage}
              cookiesAccepted={cookiesAccepted}
            />

            <ThemeSwitch
              setTheme={setTheme}
              cookiesAccepted={cookiesAccepted}
            />
            <button onClick={toggleToolBar} className="">
              <FcSettings
                className={`absolute h-[50px] w-fit top-0 2xl:left-[120px] left-[60px] transition-all duration-500 hover:animate-cogSpin 
          ${showToolBar ? "" : "2xl:left-[155px] left-[70px]"}
          `}
              ></FcSettings>
            </button>
          </div>
        </div>
      </div>

      <header
        className={`relative transition-all duration-1000 z-50 bg-opacity-[0.925] ${Theme === "light" ? "bg-Villo-light-white10" : "bg-black"
          } flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] h-[112px] min-w-[200px] gap-8 rounded-br-full">
            <div className="relative z-40">
              <LogoComponent currentPath={currentPath} />

              {/* <AbsoluteCenter className="w-[120%] h-[110%] rounded-full bg-opacity-80 -z-10" /> */}
            </div>
            <div className="items-center justify-center hidden grid-flow-row lg:grid animate-SlideInFromLeft">
              {/* <ResponsiveThemedSmall className={`${Theme === "light" ? "text-Villo-dark-black50" : "text-Villo-dark-white15" } `}>
                &#10077;
                {language === "Norwegian"
                  ? "Drevet med ambisjoner, ekspertise og en uendelig tilførsel av koffein"
                  : "Driven by ambitions, expertise and an endless supply of caffeine"}
                &#10078;
              </ResponsiveThemedSmall> */}
              {/* <ResponsiveThemedMini className="text-Villo-black25">
                VilloKodeHode@gmail.com
              </ResponsiveThemedMini> */}
            </div>
          </div>
          <Navbar language={language} Theme={Theme} currentPath={currentPath} />

          <HamburgerBar
            menuRef={menuRef}
            handleMenuToggle={handleMenuToggle}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            language={language}
            Theme={Theme}
            currentPath={currentPath}
          />
        </div>
      </header>
    </>
  );
}
