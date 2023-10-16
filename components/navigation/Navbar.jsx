import { useState } from "react";
import { ThemedP } from "../Responsive text/ResponsiveText";
import NavItem, { DropDown, DropDownItem, DropdownMenu } from "./NavItem";
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar({
  // onClose,
  className,
  Theme,
  language,
  currentPath,
  menu_items,
  drop_down,
  drop_down_items,
  toogleDropDown,
  setToogleDropDown,

}) {





  return (
    <div className={`flex w-full items-center justify-start ${className}`}>

      <div className="z-[100] hidden ml-8 md:block">

        {/* <ThemedP className="cursor-pointer">{drop_down.text}</ThemedP> */}
        <DropDown
          onClick={() => setToogleDropDown(!toogleDropDown)}
          textSize="text-p"
          Theme={Theme}
          language={language}
          currentPath={currentPath}
          className="-z-50"

        >{drop_down.text}</DropDown>


        <div className={`absolute ${toogleDropDown ? "scale-100 translate-x-[150%]" : "scale-0 translate-x-[-30%]"} bottom-1/2 translate-y-1/2 transition-all`}>

          <div className="flex flex-col justify-center items-start gap-2 min-h-[160px]">
            {/* <div className={`flex flex-col items-start justify-center gap-4 px-16 border-x-2 rounded-l-full rounded-r-full ${Theme === "light"
            ? "border-Villo-light-primary "
            : "border-Villo-dark-primary"
            }`}> */}

            {drop_down_items.map((menu) => (

              <DropDownItem
                onClick={() => setToogleDropDown(false)}
                textSize="text-p0"
                key={menu.text}
                text={menu.text}
                href={menu.href}
                color={menu.color}
                icon={menu.icon}
                Theme={Theme}
                language={language}
                currentPath={currentPath}
              />
            ))}

          </div>
        </div>
      </div>
      <div className="flex-row hidden justify-end h-[112px] items-center rounded-bl-full gap-8 w-full md:flex">

        {menu_items.map((menu) => (

          <NavItem
            textSize="text-p"
            onClick={() => setToogleDropDown(false)}
            key={menu.text}
            text={menu.text}
            href={menu.href}
            color={menu.color}
            icon={menu.icon}
            Theme={Theme}
            language={language}
            currentPath={currentPath}
          />
        ))}
      </div>

    </div>
  );
}
