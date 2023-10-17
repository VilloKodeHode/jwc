import Image from "next/image";
import {
    ResponsiveH4,
    ResponsiveThemedH2,
    ResponsiveThemedH4,
    ThemedP,
} from "../../Responsive text/ResponsiveText";
import Link from "next/link";
import { WORKEDWITH_LIST } from "@/data/workedWith_list";

export const WorkedWithSection = ({ language, Theme }) => {
    const companyObj = WORKEDWITH_LIST.find(
        (company) => company.language === language
    );
    const COMPANY = companyObj ? companyObj.Company : [];
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <ResponsiveThemedH2 className="px-12 text-center">
                    {language === "Norwegian" ? "Erfaring" : "Experience"}
                </ResponsiveThemedH2>
            </div>
            <div className="mt-10">
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {COMPANY.map((company) => (
                        <Link
                            key={company.id}
                            className={`shadow hover:scale-105 ${company.name === "Kodeverket Bergen"
                                ? "shadow-[#7fe5d3]"
                                : company.name === "Jobloop"
                                    ? "shadow-[#f4a366]"
                                    : "shadow-white"
                                }  transition-all max-w-sm rounded-lg
                            ${Theme === "light"
                                    ? "bg-Villo-light-black50"
                                    : "bg-Villo-dark-black75"
                                }
                            `}
                            href={company.href}
                        //TODO få til at skyggefargene er forskjellige for hver enkelt company
                        // style={{
                        //     boxShadow: `2px 2px 7px ${company.color}`,
                        //     ':hover': { boxShadow: `20px 20px 70px ${company.color}` }
                        //   }}
                        >
                            <div className="grid items-center grid-flow-col gap-4 px-2 py-4">
                                <div className="flex items-center justify-start w-full h-28">
                                    <Image
                                        className="w-fit h-[90%]"
                                        src={company.imageUrl}
                                        alt={company.name}
                                        width={800}
                                        height={600}
                                    />
                                </div>
                                {/* <ResponsiveH4 className="font-medium text-Villo-dark-black">
                                    {company.name}
                                </ResponsiveH4> */}
                            </div>
                            <div
                                className={`flex flex-col transition-all justify-between min-h-[175px] p-6  ${Theme === "light"
                                    ? "bg-Villo-light-white10"
                                    : "bg-Villo-dark-black85"
                                    }`}
                            >
                                <ResponsiveThemedH4 className="font-medium">
                                    {company.name}
                                </ResponsiveThemedH4>
                                <ThemedP className="mt-2 text-sm">{company.jobDone}</ThemedP>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const NewWorkedWithSection = ({ language, Theme }) => {
    const companyObj = WORKEDWITH_LIST.find(
        (company) => company.language === language
    );
    const COMPANY = companyObj ? companyObj.Company : [];
    return (
        <div className="relative z-10 flex flex-col justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[30vh]">
            <div
                className={`absolute w-screen h-full translate-x-1/2  -z-10 right-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"
                    }`}
            />
            <div className="z-10 text-center">
                <ResponsiveThemedH2 className="px-12 text-center">
                    {language === "Norwegian" ? "Arbeidet hos" : "Worked at"}
                </ResponsiveThemedH2>
            </div>
            <div className="mt-10">
                <div className={`z-10 flex flex-wrap justify-center gap-1`}>
                    {COMPANY.map((company) => (
                        <Link
                            key={company.id}
                            href={company.href}
                            target={company.href ? "_blank" : undefined}
                            className={`overflow-hidden w-48 rounded-sm shadow-lg hover:scale-105 transition`}
                        >
                            <div
                                className={`z-20 group grid justify-center transition-all px-2 py-4 ${Theme === "light"
                                    ? "bg-Villo-light-white15 hover:bg-Villo-light-white10"
                                    : "bg-Villo-dark-black75 hover:bg-Villo-dark-black50"
                                    }`}
                            >
                                <div className="relative w-28 h-28">
                                    <p className="absolute z-10 text-center transition-all translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bottom-1/2 right-1/2">
                                        {company.progress === "in progress" ||
                                            company.progress === "under arbeid"
                                            ? company.progress
                                            : ""}
                                    </p>
                                    <Image
                                        className="object-contain w-full h-full filter grayscale"
                                        src={company.imageUrl}
                                        alt={company.name}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
