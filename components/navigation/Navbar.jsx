import { useContext } from "react";
import NavItem from "./NavItem";

import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import MENU_LIST from "./menu_list";

export default function Navbar({
  activeLink,
  setActiveLink,
  onClose,
  className,
}) {
  const { language } = useContext(LanguageContext);

  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];

  return (
    <div className={`flex justify-end items-center w-[800px] ${className}`}>
      <div className="flex-row hidden h-[112px] items-center rounded-bl-full gap-2 w-fit md:flex">
        {menu_items.map((menu) => (
          <NavItem
            onClick={() => {
              setActiveLink(menu.text);
              onClose();
            }}
            textSize="text-p"
            textColor="text-JWC-white"
            key={menu.text}
            text={menu.text}
            href={menu.href}
            color={menu.color}
            active={activeLink === menu.text}
            activeLink={activeLink}
            icon={menu.icon}
          />
        ))}
      </div>
    </div>
  );
}
