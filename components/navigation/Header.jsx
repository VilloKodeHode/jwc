//Header component
import { useContext } from "react";
import Navbar from "./organisms/Navbar";
import MENU_LIST from "@/data/menu_list";
import LogoComponent from "../atoms/Logo";
import HamburgerBar from "./organisms/HamburgerBar";
import { UserContext } from "@/context/UserContext";
import { NavigationContext } from "@/context/NavigationContext";
import { Banner } from "./organisms/Banner";
import { FloatingUtilsBar } from "./organisms/FloatingUtilBar";

export default function Header() {
  const { language, theme } = useContext(UserContext);
  const { setToggleDropDown } =
    useContext(NavigationContext);

  //TODO: See if logic can be moved (to utils?)
  const menuObj = MENU_LIST.find((menu) => menu.language === language);
  const menu_items = menuObj ? menuObj.menu_items : [];

  const drop_down = menuObj ? menuObj.drop_down : {};
  const drop_down_items = drop_down ? drop_down.drop_down_items : [];


  return (
    <>
      <Banner />
      <FloatingUtilsBar />
      <header
        className={`relative transition-all duration-1000 z-50 bg-opacity-[0.925] ${
          theme === "light" ? "bg-Villo-light-white10" : "bg-black"
        } flex flex-col w-full justify-center px-4 mx-auto sm:px-6 lg:px-12 z-10 backdrop-blur-[1px]`}
      >
        <div className="z-50 flex items-center justify-between">
          <div className="grid items-center h-[112px] min-w-[200px] gap-8 rounded-br-full">
            <div className="relative z-40 flex flex-row items-center">
              <LogoComponent
                onClick={() => {
                  handleMenuToggle();
                  setToggleDropDown(false);
                }}
              />
            </div>
          </div>
          <Navbar
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
          />

          <HamburgerBar
            menu_items={menu_items}
            drop_down={drop_down}
            drop_down_items={drop_down_items}
          />
        </div>
      </header>
    </>
  );
}
