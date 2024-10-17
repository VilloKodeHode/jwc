import Link from "next/link";
import {
  ResponsiveThemedH2,
  ResponsiveThemedH4,
  ThemedP,
} from "../../atoms/ResponsiveText";
import { ReadMoreButton } from "../../atoms/Buttons";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import MetaTags from "../../Utilities/Metatags";

export const OfferPageContent = () => {
  const {language} = useContext(UserContext);

  <MetaTags
  description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
  title="Villo Utvikling - Services"
  url="https://www.villoutvikling.com/services_provided"
/>

  return (
    <section
      id="OfferPageContent"
      className={`w-full overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12`}
    >
      <div className="mx-auto max-w-7xl ">
        <div className="text-center">
          <ResponsiveThemedH2 className="text-center">
            {language === "Norwegian"
              ? "Villo Utvikling tilbyr:"
              : "Villo Development offers:"}
          </ResponsiveThemedH2>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <OfferPagePart
              norTitle="Høykvalitets nettsider"
              engTitle="High-Quality websites"
              norText="Med design som følger de siste trendene og den nyeste teknologien for en moderne nettside."
              engText="With design that follows the current trends and the latest the technology for a modern website."
              href="/services_provided/website"
            />
            <OfferPagePart
              norTitle="Søkemotor-optimalisering"
              engTitle="Search engine optimization"
              norText="Øk trafikken til din nettside med et bredt spekter av SEO (Søkemotoroptimalisering) tjenester."
              engText="Increase traffic to your website with a comprehensive range of SEO (Search Engine Optimization) services."
              href="/services_provided/SEO"
            />
            <OfferPagePart
              norTitle="Engasjerende nettinnhold"
              engTitle="Engaging webcontent"
              norText="Engasjerende opplevelser på nettet som kombinerer kraftfulle ord med iøynefallende visuelle elementer."
              engText="Captivating experiences that combine powerful words with eye-catching visuals."
              href="/services_provided/webcontent"
            />
            <OfferPagePart
              norTitle="Content Management System (CMS)"
              engTitle="Content Management System (CMS)"
              norText="Integrer et innholdshånderingssystem for at du selv skal kunne styre innholdet på din nettside."
              engText="Integrate a content management system so that you can manage your content on your website."
              href="/services_provided/CMS"
            />
            <OfferPagePart
              norTitle="Sosiale media integrasjon"
              engTitle="Social media integration"
              norText="Koble sammen dine sosiale medier med din nettside for å vise fram innholdet ditt på en ny og spennende måte."
              engText="Connect your social media with your website to show content from your social media on a new and exciting way."
              href="/services_provided/sosialmedia_integration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const OfferPagePart = ({
  norTitle,
  engTitle,
  norText,
  engText,
  href,
}) => {
  const { theme, language } = useContext(UserContext);
  return (
    <div className="transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden max-w-sm transition-transform duration-300 shadow sm:rounded-lg`}
      >
        <div
          className={`grid gap-2 min-h-[240px] transition-colors duration-300  ${
            theme === "light"
              ? "bg-Villo-light-white15 group-hover:bg-Villo-light-white10"
              : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-black50"
          } p-6`}
        >
          <ResponsiveThemedH4 className={`font-bold max-w-fit `}>
            {language === "Norwegian" ? norTitle : engTitle}
          </ResponsiveThemedH4>
          <div className="mt-2">
            <ThemedP className={``}>
              {language === "Norwegian" ? norText : engText}
            </ThemedP>
          </div>
          <Link href={href} className="w-fit">
            <ReadMoreButton>
              {language === "Norwegian" ? "les mer" : "read more"}
            </ReadMoreButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
