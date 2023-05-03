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
    <div className={`flex items-center w-[800px] ${className}`}>
      <div className="flex-row justify-end hidden w-full gap-2 md:flex">
        {menu_items.map((menu) => (
          <NavItem
            onClick={() => {
              setActiveLink(menu.text);
              onClose();
            }}
            textSize="text-p0"
            textColor="text-JWC-black"
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
