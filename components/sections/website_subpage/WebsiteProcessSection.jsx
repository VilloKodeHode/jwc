import { TextFlex } from "../../Layout"
import { ResponsiveThemedH3 } from "../../Responsive text/ResponsiveText"
import { LogoProcessBullitin, SectionProcessPartSection } from "../sectionsParts/SectionProcessPartSection"
import { ResponsiveThemedH2, ThemedP } from "../../Responsive text/ResponsiveText";
import { ServicesSectionPart } from "../sectionsParts/ServiceSectionsParts";


export const WebsiteProcessSection = ({ language, Theme, id }) => {
    return (
        <section className="grid justify-center items-center w-full bg-Villo-tertiary min-h-[35vh] text-left xl:gap-0 gap-12">
            <TextFlex>
                <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
                    {language === "Norwegian"
                        ? "Hvorfor du burde velge meg som din nettside-utvikler..."
                        : "Why you should choose me as your website-developer..."}
                </ResponsiveThemedH3>
            </TextFlex>
            <div id={id} className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15">

                <SectionProcessPartSection Theme={Theme} language={language} engTitle="You get:" norTitle="Du får:">

                    <LogoProcessBullitin Theme={Theme} language={language}>
                        {language === "Norwegian"
                            ? "Ingen mellomledd som tar en stor del av budsjettet. Vi avtaler ferdig pris før prosjektet starter"
                            : "No middleman that takes a big part of the budget"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Grundig forarbeid som er tilpasset dine spesifikke behov"
                            : "Preparatory work that is tailored to your specific needs"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Full innsikt og mulighet til å gi tilbakemeldinger under hele utviklingsprosessen."
                            : "Insight and the opportunity to provide feedback throughout the entire development process."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Fornøydhetsgaranti! Resultatet skal bli som avtalt, og jeg strekker meg ekstra langt for å gi et godt produkt."
                            : "Guarantee of quality! The result will be as agreed, and I will go the extra mile to give you a good product."}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Den nyeste teknologien blir brukt for å lage en nettside som er sikker, brukervennlig og skalerbar"
                            : "The latest technology will be used to create a website that is secure, user-friendly, and scalable"}
                    </LogoProcessBullitin>

                    <LogoProcessBullitin
                        Theme={Theme}
                        language={language}
                    >
                        {language === "Norwegian"
                            ? "Brukervennlig database integreres ved behov slik at du kan oppdatere innholdet på siden selv ved behov"
                            : "User-friendly database integration is done according to your needs so that you can update the content on the site yourself according to your needs"}
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
                            ? "Fornøydhetsgaranti! Resultatet skal bli som avtalt, og jeg strekker meg ekstra langt for å gi et godt produkt."
                            : "Guarantee of quality! The result will be as agreed, and I will go the extra mile to give you a good product."}
                    </LogoProcessBullitin>
                    <div className={`absolute -z-10 w-screen overflow-hidden translate-x-1/2 -translate-y-1/2 bg-opacity-50  ml:h-[90%] h-[97%] right-1/2 top-1/2 ${Theme === "light" ? "bg-Villo-light-white20" : "bg-Villo-dark-black85"} `} />
                </SectionProcessPartSection>

            </div>
        </section>
    )
}




export const ServicesSection = ({ language, Theme }) => {
    return (
        <div className="py-12 ">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <ResponsiveThemedH2 className="">
                        {language === "Norwegian" ? "Tjenester" : "Services"}
                    </ResponsiveThemedH2>
                    <ThemedP className={`mt-4`}>
                        {language === "Norwegian"
                            ? "Jeg tilbyr en rekke tjenester for å møte dine behov. Enten du trenger hjelp med nettsiden din, digital markedsføring eller noe i mellom, så har jeg deg dekket."
                            : "I offer a range of services to meet your needs. Whether you need help with your website, digital marketing, or anything in between, I've got you covered."}
                    </ThemedP>
                </div>

                <div className="mt-10 ">
                    <div className="md:grid md:grid-cols-2 md:gap-6">
                        <ServicesSectionPart
                            Theme={Theme}
                            language={language}
                            norTitle="Lage nettside"
                            engTitle="Website creation"
                            norText="Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv."
                            engText="I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive."
                        />
                        <ServicesSectionPart
                            Theme={Theme}
                            language={language}
                            norTitle="Nettinnhold"
                            engTitle="Webcontent"
                            norText="Jeg har kunnskap innen flere felt utenom programmering, som ernæring, pedagogikk og fysisk aktivitet. Jeg kan skrive nettinnhold som både er informativt og engasjerende."
                            engText="I'm knowledgeable in several fields outside of programming, like nutrition, pedagogy and physical activity. I can write content for your website that is both informative and engaging."
                        />
                        <ServicesSectionPart
                            Theme={Theme}
                            language={language}
                            norTitle="Nettdesign"
                            engTitle="Webdesign"
                            norText="Hvis du ikke vet hvordan du vil at nettsiden din skal se ut, kan jeg hjelpe deg med det. Jeg kan skape et design som passer dine behov og merkevare. Jeg kan også hjelpe deg med å skape ditt merkevare"
                            engText="If you dont know what you want your website to look like, I can help you with that. I can create a design that fits your needs and your brand. I can also help you create a brand if you dont have one."
                        />
                        <ServicesSectionPart
                            Theme={Theme}
                            language={language}
                            norTitle="Småjobber"
                            engTitle="Odd jobs"
                            norText="Hvis du trenger hjelp med noe som ikke er nevnt her, ikke nøl med å kontakte meg. Jeg er alltid åpen for nye utfordringer, og jeg er sikker på at vi kan finne en løsning."
                            engText="If you need help with something that is not listed here, dont hesitate to contact me. I'm always open to new challenges and I'm sure we can work something out."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
