import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MENU_LIST from "./menu_list";
import ChakraDrawer from "./ChakraDrawer";
import { useDisclosure } from "@chakra-ui/react";

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
      <div className="z-50 flex items-center justify-end px-12 h-28">
        {MENU_LIST.map((menu) =>
          menu.isImage ? (
            <Link key={menu.text} href={menu.href}>
              <Image
                onClick={handleImageClick}
                src={menu.imageSrc}
                width={200}
                height={menu.imageHeight}
                alt="JV web consult"
                className="absolute left-0 cursor-pointer -top-10"
              />
            </Link>
          ) : null
        )}
        <div />
        <ChakraDrawer
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </div>
    </header>
  );
}
