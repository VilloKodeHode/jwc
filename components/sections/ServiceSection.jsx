import { AiOutlineCheck } from "react-icons/ai";
import {
  ResponsiveThemedH2,
  ResponsiveThemedH5,
  ThemedH4,
  ThemedLi,
  ThemedP,
} from "../base_components/ResponsiveText";
import { LogoBullitinPoint } from "../base_components/LogoBullitinPoint";
import { UserContext } from "../Utilities/UserContext";
import { useContext } from "react";

export const ServicesSection = () => {
  const { theme, language } = useContext(UserContext);
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
              norTitle="Lage nettside"
              engTitle="Website creation"
              norText="Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv."
              engText="I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive."
            />
            <ServicesSectionPart
              norTitle="Nettinnhold"
              engTitle="Webcontent"
              norText="Jeg har kunnskap innen flere felt utenom programmering, som ernæring, pedagogikk og fysisk aktivitet. Jeg kan skrive nettinnhold som både er informativt og engasjerende."
              engText="I'm knowledgeable in several fields outside of programming, like nutrition, pedagogy and physical activity. I can write content for your website that is both informative and engaging."
            />
            <ServicesSectionPart
              norTitle="Nettdesign"
              engTitle="Webdesign"
              norText="Hvis du ikke vet hvordan du vil at nettsiden din skal se ut, kan jeg hjelpe deg med det. Jeg kan skape et design som passer dine behov og merkevare. Jeg kan også hjelpe deg med å skape ditt merkevare"
              engText="If you dont know what you want your website to look like, I can help you with that. I can create a design that fits your needs and your brand. I can also help you create a brand if you dont have one."
            />
            <ServicesSectionPart
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

export const ServicesSectionPart = ({
  norTitle,
  engTitle,
  norText,
  engText,
}) => {
  const { theme, language } = useContext(UserContext);
  return (
    <div className="mt-5 md:mt-0 md:col-span-1 group cursor-default hover:scale-[1.02] active:scale-[1.02] transition-all duration-300">
      <div
        className={`overflow-hidden shadow sm:rounded-lg transition-transform duration-300 group-hover:outline ${
          theme === "light"
            ? " group-hover:outline-Villo-light-white20"
            : " group-hover:outline-Villo-dark-black50"
        }`}
      >
        <div
          className={`flex transition-colors duration-300 flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${
            theme === "light"
              ? "bg-Villo-light-white10 group-hover:bg-Villo-light-primary"
              : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-primary"
          } sm:p-6`}
        >
          <div className="h-full ">
            <ResponsiveThemedH5
              className={`font-bold max-w-fit ${
                theme === "light"
                  ? "group-hover:text-Villo-light-white"
                  : "group-hover:text-Villo-dark-black"
              }`}
            >
              {language === "Norwegian" ? norTitle : engTitle}
            </ResponsiveThemedH5>

            <ThemedP
              className={`mt-2 ${
                theme === "light"
                  ? "group-hover:text-Villo-light-white"
                  : "group-hover:text-Villo-dark-black"
              }`}
            >
              {language === "Norwegian" ? norText : engText}
            </ThemedP>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionProcessPartSection = ({ norTitle, engTitle, children }) => {
    const { theme, language } = useContext(UserContext);
  return (
    <>
      <div className={`z-20 flex flex-col justify-center gap-4`}>
        <div className="flex items-center justify-center gap-2 mb-8">
          <LogoBullitinPoint />
          <ThemedH4 className="">
            {language === "Norwegian" ? norTitle : engTitle}
          </ThemedH4>
        </div>
        <div
          className={`relative transition-all flex  flex-row flex-wrap lg:justify-around justify-center py-8 gap-8 max-w-5xl rounded-md  ${
            theme === "light"
              ? "bg-Villo-light-white10 shadow-Villo-light-white15"
              : "bg-Villo-dark-black85 shadow-Villo-dark-black75"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export const CheckProcessBullitin = ({ children }) => {
    const { theme, language } = useContext(UserContext);
  return (
    <div
      className={`flex relative group items-start min-h-[103px] px-4 transition-all gap-2 sm:rounded-lg 
  
            `}
    >
      <div>
        <AiOutlineCheck
          className={`w-8 h-8 transition-all  ${
            theme === "light"
              ? "text-Villo-light-primary group-hover:scale-125"
              : "text-Villo-dark-primary group-hover:scale-125"
          }`}
        />
      </div>
      {/* <div className="flex flex-col justify-center h-full"> */}
      <ThemedLi className="list-none md:max-w-xs ">{children}</ThemedLi>
      {/* </div> */}
    </div>
  );
};
