import Image from "next/image";
import { SimpleLogoComponent } from "@/components/base components/Logo";
import {

    ResponsiveThemedH3,

    ResponsiveThemedP,
} from "../../Responsive text/ResponsiveText";


export const CompanyInfo = ({ language, Theme }) => {
    return (
        <div className="grid max-w-7xl justify-center items-center py-4 ml:py-24 min-h-[calc(50dvh)]">
            <div className="animate-PageAppearRight">
                <div
                    className={`sm:rounded-lg grid transition-colors duration-1000  ${Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
                        }`}
                >
                    <div
                        className={`col-span-1 ml:py-12 h-full flex flex-col justify-center items-center`}
                    >
                        <SimpleLogoComponent />

                        <ResponsiveThemedH3 className="py-5 text-bold">
                            Norsk webutvikler
                        </ResponsiveThemedH3>
                        <ResponsiveThemedP className="max-w-5xl px-8 pb-5 ">
                            {language === "Norwegian"
                                ? "Det er ingenting som gir meg større glede enn å se hvordan mine tjenester har en positiv innvirkning på kundens virksomhet. Målet mitt er å bygge sterke, langsiktige og verdifulle forhold med kundene mine. Dette oppnås ved å levere tjenester av høy kvalitet og åpen kommunikasjonen gjennom arbeidesprosessen."
                                : "Seeing my services make a positive impact on a customer's business is what I love the most. My goal is to build strong, long-lasting, and valuable relationships with my customers. I do this by providing high-quality services and open communication throughout the work process."}
                        </ResponsiveThemedP>
                        <ResponsiveThemedP className="max-w-5xl px-8 pb-5 ">
                            {language === "Norwegian"
                                ? "Min visjon er å lage gode nettsider for små og mellomstore bedrifter, uten at det skal bli for dyrt, men allikevel å tilby god kvalitet med de nyeste webteknologiene, søkemotoroptimalisering og innhold."
                                : "My vision is to create good websites for small and medium-sized businesses without it becoming too expensive, while still offering high quality with the latest web technologies, search engine optimization, and content."}
                        </ResponsiveThemedP>
                        <ResponsiveThemedP className="max-w-5xl px-8 pb-5 ">
                            {language === "Norwegian"
                                ? ""
                                : ""}
                        </ResponsiveThemedP>
                    </div>

                </div>
            </div>
        </div>
    );
};