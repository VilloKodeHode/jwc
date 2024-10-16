import { useContext, useEffect } from "react";
import Image from "next/image";
import LIGHTMODE from "./assets/lightmode.svg";
import DARKMODE from "./assets/darkmode.svg";
import { getCookie, setCookie } from "cookies-next";
import { UserContext } from "@/context/UserContext";

const ThemeSwitch = () => {
  const { theme, setTheme, cookiesAccepted } = useContext(UserContext);

  useEffect(() => {
    // Check if cookies are accepted and the theme cookie is set
    const storedTheme = cookiesAccepted ? getCookie("theme") : null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme, cookiesAccepted]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      if (cookiesAccepted) {
        setCookie("theme", "dark", {
          maxAge: 30 * 24 * 60 * 60, // Cookie expiration in seconds (30 days)
        });
      }
    } else {
      setTheme("light");
      if (cookiesAccepted) {
        setCookie("theme", "light", {
          maxAge: 30 * 24 * 60 * 60,
        });
      }
    }
  };

  return (
    <button
      className="relative grid w-[24px] h-[24px] grid-flow-col"
      onClick={toggleTheme}
    >
      <Image
        src={LIGHTMODE}
        width={30}
        height={30}
        alt="themeswitch to darkmode"
        className={` origin-top ${theme === "light"
          ? "animate-ThemeSwitchSlideIn"
          : "animate-ThemeSwitchSlideOut pointer-events-none"
          }  max-w-8 h-8 absolute translate-x-1/2 origin-center -translate-y-1/2 top-1/2 hover:scale-110 right-1/2 transition`}
      />
      <div>
        <Image
          src={DARKMODE}
          width={30}
          height={30}
          alt="themeswitch to lightmode"
          className={`origin-top ${theme === "light"
            ? "animate-ThemeSwitchSlideOut pointer-events-none"
            : "animate-ThemeSwitchSlideIn"
            } max-w-8 h-8 absolute translate-x-1/2 origin-center -translate-y-1/2 top-1/2 right-1/2 hover:scale-110 transition`}
        />
      </div>
    </button>
  );
};

export default ThemeSwitch;
