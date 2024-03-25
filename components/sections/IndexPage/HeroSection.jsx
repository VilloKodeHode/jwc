import { ArrowCTA, ReadMoreButton } from "../../base_components/Buttons";
import {
  ResponsiveP,
  ResponsiveThemedH1,
  ResponsiveThemedH5,
} from "../../base_components/ResponsiveText";
import Link from "next/link";
import THREESpace from "../../animation/Space";
import { scrollToSection } from "@/components/navigation/scrollLogic";
import { useContext } from "react";
import { UserContext } from "../../Utilities/UserContext";

export const HeroSection = () => {
  const { language, theme } = useContext(UserContext);

  return (
    <>
      <div className="flex justify-center w-full h-full">
        <section
          className=" max-w-6xl z-10 flex items-center justify-center w-full min-h-[calc(100dvh-160px)] bg-center bg-cover"
          id="HeroSection"
        >
          <div className="max-w-6xl animate-PageAppearRight">
            <div className="relative z-50 text-left">
              <ResponsiveP
                className={`mb-8 text-left ${
                  theme === "light"
                    ? "text-Villo-light-black85"
                    : "text-Villo-dark-white10"
                }  w-fit`}
              >
                {language === "Norwegian"
                  ? "Nettsider for små og mellomstore bedrifter"
                  : "Websites for small and medium-sized businesses"}
              </ResponsiveP>
              <ResponsiveThemedH1 className="mb-8">
                <span
                  className={`${
                    theme === "light"
                      ? "text-Villo-light-primary"
                      : "text-Villo-dark-primary"
                  }`}
                >
                  {language === "Norwegian" ? "Fører ditt konsept til realitet" : "Bringing your consept to reality"}
                </span>{" "}
                
              </ResponsiveThemedH1>

              <ResponsiveThemedH5 className="mb-8 font-normal text-left">
                {language === "Norwegian"
                  ? "Jeg bygger nettsider raskt og effektivt ved å bruke de nyeste webteknologiene. Enten du ønsker en enkel løsning med et brukervennlig system, eller en skreddersydd nettside etter dine behov, kan du stole på min ekspertise."
                  : "I build websites quickly and efficiently using the latest web technologies. Whether you want a simple solution with a user-friendly system, or a custom website tailored to your needs, you can rely on my expertise."}
              </ResponsiveThemedH5>
              <div className="grid justify-start grid-flow-col gap-8">
                <div className="h-[60px] flex justify-start items-center">
                  <Link href="/contact" className="">
                    <ArrowCTA Theme={theme} className="">
                      {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
                    </ArrowCTA>
                  </Link>
                </div>
                <div className="h-[60px] flex justify-start items-center max-w-fit">
                  <a
                    onClick={(event) => scrollToSection(event, "OfferSection")}
                    className=""
                  >
                    <ReadMoreButton Theme={theme} className="">
                      {language === "Norwegian" ? "tjenester" : "Services"}
                    </ReadMoreButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <THREESpace className="absolute top-0 -z-20" Theme={theme} />
      </div>
    </>
  );
};
