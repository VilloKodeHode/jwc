import { useContext } from "react";
import NavItem, { DropDown, DropDownItem } from "./NavItem";
import { NavigationContext } from "../Utilities/NavigationContext";
import { UserContext } from "../Utilities/UserContext";


export default function Navbar({
  className,
  menu_items,
  drop_down,
  drop_down_items,
}) {

  const { toggleDropDown, setToggleDropDown, } = useContext(
    NavigationContext)
    const {currentPath} = useContext(UserContext);

  return (
    <div className={`flex w-full items-center justify-start ${className}`}>
      <div className="z-[100] hidden ml-8 md:block">
        {/* <ThemedP className="cursor-pointer">{drop_down.text}</ThemedP> */}
        <DropDown
          onClick={() => setToggleDropDown(!toggleDropDown)}
          textSize="text-p"
          className="-z-50"
        >
          {drop_down.text}
        </DropDown>

        <div
          className={`absolute ${
            toggleDropDown
              ? "scale-100 translate-x-[150%]"
              : "scale-0 translate-x-[-30%]"
          } bottom-1/2 translate-y-1/2 transition-all`}
        >
          <div className="flex flex-col justify-center items-start gap-2 min-h-[160px]">
            {/* <div className={`flex flex-col items-start justify-center gap-4 px-16 border-x-2 rounded-l-full rounded-r-full ${Theme === "light"
            ? "border-Villo-light-primary "
            : "border-Villo-dark-primary"
            }`}> */}

            {drop_down_items?.map((menu) => (
              <DropDownItem
                onClick={() => setToggleDropDown(false)}
                textSize="text-p0"
                key={menu.text}
                text={menu.text}
                href={menu.href}
                color={menu.color}
                icon={menu.icon}
              />
            ))}
          </div>
        </div>
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
