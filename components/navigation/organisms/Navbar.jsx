import { useContext } from "react";
import NavItem, { DropDown, DropDownItem } from "../molecules/NavItem";
import { NavigationContext } from "@/context/NavigationContext";

export default function Navbar({
  className,
  menu_items,
  drop_down,
  drop_down_items,
}) {
  const { toggleDropDown, setToggleDropDown } = useContext(NavigationContext);

  return (
    <div className={`flex w-full items-center justify-start ${className}`}>
      <div className="z-[100] hidden ml-8 md:block">
        {/* <DropDown
          onClick={() => setToggleDropDown(!toggleDropDown)}
          textSize="text-p"
          className="-z-50"
          href="/services_provided"
        >
          {drop_down.text}
        </DropDown> */}

        {/* <div
          className={`absolute ${
            toggleDropDown
              ? "scale-100 translate-x-[50%]"
              : "scale-0 translate-x-[-30%]"
          } bottom-1/2 translate-y-1/2 transition-all`}
        >
          <div className="grid items-start justify-center grid-flow-col grid-rows-3 gap-2 gap-x-8">
            {drop_down_items?.map((menu) => (
              <DropDownItem
                onClick={() => setToggleDropDown(false)}
                textSize="text-p"
                key={menu.text}
                text={menu.text}
                href={menu.href}
                color={menu.color}
                icon={menu.icon}
              />
            ))}
          </div>
        </div> */}
      </div>
      <div className="flex-row hidden justify-end h-[112px] items-center rounded-bl-full gap-8 w-full md:flex">
        {menu_items.map((menu) => (
          <NavItem
            textSize="text-p"
            onClick={() => setToggleDropDown(false)}
            key={menu.text}
            text={menu.text}
            href={menu.href}
            color={menu.color}
            icon={menu.icon}
          />
        ))}
      </div>
    </div>
  );
}
