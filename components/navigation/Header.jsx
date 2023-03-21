import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";
import MENU_LIST from "./menu_list";

export default function Header({ handleImageClick }) {
  return (
    <header
      className={`relative flex flex-col justify-center w-full animate-SlideInFromTop font-semibold`}
    >
      <div className="headerwave h-[725px]" />
      <div className="flex items-center justify-between px-12 z-50">
        {MENU_LIST.map((menu) =>
          menu.isImage ? (
            <Link key={menu.text} href={menu.href}>
              <Image
                onClick={handleImageClick}
                src={menu.imageSrc}
                width={menu.imageWidth}
                height={menu.imageHeight}
                alt="JV web consult"
              />
            </Link>
          ) : null
        )}
        <div />

        <label htmlFor="my-drawer" className="p-0 drawer-button cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#3c4343"
          >
            <path
              // strokeLinecap="round"
              // strokeLinejoin="round"
              strokeWidth="1"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
    </header>
  );
}
