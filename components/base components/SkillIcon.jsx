import Image from "next/image";
import { ThemedP } from "../Responsive text/ResponsiveText";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";
import { useContext } from "react";

export const SkillIcon = ({ text, logo, colored = true, width = 60 }) => {
  const { Theme } = useContext(ThemeContext);
  return (
    <figure
      className={`relative hover:scale-105 transition-all flex justify-center p-6 m-4 rounded-sm shadow-lg ${
        Theme === "light"
          ? "bg-Villo-light-white15 hover:bg-Villo-light-white10"
          : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
      } group`}
    >
      <Image
        src={`/images/skills/${logo}-logo.png`}
        className={`relative z-10 w-[${width}px] transition aspect-auto m-auto ${
          colored
            ? "saturate-[70%] group-hover:saturate-100"
            : "contrast-[85%] hover:contrast-100"
        }  group-hover:scale-125`}
        alt="html logo"
        height={width * 1.5}
        width={width * 1.5}
      />
      <div className="absolute translate-x-1/2 translate-y-1/2 rounded-full group-hover:scale-125 bottom-1/2 right-1/2" />
      <span className="absolute font-bold text-center translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-6 right-1/2">
        <ThemedP>{text}</ThemedP>
      </span>
    </figure>
  );
};
