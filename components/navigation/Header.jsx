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

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleImageClick = () => {
    activeLink && setActiveLink("");
    onClose();
  };

  return (
    <header
      className={`relative flex flex-col justify-center w-full animate-SlideInFromTop font-semibold z-10`}
    >
      <div className="headerwave h-[725px]" />
      <div className="z-50 flex items-center justify-between px-12 h-28">
        <div className="left-0 flex flex-row items-start justify-center gap-12 -top-10">
          {MENU_LIST.map((menu) =>
            menu.isImage ? (
              <Link key={menu.text} href={menu.href}>
                <Image
                  onClick={handleImageClick}
                  src={menu.imageSrc}
                  width={150}
                  height={150}
                  alt="JV web consult"
                  className="cursor-pointer"
                />
              </Link>
            ) : null
          )}
          <div className="items-center justify-center hidden grid-flow-row lg:grid animate-SlideInFromLeft">
            <p className="text-JWC-logo text-p0">
              &#10077;Drevet med entusiasme, ferdigheter og koffein&#10078;
            </p>
            <p className="text-JWC-logo">VilloKodeHode@gmail.com</p>
          </div>
        </div>

        <div className="grid items-center justify-center grid-flow-col gap-4">
          <a href="https://github.com/VilloKodeHode" target="_blank">
            <VscGithubAlt className="w-8 h-8 duration-200 hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
            target="_blank"
          >
            <SlSocialLinkedin className="w-8 h-8 duration-200 hover:scale-125" />
          </a>
          <ChakraDrawer
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </div>
      </div>
    </header>
  );
}
