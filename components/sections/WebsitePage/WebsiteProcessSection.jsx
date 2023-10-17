import { TextFlex } from "../../Layout/Layout"
import { ResponsiveThemedH3 } from "../../Responsive text/ResponsiveText"
import { CheckProcessBullitin, SectionProcessPartSection } from "../ServiceSection"





export const WebsiteProcessSection = ({ language, Theme, id }) => {
    return (
        <section className="grid justify-center items-center w-full min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
                    {language === "Norwegian"
                        ? "Hvorfor du burde velge meg som din nettside-utvikler..."
                        : "Why you should choose me as your website-developer..."}
                </ResponsiveThemedH3>
            </TextFlex>
            <div id={id} className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <SectionProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">

                    <CheckProcessBullitin Theme={Theme} language={language}>
                        {language === "Norwegian"
                            ? "Ingen mellomledd som tar en stor del av budsjettet. Vi avtaler ferdig pris før prosjektet starter"
                            : "No middleman that takes a big part of the budget. A a final price is set before the project starts"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Grundig forarbeid med designmal og markedsundersøkelser som er tilpasset dine spesifikke behov"
                            : "Preparatory work with a design brief and market research that is tailored to your specific needs"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Full innsikt og mulighet til å gi tilbakemeldinger under hele utviklingsprosessen."
                            : "Insight and the opportunity to provide feedback throughout the entire development process."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Fornøydhetsgaranti! Resultatet skal bli som avtalt, og jeg strekker meg ekstra langt for å gi et godt produkt."
                            : "Guarantee of quality! The result will be as agreed, and I will go the extra mile to give you a good product."}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Den nyeste teknologien blir brukt for å lage en nettside som er sikker, brukervennlig og skalerbar"
                            : "The latest technology will be used to create a website that is secure, user-friendly, and scalable"}
                    </CheckProcessBullitin>

                    <CheckProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Brukervennlig database integreres ved behov slik at du kan oppdatere innholdet på siden selv ved behov"
                            : "User-friendly database integration is done according to your needs so that you can update the content on the site yourself according to your needs"}
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
                            ? "Full support på opplæring av hvordan du kan styre innholdet på nettsiden din."
                            : "Full support during learning of how you can manage the content on your website."}
                    </CheckProcessBullitin>
                    <div className={`absolute -z-10 w-screen overflow-hidden translate-x-1/2 -translate-y-1/2 bg-opacity-50  ml:h-[90%] h-[97%] right-1/2 top-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"} `} />
                </SectionProcessPartSection>

            </div>
        </section>
    )
}




