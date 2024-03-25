import { AiOutlineCheck } from "react-icons/ai";
import { useContext } from "react";
import { ResponsiveThemedH5, ThemedH4, ThemedLi, ThemedP } from "../../base_components/ResponsiveText";
import { LogoBullitinPoint } from "../../base_components/LogoBullitinPoint";
import { UserContext } from "../../Utilities/UserContext";


export const ServicesBenefit = ({ norTitle, engTitle, children }) => {
    const { theme, language } = useContext(UserContext);
  return (
    <>
      <div className={`z-20 flex flex-col justify-center gap-4`}>
        <div className="flex items-center justify-center gap-2 mb-8">
          <LogoBullitinPoint />
          <ThemedH4 className="">
            {language === "Norwegian" ? norTitle : engTitle}
          </ThemedH4>
        </div>
        <div
          className={`relative transition-all flex  flex-row flex-wrap lg:justify-around justify-center py-8 gap-8 max-w-5xl rounded-md  ${
            theme === "light"
              ? "bg-Villo-light-white10 shadow-Villo-light-white15"
              : "bg-Villo-dark-black85 shadow-Villo-dark-black75"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export const ServicesBenefitBullitin = ({ children }) => {
    const { theme, language } = useContext(UserContext);
  return (
    <div
      className={`flex relative group items-start min-h-[103px] px-4 transition-all gap-2 sm:rounded-lg 
  
            `}
    >
      <div>
        <AiOutlineCheck
          className={`w-8 h-8 transition-all  ${
            theme === "light"
              ? "text-Villo-light-primary group-hover:scale-125"
              : "text-Villo-dark-primary group-hover:scale-125"
          }`}
        />
      </div>
      {/* <div className="flex flex-col justify-center h-full"> */}
      <ThemedLi className="list-none md:max-w-xs ">{children}</ThemedLi>
      {/* </div> */}
    </div>
  );
};
