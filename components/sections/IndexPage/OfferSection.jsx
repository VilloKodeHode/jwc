import Link from "next/link";
import {
  ResponsiveThemedH2, ResponsiveThemedH4, ThemedP,
} from "../../Responsive text/ResponsiveText";
import CallToActionButton from "../../Buttons";


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
              norText="Jeg øker trafikken til til nettside med et bredt spekter av SEO (Søkemotoroptimalisering) tjenester."
              engText="I increase traffic to your website with a comprehensive range of SEO (Search Engine Optimization) services."
              href="/services_provided/SEO"
            />
            <OfferSectionPart
              language={language}
              Theme={Theme}
              norTitle="Engasjerende nettinnhold"
              engTitle="Engaging webcontent"
              norText="Jeg skaper engasjerende opplevelser på nettet som kombinerer kraftfulle ord med iøynefallende visuelle elementer."
              engText="I creating captivating online experiences that combine powerful words with eye-catching visuals."
              href="/services_provided/webcontent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export const OfferSectionPart = ({
  language,
  Theme,
  norTitle,
  engTitle,
  norText,
  engText,
  href
}) => {
  return (
    <div className="mt-5  transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden max-w-sm transition-transform duration-300 shadow sm:rounded-lg group-hover:outline  ${Theme === "light"
          ? " group-hover:outline-Villo-light-white20"
          : " group-hover:outline-Villo-dark-black50"
          }`}
      >
        <div
          className={`grid gap-6 min-h-[131px] transition-colors duration-300  ${Theme === "light"
            ? "bg-Villo-light-white10 group-hover:bg-Villo-light-primary"
            : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-primary"
            } p-12`}
        >
          <ResponsiveThemedH4
            className={`font-bold max-w-fit ${Theme === "light"
              ? "group-hover:text-Villo-light-white"
              : "group-hover:text-Villo-dark-black"
              }`}
          >
            {language === "Norwegian" ? norTitle : engTitle}
          </ResponsiveThemedH4>
          {/* <ResponsiveThemedH5
            className={`font-bold max-w-fit ${
              Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
            }`}
          >
            {language === "Norwegian" ? norSubTitle : engSubTitle}
          </ResponsiveThemedH5> */}
          <div className="mt-2">
            <ThemedP
              className={`${Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
                }`}
            >
              {language === "Norwegian" ? norText : engText}
            </ThemedP>
          </div>
          <Link href={href}>
            <CallToActionButton Theme={Theme} >{language === "Norwegian" ? "les mer" : "read more"}</CallToActionButton>
          </Link>
        </div>

      </div>
    </div>
  );
};