import { useContext } from "react";
import CallToActionButton from "../Buttons";
import ResponsiveH1, {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH1,
  ResponsiveThemedH5,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";

export const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="relative flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover">
      <div className="max-w-6xl">
        <div className="relative z-10 text-left">
          <ResponsiveP className="mb-8 text-left rainbowtext w-fit">
            {language === "Norwegian"
              ? "Få nettsiden din opp og kjørende, raskt!"
              : "Get your website up and running, fast!"}
          </ResponsiveP>
          <ResponsiveThemedH1 className="mb-8">
            <span className="text-JWC-primary">
              {language === "Norwegian"
                ? "AI-forsterket utvikler"
                : "AI-powered developer"}
            </span>{" "}
            {language === "Norwegian" ? "som lager" : "creating"}{" "}
            <span className="text-JWC-secondary">
              {" "}
              {language === "Norwegian" ? "nettsider" : "websites"}
            </span>{" "}
            <span className="text-JWC-tertiary">
              {" "}
              {language === "Norwegian" ? "raskere" : "faster"}{" "}
            </span>
            {language === "Norwegian" ? "og" : "and"}
            <span className="text-JWC-tertiary">
              {" "}
              {language === "Norwegian" ? "bedre" : "better"}{" "}
            </span>
          </ResponsiveThemedH1>

          <ResponsiveThemedH5 className="mb-8 font-normal text-left">
            {/* <span className="text-JWC-secondary">I build websites </span>{" "}
            <span className="text-JWC-tertiary">quickly</span> and{" "}
            <span className="text-JWC-tertiary">efficiently</span> using the
            latest <span className="text-JWC-accent">web technologies.</span>{" "}
            With <span className="text-JWC-accent">prompt engineering</span> I
            can make content <span className="text-JWC-tertiary">swiftly</span>,
            then <span className="text-JWC-tertiary">improve</span> upon this
            with my own <span className="text-JWC-primary">expertise</span> to{" "}
            <span className="text-JWC-tertiary">create</span> a{" "}
            <span className="text-JWC-secondary">unique website</span> for your
            needs. */}

            {language === "Norwegian"
              ? "Jeg bygger nettsider raskt og effektivt ved å bruke de nyeste webteknologiene. Med prompt engineering kan jeg lage innhold raskt, og deretter forbedre det med min egen ekspertise for å skape en unik nettside som passer dine behov."
              : "I build websites quickly and efficiently using the latestweb technologies. With prompt engineering can make content swiftly, then improve upon this with my own expertise to create a unique website for your needs."}
          </ResponsiveThemedH5>

          <CallToActionButton>
            {" "}
            {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
          </CallToActionButton>
        </div>
      </div>
    </section>
  );
};
