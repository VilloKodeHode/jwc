import { ResponsiveThemedH1, ResponsiveThemedH5, ThemedH5 } from "../../Responsive text/ResponsiveText"

export const WebcontentServiceTopSection = ({ language, Theme }) => {
    return (<section className="py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <ResponsiveThemedH1>
                    {language === "Norwegian" ? "Trenger du nettinnhold?" : "Need webcontent?"}
                </ResponsiveThemedH1>
            </div>
            <div className="mt-10 text-center animate-PageAppearRight">
                <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Levering av engasjerende og innflytelsesrik webinnhold er min ekspertise. Jeg forstår at innholdet på nettstedet ditt spiller en avgjørende rolle i å tiltrekke og beholde besøkende. Med en lidenskap for effektiv kommunikasjon og en evne for kreativitet, tilbyr jeg profesjonelle tjenester innen webinnholdsskaping til bedrifter og enkeltpersoner som ønsker å skape et varig inntrykk på nettet."
                        : "Delivering engaging and impactful web content is my expertise. I understand that the content on your website plays a pivotal role in attracting and retaining visitors. With a passion for effective communication and a flair for creativity, I offer professional web content creation services to businesses and individuals looking to make a lasting impression online."}
                </ResponsiveThemedH5>
                <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Med en lidenskap for effektiv kommunikasjon og en evne for kreativitet, tilbyr jeg profesjonelle tjenester innen webinnholdsskaping til bedrifter og enkeltpersoner som ønsker å skape et varig inntrykk på nettet. Min tilnærming til innholdsskaping er skreddersydd for dine unike behov og mål."
                        : "With a passion for effective communication and a flair for creativity, I offer professional web content creation services to businesses and individuals looking to make a lasting impression online. My approach to content creation is tailored to your unique needs and objectives."}
                </ResponsiveThemedH5>
                <ResponsiveThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Enten du trenger engasjerende blogginnlegg, informative artikler, overbevisende produktbeskrivelser eller engasjerende innhold for sosiale medier, har jeg ferdighetene som kreves. Jeg gjennomfører grundig research for å sikre at innholdet ikke bare er velinformert, men også relevant for din målgruppe."
                        : "Whether you require compelling blog posts, informative articles, persuasive product descriptions, or engaging social media content, I have the skills to deliver. I conduct thorough research to ensure that the content is not only well-informed but also relevant to your target audience."}
                </ResponsiveThemedH5>
            </div>
        </div>
    </section>)
}