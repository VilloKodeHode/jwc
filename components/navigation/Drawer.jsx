import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import MENU_LIST from "./menu_list";
import NavItem from "./NavItem";
import Image from "next/image";

export default function Drawer({ children }) {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();
  const filteredMenuList = MENU_LIST.filter((menu) => menu.text !== "Home");
  const handleImageClick = () => {
    setActiveMenu("");
    activeLink && setActiveLink("");
  };

  return (
    <div className="w-full drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mainBackground">
        <>{children}</>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <div className="bg-white menu">
          <div className="flex items-center justify-around sm:w-[300px] mb-48 w-[200px]">
            <div className="headerwave h-[600px]" />
            {MENU_LIST.map((menu) =>
              menu.isImage ? (
                <>
                  <Link key={menu.text} href={menu.href}>
                    <Image
                      onClick={handleImageClick}
                      src={menu.imageSrc}
                      width={menu.imageWidth}
                      height={menu.imageHeight}
                      alt="JV web consult"
                      className="z-20"
                    />
                  </Link>
                </>
              ) : null
            )}
          </div>
          <div className="min-h-[calc(100vh-100px)]">
            <ul className={`mt-0 p-2`}>
              <div className="flex flex-col items-center justify-center w-full text-JWC-tertiary">
                {filteredMenuList.map((menu) => (
                  <>
                    <NavItem
                      key={menu.text}
                      text={menu.text}
                      textsize="text-p"
                      href={menu.href}
                      active={activeLink === menu.text}
                      activeHeight="h-6"
                      activeWidth="w-6"
                      position="left-0"
                      underline="border-b-8"
                      handleMenuClick={() => {
                        setActiveLink(menu.text);
                      }}
                      activeLink={activeLink}
                    />
                  </>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
