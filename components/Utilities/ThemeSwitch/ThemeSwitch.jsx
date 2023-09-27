import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import Image from "next/image";
import LIGHTMODE from "./assets/lightmode.svg";
import DARKMODE from "./assets/darkmode.svg";
import { getCookie, setCookie } from "cookies-next";

const ThemeSwitch = ({ cookiesAccepted }) => {
  const { Theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Check if cookies are accepted and the theme cookie is set
    const storedTheme = cookiesAccepted ? getCookie("theme") : null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
    console.log("Is theme cookie set?", !!storedTheme);
  }, [setTheme, cookiesAccepted]);

  const toggleTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
      if (cookiesAccepted) {
        setCookie("theme", "dark", {
          maxAge: 30 * 24 * 60 * 60, // Cookie expiration in seconds (30 days in this example)
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
        className={` origin-top ${Theme === "light"
          ? "animate-ThemeSwitchSlideIn"
          : "animate-ThemeSwitchSlideOut pointer-events-none"
          }  w-8 h-8 absolute translate-x-1/2 origin-center -translate-y-1/2 top-1/2 hover:scale-110 right-1/2 transition`}
      />
      <Image
        src={DARKMODE}
        width={30}
        height={30}
        alt="themeswitch to lightmode"
        className={`origin-top ${Theme === "light"
          ? "animate-ThemeSwitchSlideOut pointer-events-none"
          : "animate-ThemeSwitchSlideIn "
          }  w-8 h-8 absolute translate-x-1/2 origin-center -translate-y-1/2 top-1/2 right-1/2 hover:scale-110 transition`}
      />
    </button>
  );
};

export default ThemeSwitch;
