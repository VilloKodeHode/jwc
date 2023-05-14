//Header component

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LOGO } from "./menu_list";
import ChakraDrawer from "./ChakraDrawer";
import { AbsoluteCenter, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import {
  ResponsiveMini,
  ResponsiveSmall,
} from "../Responsive text/ResponsiveText";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleImageClick = () => {
    activeLink && setActiveLink("");
    onClose();
  };
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div className="relative z-10 flex items-center justify-between px-12 py-1 font-bold bg-JWC-black text-JWC-white10">
        <LanguageSwitch />
        <p className="text-sm text-JWC-secondary">
          {language === "Norwegian"
            ? "Siden er under konstruksjon"
            : "Site is under construction"}
        </p>
        <Link href="/Norwegian resume shorted JWC.png" target="_blank">
          CV
        </Link>
      </div>

      <header
        className={`relative flex flex-col h-28 w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 animate-SlideInFromTop shadow-md z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between h-28 ">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] h-full min-w-[200px] gap-8 rounded-br-full rounded-bl-">
            <div className="relative z-40">
              {LOGO.map((logo) => (
                <Link key={logo.text} href={logo.href}>
                  <Image
                    onClick={handleImageClick}
                    src={logo.imageSrc}
                    width={logo.imageWidth}
                    height={logo.imageHeight}
                    alt="JV web consult"
                    className="z-50 h-full duration-200 lg:p-1 hover:scale-105"
                  />
                </Link>
              ))}
              <AbsoluteCenter className="w-[120%] h-[110%] rounded-full bg-opacity-80 -z-10" />
            </div>
            <div className="items-center justify-center hidden grid-flow-row lg:grid animate-SlideInFromLeft">
              <ResponsiveSmall className="text-JWC-black25">
                &#10077;
                {language === "Norwegian"
                  ? "Drevet med ambisjoner, ekspertise og en uendelig tilførsel av koffein"
                  : "Driven by ambitions, expertise and an endless supply of caffeine"}
                &#10078;
              </ResponsiveSmall>
              <ResponsiveMini className="text-JWC-black25 text-small">
                VilloKodeHode@gmail.com
              </ResponsiveMini>
            </div>
          </div>
          <Navbar
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />

          <ChakraDrawer
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      </header>
    </>
  );
}
