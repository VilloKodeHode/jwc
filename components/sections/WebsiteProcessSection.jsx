import { TextFlex } from "../Layout"
import { ThemedH3 } from "../Responsive text/ResponsiveText"
import { WebsiteProcessBullitin, WebsiteProcessPartSection } from "./sectionsParts/WebsiteProcessPartSection"

export const WebsiteProcessSection = ({ language, Theme }) => {
    return (<section className="py-12">
        <section className="relative grid justify-center items-center py-8 w-full bg-Villo-tertiary my-8 min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ThemedH3 className="flex mb-12 text-center">
                    {language === "Norwegian"
                        ? "Hvorfor velge meg som din nettside-utvikler?"
                        : "Why you should choose me as your website-developer?"}
                </ThemedH3>
            </TextFlex>
            <div className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <WebsiteProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">
                    <WebsiteProcessBullitin norText="Ingen mellomledd som tar en stor del av budsjettet. Vi avtaler ferdig pris før prosjektet start" engText="No middleman that takes a big part of the budget" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Grundig forarbeid som er tilpasset dine spesifikke behov" engText="Preparatory work that is tailored to your specific needs" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Full innsikt og mulighet til å gi tilbakemeldinger under hele utviklingsprosessen." engText="Insight and the opportunity to provide feedback throughout the entire development process." Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Fornøydhetsgaranti! Resultatet skal bli som avtalt og jeg strekker meg ekstra langt for å gi et godt produkt." engText="Guarantee of quality! The result will be as agreed and I will go the extra mile to give you a good product." Theme={Theme} language={language} />
                    {/* </WebsiteProcessPartSection> */}

                    {/* <WebsiteProcessPartSection Theme={Theme} language={language} engTitle="Optimized website" norTitle="Optimaliserte nettside"> */}
                    <WebsiteProcessBullitin norText="Den nyeste teknologien blir brukt for å lage en nettside som er sikker, brukervennlig og skalerbar" engText="The latest technology will be used to create a website that is secure, user-friendly and scalable" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Brukervennlig database integreres ved behov slik at du kan oppdatere innholdet på siden selv ved behov" engText="User-friendly database integration is done according to your needs so that you can update the content on the site yourself according to your needs" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Søkemotoroptimalisering som gjør at du får mer trafikk til nettsiden og blir lettere å søke opp" engText="Search engine optimization that makes it easier for you to get more traffic to the site and make it easier to search for it" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Fornøydhetsgaranti! Resultatet skal bli som avtalt og jeg strekker meg ekstra langt for å gi et godt produkt." engText="Guarantee of quality! The result will be as agreed and I will go the extra mile to give you a good product." Theme={Theme} language={language} />
                    {/* </WebsiteProcessPartSection> */}

                    {/* <WebsiteProcessPartSection Theme={Theme} language={language} engTitle="Optimized websites" norTitle="Optimaliserte nettsider"> */}
                    <WebsiteProcessBullitin norText="Den nyeste teknologien blir brukt for å lage en nettside som er sikker, brukervennlig og skalerbar" engText="The latest technology will be used to create a website that is secure, user-friendly and scalable" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Brukervennlig database integreres ved behov slik at du kan oppdatere innholdet på siden selv ved behov" engText="User-friendly database integration is done according to your needs so that you can update the content on the site yourself according to your needs" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Søkemotoroptimalisering som gjør at du får mer trafikk til nettsiden og blir lettere å søke opp" engText="Search engine optimization that makes it easier for you to get more traffic to the site and make it easier to search for it" Theme={Theme} language={language} />
                    <WebsiteProcessBullitin norText="Fornøydhetsgaranti! Resultatet skal bli som avtalt og jeg strekker meg ekstra langt for å gi et godt produkt." engText="Guarantee of quality! The result will be as agreed and I will go the extra mile to give you a good product." Theme={Theme} language={language} />
                </WebsiteProcessPartSection>

            </div>
        </section>
    </section>)

}