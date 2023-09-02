import { ArrowCTA } from "../Buttons";
import {
  ResponsiveP,
  ResponsiveThemedH1,
  ResponsiveThemedH5,
} from "../Responsive text/ResponsiveText";
import Link from "next/link";
import THREESpace from "../animation/Space";


export const HeroSection = ({ language, Theme }) => {
  return (
    <>
      <section className="relative z-10  flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover">
        <div className="max-w-6xl animate-PageAppearRight">
          <div className="relative z-10 text-left">
            <ResponsiveP
              className={`mb-8 text-left ${Theme === "light" ? "text-Villo-light-black85" : "text-Villo-dark-white10"
                }  w-fit`}
            >
              {language === "Norwegian"
                ? "Få siden din opp og gå, raskt!"
                : "Get your site up and running, fast!"}
            </ResponsiveP>
            <ResponsiveThemedH1 className="mb-8">
              <span className={`${Theme === "light" ? "text-Villo-light-primary" : "text-Villo-dark-primary"
                }`}>
                {language === "Norwegian"
                  ? "Nettside utvikler"
                  : "Website developer"}
              </span>{" "}
              {language === "Norwegian" ? "som lager" : "creating"}{" "}
              {/* <span className="text-Villo-secondary"> */}{" "}
              {language === "Norwegian" ? "din idè" : "your idea"}{" "}
              {/* </span>{" "} */}
              {/* <span className="text-Villo-tertiary"> */}{" "}
              {language === "Norwegian" ? "raskere" : "faster"} {/* </span> */}
              {language === "Norwegian" ? "og" : "and"}
              {/* <span className="text-Villo-tertiary"> */}{" "}
              {language === "Norwegian" ? "bedre" : "better"} {/* </span> */}
            </ResponsiveThemedH1>

            <ResponsiveThemedH5 className="mb-8 font-normal text-left">
              {language === "Norwegian"
                ? "Jeg bygger nettsider raskt og effektivt ved å bruke de nyeste webteknologiene. Enten du ønsker en enkel løsning med et brukervennlig system, eller en skreddersydd nettside etter dine behov, kan du stole på min ekspertise."
                : "I build websites quickly and efficiently using the latest web technologies. Whether you want a simple solution with a user-friendly system, or a custom website tailored to your needs, you can rely on my expertise."}
            </ResponsiveThemedH5>
            <div className="h-[60px] max-w-fit">
              <Link href="/contact" className="">
                <ArrowCTA Theme={Theme} className="">
                  {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
                </ArrowCTA>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <THREESpace className="absolute top-0 -z-10" />
    </>
  );
};
