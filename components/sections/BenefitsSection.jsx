import {
  ResponsiveH5,
  ResponsiveThemedH2,
  ResponsiveThemedH5,
  ThemedP,
} from "../Responsive text/ResponsiveText";
import { BenefitsSectionPart } from "./sectionsParts/BenefitsSectionParts";

export const BenefitsSection = ({ language, Theme }) => {
  return (
    <div
      className={`w-screen overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12 ${Theme === "light" ? "bg-Villo-light-white15" : "bg-Villo-dark-black85"
        }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="px-12 text-center">
            {language === "Norwegian"
              ? "Hva du kan oppnå med Villo utvikling"
              : "What you can achieve with Villo development"}
          </ResponsiveThemedH2>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid items-center grid-cols-1 xl:grid-cols-3 md:gap-6">
            <BenefitsSectionPart
              language={language}
              Theme={Theme}
              norTitle="Kvalitet nettsider"
              norSubTitle="til en god pris og service"
              engTitle="Quality websites"
              engSubTitle="for a good price and service"
              norText="Det er ingen mellomledd i produksjonen av nettsiden din. Dette betyr at du får en nettside av høy kvalitet til en god pris."
              engText="There are no intermediaries in the production of your website. This means that you get a high quality website at a good price."
            />
            <BenefitsSectionPart
              language={language}
              Theme={Theme}
              norTitle="Optimaliserte websider"
              norSubTitle="som bruker den nyeste teknologien"
              engTitle="Optimized websites"
              engSubTitle="that use the latest technology"
              norText="For å sikre at nettsiden din er rask, sikker og responsiv på alle enheter og skjermstørrelser brukes den nyeste teknologien."
              engText="To ensure that your website is fast, secure and responsive on all devices and screen sizes, the latest technology is used."
            />
            <BenefitsSectionPart
              language={language}
              Theme={Theme}
              norTitle="Åpen kommunikasjon"
              norSubTitle="gjennom hele prosessen"
              engTitle="Open communication"
              engSubTitle="throughout the whole process"
              norText="Åpen kommunikasjon er viktig for å sikre at resultatet blir akkurat det du ønsker deg. Derfor vil du bli oppdatert gjennom hele prosessen."
              engText="Open communication is important to ensure that the result is exactly what you want. Therefore, you will be updated throughout the process."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
