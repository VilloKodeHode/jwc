//Header component

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MENU_LIST from "./menu_list";
import ChakraDrawer from "./ChakraDrawer";
import { useDisclosure } from "@chakra-ui/react";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { ResponsiveP } from "../Responsive text/ResponsiveText";
import Navbar from "./Navbar";
import LanguageSwitch from "../Utilities/LanguageSwitch/LanguageSwitch";
import { CallToActionButtonAlt, SmallButton } from "../Buttons";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleImageClick = () => {
    activeLink && setActiveLink("");
    onClose();
  };

  return (
    <>
      <div className="relative z-10 flex items-center justify-between px-12 py-1 font-bold bg-JWC-tertiary text-JWC-white10">
        {/* <LanguageSwitch /> */}
        <p className="text-sm text-JWC-secondary">
          Siden er under konstruksjon
        </p>
        <Link href="/Norwegian resume shorted JWC.png" target="_blank">
          CV
        </Link>
      </div>

      <header
        className={`relative flex flex-col h-28 w-full justify-center animate-SlideInFromTop shadow-md font-semibold z-10 backdrop-blur-[1px]`}
      >
        {/* <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-r from-JWC-primary to-JWC-secondary"></div> */}
        <div className="z-50 flex items-center justify-between px-12 h-28">
          <div className="flex flex-row items-center justify-start lg:min-w-[500px] min-w-[150px] gap-8">
            {MENU_LIST.map((menu) =>
              menu.isImage ? (
                <Link key={menu.text} href={menu.href}>
                  <Image
                    onClick={handleImageClick}
                    src={menu.imageSrc}
                    width={150}
                    height={150}
                    alt="JV web consult"
                    className="p-4 duration-200 hover:scale-105"
                  />
                </Link>
              ) : null
            )}
            <div className="items-center justify-center hidden grid-flow-row lg:grid animate-SlideInFromLeft">
              <p className="text-JWC-black75 text-[12px]">
                &#10077;Drevet med entusiasme, ferdigheter og koffein&#10078;
              </p>
              <p className="text-JWC-black75 text-[10px]">
                VilloKodeHode@gmail.com
              </p>
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
      {/* <div className="absolute grid items-center justify-end grid-flow-col gap-4 top-28 md:grid-flow-row right-16">
        <a href="https://github.com/VilloKodeHode" target="_blank">
          <VscGithubAlt className="w-8 h-8 duration-200 hover:text-JWC-tertiary hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
          target="_blank"
        >
          <SlSocialLinkedin className="w-8 h-8 duration-200 hover:text-JWC-tertiary hover:scale-125" />
        </a>
      </div> */}
    </>
  );
}
