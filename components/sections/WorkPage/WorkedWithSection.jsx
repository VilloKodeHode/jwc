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
    const companyObj = WORKEDWITH_LIST.find((client) => client.language === language);
    const COMPANY = companyObj ? companyObj.Company : [];
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <ResponsiveThemedH2 className="px-12 text-center">
                    {language === "Norwegian" ? "Jobbet med" : "Worked with"}
                </ResponsiveThemedH2>
            </div>
            <div className="mt-10">
                <div className="flex items-center justify-center gap-1">
                    {COMPANY.map((client) => (
                        <Link
                            key={client.id}
                            className={`overflow-hidden bg-[${client.color}] max-w-sm rounded-lg shadow shadow-[${client.color}]`}
                            href={client.href}
                        >
                            <div className="grid items-center grid-flow-col gap-4 px-2 py-4">
                                <div className="w-28 h-28">
                                    <Image
                                        className="w-28 h-28"
                                        src={client.imageUrl}
                                        alt={client.name}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <ResponsiveH4 className="font-medium text-Villo-dark-black">
                                    {client.name}
                                </ResponsiveH4>
                            </div>
                            <div
                                className={`h-full p-6  ${Theme === "light"
                                    ? "bg-Villo-light-white10"
                                    : "bg-Villo-dark-black85"
                                    }`}
                            >
                                <ResponsiveThemedH4 className="font-medium">
                                    {client.name}
                                </ResponsiveThemedH4>
                                <ThemedP className="mt-2 text-sm">{client.jobDone}</ThemedP>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const NewWorkedWithSection = ({ language, Theme }) => {
    const companyObj = WORKEDWITH_LIST.find((company) => company.language === language);
    const COMPANY = companyObj ? companyObj.Company : [];
    return (

        <div className="relative z-10 flex flex-col justify-center py-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-[30vh]">
            <div className={`absolute w-screen h-full translate-x-1/2  -z-10 right-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"}`} />
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
                                    <p className="absolute z-10 text-center transition-all translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 bottom-1/2 right-1/2">{company.progress === "in progress" || company.progress === "under arbeid" ? company.progress : ""}</p>
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

