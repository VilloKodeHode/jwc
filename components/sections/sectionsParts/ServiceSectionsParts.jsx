import { ResponsiveThemedH5, ThemedP } from "@/components/Responsive text/ResponsiveText"

export const ServicesSectionPart = ({
    language,
    Theme,
    norTitle,
    engTitle,
    norText,
    engText,
}) => {
    return (
        <div className="mt-5 md:mt-0 md:col-span-1 group cursor-default hover:scale-[1.02] active:scale-[1.02] transition-all duration-300">
            <div className={`overflow-hidden shadow sm:rounded-lg transition-transform duration-300 group-hover:outline ${Theme === "light"
                ? " group-hover:outline-Villo-light-white20"
                : " group-hover:outline-Villo-dark-black50"
                }`}>
                <div
                    className={`flex transition-colors duration-300 flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${Theme === "light"
                        ? "bg-Villo-light-white10 group-hover:bg-Villo-light-primary"
                        : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-primary"
                        } sm:p-6`}
                >
                    <div className="h-full ">
                        <ResponsiveThemedH5
                            className={`font-bold max-w-fit ${Theme === "light"
                                ? "group-hover:text-Villo-light-white"
                                : "group-hover:text-Villo-dark-black"
                                }`}
                        >
                            {language === "Norwegian" ? norTitle : engTitle}
                        </ResponsiveThemedH5>

                        <ThemedP
                            className={`mt-2 ${Theme === "light"
                                ? "group-hover:text-Villo-light-white"
                                : "group-hover:text-Villo-dark-black"
                                }`}
                        >
                            {language === "Norwegian" ? norText : engText}
                        </ThemedP>
                    </div>
                </div>
            </div>
        </div>
    )
}