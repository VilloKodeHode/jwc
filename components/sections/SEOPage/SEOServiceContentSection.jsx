import { ArrowCTA, ReadMoreButton } from "@/components/Buttons"
import { ResponsiveThemedH1, ResponsiveThemedH5 } from "../../Responsive text/ResponsiveText"
import Link from "next/link"

export const SEOServiceTopSection = ({ language, Theme }) => {
    return (
        <section className="py-12">
            <div className="flex flex-col items-start justify-center gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex w-full text-left">
                    <ResponsiveThemedH1>
                        {language === "Norwegian" ? "Trenger du mer besøkende på siden?" : "Need more visitors on your website?"}
                    </ResponsiveThemedH1>
                </div>
                <div className="animate-PageAppearRight">
                    <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                        {language === "Norwegian"
                            ? "Ønsker du å øke synligheten på nettet og tiltrekke trafikk til nettsiden din? Våre tilpassede SEO-tjenester er skapt for dine spesifikke forretningsmål. Enten du ønsker å oppnå topp rangering på Google eller dominere det lokale markedet, er vi eksperter på nøkkelordoptimalisering, on-page og off-page SEO-teknikker, samt innholdsforbedring. I tillegg gir vår gjennomsiktige rapportering deg muligheten til å følge fremgangen og se konkrete resultater."
                            : "Looking to boost online visibility and drive traffic to your website? Our tailored SEO services are designed for your unique business goals. Whether it's achieving top rankings on Google or local market dominance, we specialize in keyword optimization, on/off-page SEO, and content enhancement. Plus, our transparent reporting lets you track progress and see tangible results."}
                    </ResponsiveThemedH5>

                </div>
                <div className="grid justify-center gap-8 ml:grid-flow-col">
                    <div className="h-[60px] flex justify-start items-center max-w-fit">
                        <a href="#webContentYouGet" className="">
                            <ReadMoreButton Theme={Theme} className="">
                                {language === "Norwegian" ? "lær mer" : "learn more"}
                            </ReadMoreButton>
                        </a>
                    </div>
                    <div className="h-[60px] flex justify-start items-center">
                        <Link href="/contact" className="">
                            <ArrowCTA Theme={Theme} className="">
                                {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
                            </ArrowCTA>
                        </Link>
                    </div>

                </div>
            </div>
        </section>)
}


export const SEOServiceBottomSection = ({ language, Theme }) => {
    return (<section className="">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mt-10 text-center animate-PageAppearRight">
                <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Å velge meg betyr suksess. Vi tilpasser SEO-løsninger eksklusivt for din bedrift, forbedrer nettsidens innhold og struktur for høyere rangering. Vår ekspertise omfatter lokale SEO-strategier, transparent rapportering og maksimal online suksess. Med meg øker du trafikken og blir mer synlig for brukere. Velkommen til å forbedre din online tilstedeværelse."
                        : "Choosing me means success. We tailor SEO solutions exclusively for your business, improve your website's content and structure for higher rankings. Our expertise includes local SEO strategies, transparent reporting, and maximum online success. With me, you'll increase traffic and become more visible to users. Welcome to improving your online presence."}
                </ResponsiveThemedH5>
                <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Ikke la nettsiden din forbli ubemerket. Forbedre din online synlighet, øk organisk trafikk og forbedre konverteringer med våre ekspert SEO-tjenester. Ta kontakt i dag for å diskutere hvordan vi kan forbedre din SEO-strategi og løfte din bedrift til nye høyder i den digitale verden."
                        : "Don't let your website go unnoticed. Improve your online visibility, increase organic traffic, and enhance conversions with our expert SEO services. Contact us today to discuss how we can enhance your SEO strategy and elevate your business to new heights in the digital world."}
                </ResponsiveThemedH5>
            </div>
        </div>
    </section>
    )
}