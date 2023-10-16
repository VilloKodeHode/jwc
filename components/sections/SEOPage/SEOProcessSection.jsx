import { TextFlex } from "../../Layout/Layout"
import { ResponsiveThemedH3 } from "../../Responsive text/ResponsiveText"
import { CheckProcessBullitin, SectionProcessPartSection } from "../ServiceSection"


export const SEOProcessSection = ({ language, Theme, id }) => {
    return (
        <section className="grid justify-center items-center w-full bg-Villo-tertiary min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
                    {language === "Norwegian"
                        ? "Hvorfor velge meg til å oppgradere din SEO..."
                        : "Why you should choose me upgrade your SEO..."}
                </ResponsiveThemedH3>
            </TextFlex>
            <div id={id} className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <SectionProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">
                    <CheckProcessBullitin Theme={Theme} language={language}>
                        {language === "Norwegian"
                            ? "Dra nytte av tilpassede SEO løsninger utviklet for å møte dine spesifikke forretningsbehov og mål."
                            : "Benefit from customized SEO solutions designed to meet your specific business needs and goals."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Oppnå høyere rangering på populære søkemotorer som Google, slik at nettsiden din blir lagt merke til av målgruppen din."
                            : "Achieve higher rankings on popular search engines like Google, ensuring your website gets noticed by your target audience."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? " Bruk strategisk nøkkelordoptimalisering for å øke nettsidens synlighet og relevans i søkeresultatene."
                            : "Harness the power of strategic keyword optimization to boost your website's visibility and relevance in search results."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Jeg forbedrer kvaliteten og relevansen til nettsidens innhold for å engasjere brukere og søkemotorer."
                            : "I enhance the quality and relevance of your website's content to engage users and search engines alike."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Min omfattende tilnærming inkluderer både on-page og off-page SEO teknikker for å maksimere din online suksess"
                            : "My comprehensive approach includes both on-page and off-page SEO techniques to maximize your online success"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Dominer ditt lokale marked med mine spesialiserte lokale SEO strategier, som tiltrekker flere lokale kunder til din virksomhet"
                            : "Dominate your local market with my specialized local SEO strategies, driving more local customers to your business"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Søkemotoroptimalisering som gjør at du får mer trafikk til nettsiden og blir lettere å søke opp"
                            : "Search engine optimization that makes it easier for you to get more traffic to the site and make it easier to search for it"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Følg din SEO fremgang med gjennomsiktig rapportering og analyser, som sikrer at du kan se de konkrete resultatene av min innsats."
                            : "Track your SEO progress with transparent reporting and analytics, ensuring you can see the tangible results of my efforts."}
                    </CheckProcessBullitin>
                    <div className={`absolute -z-10 w-screen overflow-hidden translate-x-1/2 -translate-y-1/2 bg-opacity-50  ml:h-[90%] h-[97%] right-1/2 top-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"} `} />
                </SectionProcessPartSection>
            </div>
        </section>
    )

}


