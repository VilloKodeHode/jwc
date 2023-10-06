import { TextFlex } from "../../Layout"
import { ResponsiveThemedH3 } from "../../Responsive text/ResponsiveText"
import { LogoProcessBullitin, SectionProcessPartSection } from "../sectionsParts/SectionProcessPartSection"

export const WebcontentProcessSection = ({ language, Theme }) => {
    return (<section className="py-12">
        <section className="relative grid justify-center items-center py-8 w-full bg-Villo-tertiary min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
                    {language === "Norwegian"
                        ? "Hvorfor velge meg som din nettinnhold-skaper..."
                        : "Why you should choose me as your webcontent-creator..."}
                </ResponsiveThemedH3>
            </TextFlex>
            <div className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <SectionProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">
                    <LogoProcessBullitin Theme={Theme} language={language}>
                        {language === "Norwegian"
                            ? "Dra nytte av tilpassede SEO løsninger utviklet for å møte dine spesifikke forretningsbehov og mål."
                            : "Benefit from customized SEO solutions designed to meet your specific business needs and goals."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Oppnå høyere rangering på populære søkemotorer som Google, slik at nettsiden din blir lagt merke til av målgruppen din."
                            : "Achieve higher rankings on popular search engines like Google, ensuring your website gets noticed by your target audience."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? " Bruk strategisk nøkkelordoptimalisering for å øke nettsidens synlighet og relevans i søkeresultatene."
                            : "Harness the power of strategic keyword optimization to boost your website's visibility and relevance in search results."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Vi forbedrer kvaliteten og relevansen til nettsidens innhold for å engasjere brukere og søkemotorer."
                            : "We enhance the quality and relevance of your website's content to engage users and search engines alike."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Vår omfattende tilnærming inkluderer både on-page og off-page SEO teknikker for å maksimere din online suksess"
                            : "Our comprehensive approach includes both on-page and off-page SEO techniques to maximize your online success"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Dominer ditt lokale marked med våre spesialiserte lokale SEO strategier, som tiltrekker flere lokale kunder til din virksomhet"
                            : "Dominate your local market with our specialized local SEO strategies, driving more local customers to your business"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Søkemotoroptimalisering som gjør at du får mer trafikk til nettsiden og blir lettere å søke opp"
                            : "Search engine optimization that makes it easier for you to get more traffic to the site and make it easier to search for it"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Følg din SEO fremgang med gjennomsiktig rapportering og analyser, som sikrer at du kan se de konkrete resultatene av våre innsats."
                            : "Track your SEO progress with transparent reporting and analytics, ensuring you can see the tangible results of our efforts."}
                    </LogoProcessBullitin>
                </SectionProcessPartSection>
            </div>
        </section>
    </section>)

}



