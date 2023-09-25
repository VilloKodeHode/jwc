import Image from "next/image";
import { SimpleLogoComponent } from "@/components/base components/Logo";
import {
  ResponsiveH3,
  ResponsiveThemedH3,
  ResponsiveThemedH4,
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "../Responsive text/ResponsiveText";
import { TextFlex } from "../Layout";
import { useContext } from "react";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export const CompanyInfo = ({ language, Theme }) => {
  // const { language } = useContext(LanguageContext);
  // const { Theme } = useContext(ThemeContext);
  return (
    <div className="grid max-w-7xl justify-center items-center min-h-[calc(100vh-144px)]">
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid min-h-[70vh] lg:grid-cols-2 transition-colors duration-1000  ${Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
            }`}
        >
          <div
            className={`col-span-1 py-12 min-h-[30vh] flex flex-col justify-center items-center`}
          >
            <SimpleLogoComponent />

            <ResponsiveThemedH3 className="py-5 text-bold">
              Joakim Villo
            </ResponsiveThemedH3>
            <ResponsiveThemedP className="max-w-md pb-5 text-center">
              {language === "Norwegian"
                ? "Siden oppstarten i Tønsberg i 2023 har selskapet fokusert på å skaffe nye kunder ved å ta på seg mindre prosjekter og bygge opp en lojal kundebase."
                : "Since its inception in Tønsberg in 2023, the company has focused on acquiring new customers by taking on smaller projects and building a loyal customer base."}
            </ResponsiveThemedP>
          </div>
          <div className="col-span-1">
            <Image
              src="/Tonsberg.jpg"
              width={800}
              height={800}
              alt="Tønsberg brygge"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const OldCompanyInfo = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="grid items-center min-h-[60vh] justify-center w-screen font-bold text-center lg:grid-cols-2 mt-[56px]">
      <div className="flex flex-col items-center justify-center lg:h-full h-[50vh] shadow shadow-Villo-black75 px-8">
        <SimpleLogoComponent />
        <div className="">
          {/* <ResponsiveThemedH5>JV Web Consult</ResponsiveThemedH5> */}
          <ResponsiveH3>
            <div className="bg-gradient-to-r from-Villo-tertiary to-Villo-secondary bg-clip-text transparent">
              Joakim Villo
            </div>
          </ResponsiveH3>
        </div>
        <TextFlex textWidth="md:max-w-[60ch] max-w-[80ch]">
          <ResponsiveThemedH4>
            {language === "Norwegian" ? "Norsk foretak" : "Norwegian company"}
          </ResponsiveThemedH4>
          <ResponsiveThemedP>
            {language === "Norwegian"
              ? "Siden oppstarten i Tønsberg i 2023 har selskapet fokusert på å skaffe nye kunder ved å ta på seg mindre prosjekter og bygge opp en lojal kundebase."
              : "Since its inception in Tønsberg in 2023, the company has focused on acquiring new customers by taking on smaller projects and building a loyal customer base."}
          </ResponsiveThemedP>
        </TextFlex>
      </div>

      <div className="lg:h-full lg:w-full h-[40vh] shadow shadow-Villo-black75 tonsbergBG" />
    </section>
  );
};
