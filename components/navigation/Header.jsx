import { useState } from "react";
import HamburgerBar from "./HamburgerBar";
import Navbar from "./Navbar";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <header
      className={`flex flex-col justify-center w-full top-0 left-0 z-50 animate-SlideInFromTop backdrop-blur-md bg-white text-[#2f1d87] font-semibold`}
    >
      <div className="flex my-4 justify-between px-12 items-center">
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
