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

export default function Header({
  language,
  setLanguage,
  Theme,
  setTheme,
  currentPath,
}) {
  const [notTop, setNotTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`relative backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-12 py-2 ${
          Theme === "light"
            ? "bg-Villo-light-white10 text-Villo-light-black"
            : "bg-black bg-opacity-40 text-Villo-dark-white10"
        } `}
      >
        <div
          className={`grid transition-all z-40 
 
          ${
            notTop
              ? "grid-flow-col gap-12 transition-all hidden"
              // "fixed opacity-50 hover:opacity-100 right-0 transition-all rounded-bl-full top-0 gap-2 grid-flow-row p-4 pl-6 pb-6 animate-ToolsSlideIn"
              : "grid-flow-col gap-12 transition-all animate-SlideInFromTop"
          }`}
        >
          <LanguageSwitch setLanguage={setLanguage} />
          
          <div className={` ${notTop ? "hidden" : 
          "animate-SlideInFromTop"}`}>
            <ThemeSwitch setTheme={setTheme} />
          </div>
        </div>
        <div className={`flex transition-all justify-end ${notTop ? "hidden" : "animate-SlideInFromTop"}`}>
          <a href="https://github.com/VilloKodeHode" target="_blank">
            <SiGithub
              className={`relative z-10 w-8 h-8 mx-auto duration-200 hover:scale-105`}
            />
          </a>
        </div>
      </div>

      <header
        className={`relative z-50 bg-opacity-20 ${
          Theme === "light" ? "bg-Villo-light-white15" : "bg-black"
        } flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] h-[112px] min-w-[200px] gap-8 rounded-br-full rounded-bl-">
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
          <Navbar
            language={language}
            Theme={Theme}
            currentPath={currentPath}
          />

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
