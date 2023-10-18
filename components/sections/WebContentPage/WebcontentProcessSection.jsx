import { TextFlex } from "../../Layout/Layout"
import { ResponsiveThemedH3 } from "../../Responsive text/ResponsiveText"
import { CheckProcessBullitin, SectionProcessPartSection } from "../ServiceSection"


export const WebcontentProcessSection = ({ language, Theme, id }) => {
    return (
        <section className="grid justify-center items-center w-full bg-Villo-tertiary min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
                    {language === "Norwegian"
                        ? "Hvorfor velge meg som din nettinnhold-skaper..."
                        : "Why you should choose me as your webcontent-creator..."}
                </ResponsiveThemedH3>
            </TextFlex>
            <div id={id} className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <SectionProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">
                    <CheckProcessBullitin Theme={Theme} language={language}>
                        {language === "Norwegian"
                            ? "Engasjerende og brukersentrert innhold som fanger målgruppens oppmerksomhet og gir en enestående brukeropplevelse."
                            : "Engaging and user-centric content that attracts your target audience and drives engagement."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Økt kvaliteten og relevansen til webinnholdet ditt for å engasjere både brukere og søkemotorer."
                            : "Elevated quality and relevance of your web content to engage both users and search engines."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Skreddersydde webinnholdsløsninger som samsvarer med dine spesifikke forretningsbehov og mål."
                            : "Tailor-made web content solutions designed to align with your specific business needs and goals."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Webinnhold som er både visuelt tiltalende og enkelt å navigere for målgruppen."
                            : "Web content that is not only visually appealing but also easy to navigate for your audience."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Overholdt prosjektfrister for å sikre at webinnholdet er tilgjengelig når du trenger det."
                            : "Consistent project deadlines to ensure your web content is available when you need it."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Webinnhold som fungerer sømløst på ulike enheter og skjermstørrelser."
                            : "Web content that works seamlessly across various devices and screen sizes."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Opprettholdt åpen kommunikasjon for å sikre at dine krav blir møtt og forventninger overskrides."
                            : "Continuous open communication channels to ensure your requirements are met and expectations are exceeded."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Innhold som treffer målgruppen din, oppfordrer til interaksjon og bygger merkevarelojalitet."
                            : "Content that resonates with your target audience, encouraging interaction and building brand loyalty."}
                    </CheckProcessBullitin>
                    <div className={`absolute -z-10 w-screen overflow-hidden translate-x-1/2 -translate-y-1/2 bg-opacity-50  ml:h-[90%] h-[97%] right-1/2 top-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"} `} />
                </SectionProcessPartSection>
            </div>
        </section>
    )

}



