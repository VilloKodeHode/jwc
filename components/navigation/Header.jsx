import { useState } from "react";
import HamburgerBar from "./HamburgerBar";
import Navbar from "./Navbar";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <header
      className={`flex flex-col justify-center w-full top-0 left-0 animate-SlideInFromTop bg-JWC-nonphotoblue sm:mb-0 mb-24 font-semibold shadow-sm shadow-JWC-tiffanyblue`}
    >
      <div className="flex items-center justify-between px-12 my-4">
        <Navbar
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setActiveMenu={setActiveMenu}
        />
        <div />
        <HamburgerBar
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setActiveMenu={setActiveMenu}
        />
      </div>
    </header>
  );
}
