import { ResponsiveThemedH1, ThemedH5 } from "../Responsive text/ResponsiveText"

export const WebsiteServiceSection = ({ language, Theme }) => {
    return (<section className="py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
                <ResponsiveThemedH1>
                    {language === "Norwegian" ? "Trenger du ny nettside?" : "Need a new website?"}
                </ResponsiveThemedH1>
            </div>
            <div className="mt-10 text-center animate-PageAppearRight">
                <ThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv. Som profesjonell nettsidedesigner spesialiserer jeg meg på å lage imponerende og funksjonelle nettsteder som tilpasses dine unike behov og mål."
                        : "I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive. As a professional website designer, I specialize in crafting stunning and functional websites that cater to your unique needs and goals."}
                </ThemedH5>
                <ThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Med års erfaring innen feltet forstår jeg betydningen av en sterk tilstedeværelse på nett i dagens digitale tidsalder. Mine tjenester er skreddersydd for enkeltpersoner og bedrifter som ønsker å etablere eller forbedre sin online tilstedeværelse. Jeg tar en personlig tilnærming til hvert prosjekt, slik at nettstedet ditt ikke bare ser visuelt tiltalende ut, men også fungerer sømløst på alle enheter."
                        : "With years of experience in the field, I understand the importance of a strong online presence in today's digital age. My services are tailored to individuals and businesses looking to establish or enhance their online footprint. I take a personalized approach to every project, ensuring that your website not only looks visually appealing but also functions seamlessly across devices."}
                </ThemedH5>
                <ThemedH5 className={`mt-4 font-normal`}>
                    {language === "Norwegian"
                        ? "Enten du lanserer en helt ny nettside eller ønsker å fornye den eksisterende, er jeg her for å gjøre din visjon til virkelighet. Fra brukervennlig navigasjon til iøynefallende designelementer, legger jeg nøye vekt på hver detalj. La oss samarbeide for å skape en nettside som ikke bare gjenspeiler merket ditt, men også gir resultater og etterlater et varig inntrykk på dine besøkende"
                        : "Whether you're launching a brand-new website or looking to revamp your existing one, I'm here to turn your vision into a reality. From user-friendly navigation to eye-catching design elements, I pay meticulous attention to every detail. Let's work together to create a website that not only reflects your brand but also drives results and leaves a lasting impression on your visitors."}
                </ThemedH5>
            </div>
        </div>
    </section>)

}