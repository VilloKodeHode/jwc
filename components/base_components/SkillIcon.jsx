import Image from "next/image";
import { ThemedP } from "./ResponsiveText";
import { useContext } from "react";
import { UserContext } from "../Utilities/UserContext";

export const SkillIcon = ({ text, logo, colored = true, width = 60 }) => {
  const { theme } = useContext(UserContext);
  return (
    <figure
      className={`relative z-20 hover:scale-105 transition-all flex justify-center p-6 m-4 rounded-sm shadow-lg ${
        theme === "light"
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
      <div className="absolute translate-x-1/2 translate-y-1/2 rounded-full -z-50 group-hover:scale-125 bottom-1/2 right-1/2" />
      <span className="absolute top-0 font-bold text-center transition-all translate-x-1/2 opacity-0 select-none -z-10 w-max group-hover:opacity-100 group-hover:-top-6 right-1/2">
        <ThemedP>{text}</ThemedP>
      </span>
    </figure>
  );
};
