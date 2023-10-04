import { ThemedH4, ThemedLi } from "@/components/Responsive text/ResponsiveText"
import { LogoBullitinPoint, LogoBullitinPointSmall } from "@/components/base components/LogoBullitinPoint"

export const WebsiteProcessPartSection = ({ Theme, language, norTitle, engTitle, children }) => {
    return (
        <>
            <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <LogoBullitinPoint Theme={Theme} />
                    <ThemedH4 className="">
                        {language === "Norwegian"
                            ? norTitle
                            : engTitle}
                    </ThemedH4>
                </div>
                <div className="flex flex-row flex-wrap justify-center max-w-5xl gap-8">
                    {children}
                </div>
            </div>
        </>
    )
}

export const WebsiteProcessBullitin = ({ Theme, language, norText, engText }) => {
    return (
        <div className={`flex relative items-start min-h-[103px] p-8 transition-all gap-2 ml-8 sm:rounded-lg  ${Theme === "light"
            ? "bg-Villo-light-white10 hover:bg-Villo-light-white15"
            : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
            }`}>
            <LogoBullitinPointSmall Theme={Theme} />
            <div className="flex flex-col justify-center h-full">
                <ThemedLi className="max-w-xs list-none ">
                    {language === "Norwegian"
                        ? norText
                        : engText}
                </ThemedLi>
            </div>
        </div>
    )
}