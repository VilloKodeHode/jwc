import Image from "next/image";
import { ThemedP } from "../Responsive text/ResponsiveText";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";
import { useContext } from "react";

export const SkillIcon = ({text, logo, colored = true, width = 60,}) => {
    const { Theme } = useContext(ThemeContext);
    return (
        <figure className={`relative flex justify-center p-6 m-4 rounded-md ${Theme === "light" ? "border-Villo-light-white10 bg-Villo-light-white20" : "border-Villo-dark-black50 bg-Villo-dark-black75"} border-2 group`}>
        <Image
          src={`/images/skills/${logo}-logo.png`}
          className={`relative z-10 w-[${width}px] aspect-auto m-auto duration-500 ${colored ? "saturate-[70%] group-hover:saturate-100" : "contrast-[85%] hover:contrast-100"}  group-hover:scale-125`}
          alt="html logo"
          height={width * 1.5}
          width={width * 1.5}
        />
        <div className="absolute duration-500 translate-x-1/2 translate-y-1/2 rounded-full group-hover:scale-125 bottom-1/2 right-1/2" />
        <span className="absolute font-bold text-center duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
          <ThemedP>{text}</ThemedP>
        </span>
      </figure>
    )
}