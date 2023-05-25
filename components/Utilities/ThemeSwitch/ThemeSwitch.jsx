import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Image from "next/image";
import LIGHTMODE from "./assets/lightmode.svg";
import DARKMODE from "./assets/darkmode.svg";

const ThemeSwitch = () => {
  const { Theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("Current theme:", Theme);
  };
  return (
    <button
      className="relative grid w-[24px] h-[24px] grid-flow-col"
      onClick={toggleTheme}
    >
      <Image
        src={LIGHTMODE}
        width={320}
        height={320}
        alt="themeswitch"
        className={` ${
          Theme === "light"
            ? "animate-ThemeSwitchSlideIn"
            : "animate-ThemeSwitchSlideOut pointer-events-none"
        }  w-5 h-5 absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 `}
      />
      <Image
        src={DARKMODE}
        width={320}
        height={320}
        alt="themeswitch"
        className={` ${
          Theme === "light"
            ? "animate-ThemeSwitchSlideOut pointer-events-none"
            : "animate-ThemeSwitchSlideIn "
        }  w-5 h-5 absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 `}
      />
    </button>
  );
};

export default ThemeSwitch;
