import Image from "next/image";
import { SimpleLogoComponent } from "@/components/base components/Logo";
import {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveThemedH2,
  ResponsiveThemedH3,
  ResponsiveThemedH4,
  ResponsiveThemedP,
} from "../../Responsive text/ResponsiveText";
import { TextFlex } from "../../Layout/Layout";
import { useContext } from "react";
import LanguageContext from "../../Utilities/LanguageSwitch/LanguageContext";

export const MyIntroSection = ({ language, Theme }) => {
  return (
    <div className="grid max-w-7xl justify-center text-center items-center min-h-[calc(100vh-144px)]">
      <ResponsiveThemedH2>
        {language === "Norwegian"
          ? "Kort om meg"
          : "About me"}
      </ResponsiveThemedH2>
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid min-h-[70vh] lg:grid-cols-2 transition-colors duration-1000  ${Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
            }`}
        >
          <div
            className={`col-span-1 py-12 min-h-[30vh] text-left flex flex-col justify-center items-center`}
          >
            {/* <SimpleLogoComponent /> */}

            <ResponsiveThemedH3 className="py-5 text-left text-bold">
              Joakim Villo
            </ResponsiveThemedH3>
            <ResponsiveThemedP className="max-w-md px-8 pb-5 text-center">
              {language === "Norwegian"
                ? "Jeg er en utdannet utvikler som for øyeblikket underviser i grunnleggende programmering og webutviklingskurs. Jeg har to bachelorgrader i andre fagfelt, og tidligere jobb har hatt sammenheng med disse gradene. I 2022 byttet jeg til programmering og koding, som nå har blitt min sanne lidenskap i livet."
                : "I'm a trained developer who's currently teaching fundamental programming and web development courses. I hold two bachelor's degrees in other fields, and previous work has been related to those degrees. In 2022, I switched to programming and coding, which has now become my true passion in life."}
            </ResponsiveThemedP>
          </div>
          <div className="col-span-1">
            <Image
              src="/Joakim.webp"
              width={1200}
              height={1200}
              alt="Tønsberg brygge"
              className="object-cover w-full h-full rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
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
