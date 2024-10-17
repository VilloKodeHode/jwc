import { SiGithub, SiLinkedin } from "react-icons/si";
import LanguageSwitch from "../../features/LanguageSwitch/LanguageSwitch";
import ThemeSwitch from "../../features/ThemeSwitch/ThemeSwitch";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { NavigationContext } from "@/context/NavigationContext";

export const Banner = () => {
  const { theme } = useContext(UserContext);
  const { notTop } = useContext(NavigationContext);
  return (
    <div
      className={`relative transition-colors bg-opacity-[0.93] duration-1000 backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6 ${
        theme === "light"
          ? "bg-Villo-light-white15 text-Villo-light-black"
          : "bg-black text-Villo-dark-white10"
      } `}
    >
      <div
        className={`grid transition-all z-40 grid-flow-col gap-12
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
      >
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/VilloKodeHode"
          target="_blank"
          className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
        >
          <SiLinkedin
            className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
          />
        </a>
        <a
          href="https://github.com/VilloKodeHode"
          target="_blank"
          className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
        >
          <SiGithub
            className={`z-10 w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
          />
        </a>
      </div>
    </div>
  );
};
