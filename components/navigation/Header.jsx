//Header component
import { useState } from "react";
import ChakraDrawer from "./ChakraDrawer";
import { AbsoluteCenter, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import {
  ResponsiveThemedMini,
  ResponsiveThemedSmall,
} from "../Responsive text/ResponsiveText";
import ThemeSwitch from "../Utilities/ThemeSwitch/ThemeSwitch";
import LogoComponent from "../base components/Logo";

export default function Header({ language, setLanguage, Theme, setTheme }) {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div
        className={`relative z-10 flex items-center justify-between px-12 py-1 ${
          Theme === "light" ? "bg-Villo-white25" : "bg-Villo-black"
        } text-Villo-white10`}
      >
        <div className="grid grid-flow-col gap-12">
          <LanguageSwitch setLanguage={setLanguage} />
          <ThemeSwitch setTheme={setTheme} />
        </div>
      </div>

      <header
        className={`relative ${
          Theme === "light" ? "bg-Villo-white25" : "bg-Villo-black"
        } flex flex-col h-28 w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 animate-SlideInFromTop shadow-md z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between h-28 ">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] h-full min-w-[200px] gap-8 rounded-br-full rounded-bl-">
            <div className="relative z-40">
              <LogoComponent
                setActiveLink={setActiveLink}
                activeLink={activeLink}
                onClose={onClose}
              />

              <AbsoluteCenter className="w-[120%] h-[110%] rounded-full bg-opacity-80 -z-10" />
            </div>
            <div className="items-center justify-center hidden grid-flow-row lg:grid animate-SlideInFromLeft">
              <ResponsiveThemedSmall className="text-Villo-black25">
                &#10077;
                {language === "Norwegian"
                  ? "Drevet med ambisjoner, ekspertise og en uendelig tilførsel av koffein"
                  : "Driven by ambitions, expertise and an endless supply of caffeine"}
                &#10078;
              </ResponsiveThemedSmall>
              <ResponsiveThemedMini className="text-Villo-black25">
                VilloKodeHode@gmail.com
              </ResponsiveThemedMini>
            </div>
          </div>
          <Navbar
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            language={language}
            Theme={Theme}
          />

          <ChakraDrawer
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            language={language}
            Theme={Theme}
          />
        </div>
      </header>
    </>
  );
}
