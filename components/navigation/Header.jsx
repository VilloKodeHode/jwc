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
      className={`relative flex flex-col justify-center w-full animate-SlideInFromTop font-semibold`}
    >
      <div className="headerwave h-[725px]" />
      <div className="z-50 flex items-center justify-between px-12 h-28">
        <div className="flex flex-row justify-center items-start gap-12 left-0 -top-10">
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
          <div className="lg:grid grid-flow-row justify-center items-center hidden animate-SlideInFromLeft">
            <p className="text-JWC-logo text-p0">
              &#10077;Drevet med entusiasme, ferdigheter og koffein&#10078;
            </p>
            <p className="text-JWC-logo">VilloKodeHode@gmail.com</p>
          </div>
        </div>

        <div className="grid gap-4 grid-flow-col justify-center items-center">
          <a href="https://github.com/VilloKodeHode" target="_blank">
            <VscGithubAlt className="h-8 w-8 hover:scale-125 duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/joakim-villo-71b814a1/"
            target="_blank"
          >
            <SlSocialLinkedin className="h-8 w-8 hover:scale-125 duration-200" />
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
