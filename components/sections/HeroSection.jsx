import { useContext } from "react";
import CallToActionButton from "../Buttons";
import ResponsiveH1, {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH1,
  ResponsiveThemedH5,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import Link from "next/link";
import THREESpace from "../animation/Space";

export const HeroSection = ({ language, Theme }) => {
  return (
    <>
      <section className="relative z-10  flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover">
        <div className="max-w-6xl animate-PageAppearRight">
          <div className="relative z-10 text-left">
            <ResponsiveP className="mb-8 text-left rainbowtext w-fit">
              {language === "Norwegian"
                ? "Få nettsiden din opp og gå, raskt!"
                : "Get your website up and running, fast!"}
            </ResponsiveP>
            <ResponsiveThemedH1 className="mb-8">
              <span className="text-Villo-primary">
                {language === "Norwegian"
                  ? "AI-forsterket utvikler"
                  : "AI-powered developer"}
              </span>{" "}
              {language === "Norwegian" ? "som lager" : "creating"}{" "}
              <span className="text-Villo-secondary">
                {" "}
                {language === "Norwegian" ? "nettsider" : "websites"}
              </span>{" "}
              <span className="text-Villo-tertiary">
                {" "}
                {language === "Norwegian" ? "raskere" : "faster"}{" "}
              </span>
              {language === "Norwegian" ? "og" : "and"}
              <span className="text-Villo-tertiary">
                {" "}
                {language === "Norwegian" ? "bedre" : "better"}{" "}
              </span>
            </ResponsiveThemedH1>

            <ResponsiveThemedH5 className="mb-8 font-normal text-left">
              {language === "Norwegian"
                ? "Jeg bygger nettsider raskt og effektivt ved å bruke de nyeste webteknologiene. Med prompt engineering kan jeg lage innhold raskt, og deretter forbedre det med min egen ekspertise for å skape en unik nettside som passer dine behov."
                : "I build websites quickly and efficiently using the latest web technologies. With prompt engineering I can make content swiftly, then improve upon this with my own expertise to create a unique website for your needs."}
            </ResponsiveThemedH5>
            <Link href="/contact">
              <CallToActionButton>
                {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
              </CallToActionButton>
            </Link>
          </div>
        </div>
      </section>
      <THREESpace className="absolute top-0 -z-10" />
    </>
  );
};
