//Header component
import { useEffect, useState } from "react";
import ChakraDrawer from "./ChakraDrawer";
import { useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";

import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";
import LogoComponent from "../base components/Logo";
import { SiGithub } from "react-icons/si";

export default function Header({
  language,
  setLanguage,
  Theme,
  setTheme,
  currentPath,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notTop, setNotTop] = useState(false);

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
        className={`relative z-40 h-10 flex items-center justify-between px-12 py-2 ${
          Theme === "light"
            ? "bg-Villo-light-white text-Villo-light-black"
            : "bg-Villo-dark-black text-Villo-dark-white"
        } `}
      >
        <div
          className={`grid transition-all z-40 ${
            notTop
              ? Theme === "light"
                ? "bg-Villo-light-white20"
                : "bg-Villo-dark-black50"
              : ""
          }  ${
            notTop
              ? "fixed opacity-50 hover:opacity-100 right-0 transition-all rounded-bl-full top-0 gap-2 grid-flow-row p-4 pl-6 pb-6 animate-ToolsSlideIn"
              : "grid-flow-col gap-12 transition-all animate-SlideInFromTop"
          }`}
        >
          <LanguageSwitch setLanguage={setLanguage} />
          <div className={`${notTop ? "translate-x-9" : ""}`}>
            <ThemeSwitch setTheme={setTheme} />
            
          </div>
          
        </div>
        <div className="flex justify-end" >
          <a href="https://github.com/VilloKodeHode" target="_blank">
        <SiGithub className={`relative z-10 w-8 h-8 mx-auto duration-200 hover:scale-105`} />
        </a>
        </div>
      </div>

      <header
        className={`relative ${
          Theme === "light" ? "bg-Villo-light-white" : "bg-Villo-dark-black"
        } flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] h-full min-w-[200px] gap-8 rounded-br-full rounded-bl-">
            <div className="relative z-40">
              <LogoComponent onClose={onClose} currentPath={currentPath} />

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
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            language={language}
            Theme={Theme}
            currentPath={currentPath}
          />

          <ChakraDrawer
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            language={language}
            Theme={Theme}
            currentPath={currentPath}
          />
        </div>
      </header>
    </>
  );
}
