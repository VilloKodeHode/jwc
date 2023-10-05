import { ThemedH4, ThemedLi } from "@/components/Responsive text/ResponsiveText"
import { LogoBullitinPoint } from "@/components/base components/LogoBullitinPoint"
import { AiOutlineCheck } from "react-icons/ai"

export const SectionProcessPartSection = ({ Theme, language, norTitle, engTitle, children }) => {
    return (
        <>
            <div className={`flex flex-col justify-center gap-4`}>
                <div className="flex items-center justify-center gap-2 mb-8">

                    <LogoBullitinPoint Theme={Theme} />
                    <ThemedH4 className="">
                        {language === "Norwegian"
                            ? norTitle
                            : engTitle}
                    </ThemedH4>
                </div>
                <div className={`flex flex-row flex-wrap justify-around p-8 max-w-5xl rounded-md  ${Theme === "light"
                    ? "bg-Villo-light-white10 hover:bg-Villo-light-white15"
                    : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
                    }`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export const LogoProcessBullitin = ({ Theme, children }) => {
    return (
        <div className={`flex relative group items-start min-h-[103px] p-8 m-2 transition-all gap-2 sm:rounded-lg 
  
            `}>
            {/* <LogoBullitinPointSmall Theme={Theme} /> */}
            <AiOutlineCheck className={`w-8 h-8 transition-all  ${Theme === "light"
                ? "text-Villo-light-primary group-hover:scale-125"
                : "text-Villo-dark-primary group-hover:scale-125"
                }`} />
            {/* <div className="flex flex-col justify-center h-full"> */}
            <ThemedLi className="max-w-xs list-none ">
                {children}
            </ThemedLi>
            {/* </div> */}
        </div>
    )
}


// ${Theme === "light"
// ? "bg-Villo-light-white10 hover:bg-Villo-light-white15"
// : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
// }