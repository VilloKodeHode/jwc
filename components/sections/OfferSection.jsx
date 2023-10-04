import {
  ResponsiveThemedH2,
} from "../Responsive text/ResponsiveText";
import { OfferSectionPart } from "./sectionsParts/OfferSectionPart";

export const OfferSection = ({ language, Theme }) => {
  return (
    <div
      id="OfferSection"
      className={`w-screen overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12 ${Theme === "light" ? "bg-Villo-light-white15" : "bg-Villo-dark-black85"
        }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="px-12 text-center">
            {language === "Norwegian"
              ? "Villo Utvikling tilbyr:"
              : "Villo Development offers:"}
          </ResponsiveThemedH2>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap items-center justify-center md:gap-6">
            <OfferSectionPart
              language={language}
              Theme={Theme}
              norTitle="Høykvalitets nettsider"
              engTitle="High-Quality websites"
              norText="Med design som følger de siste trendene og den nyeste teknologien for en moderne nettside."
              engText="With design that follows the current trends and the latest the technology for a modern website."
              href="/services_provided/website"
            />
            <OfferSectionPart
              language={language}
              Theme={Theme}
              norTitle="Søkemotor-optimalisering"
              engTitle="Search engine optimization"
              norText="Vi øker trafikken til til nettside med et bredt spekter av SEO (Søkemotoroptimalisering) tjenester."
              engText="We increase traffic to your website with a comprehensive range of SEO (Search Engine Optimization) services."
              href="/services_provided/SEO"
            />
            <OfferSectionPart
              language={language}
              Theme={Theme}
              norTitle="Engasjerende nettinnhold"
              engTitle="Engaging webcontent"
              norText="Vi skaper engasjerende opplevelser på nettet som kombinerer kraftfulle ord med iøynefallende visuelle elementer."
              engText="We creating captivating online experiences that combine powerful words with eye-catching visuals."
              href="/services_provided/webcontent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// SEO:
// , designed to boost your online presence and drive organic traffic to your website.


// nettinnhold:
// forteller gripende historier og bruker fengende bilder for å engasjere publikum og skape en godt inntrykk.
// , telling compelling stories and using striking images to engage your audience and make a lasting impact.