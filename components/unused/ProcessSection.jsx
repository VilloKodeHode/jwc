import Image from "next/image";
import {
  ResponsiveH4,
  ResponsiveLi,
  ResponsiveP,
  ResponsiveSmall,
} from "../atoms/ResponsiveText";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const ProcessSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section className="relative grid items-center justify-center gap-12 px-12 lg:px-24">
      <div className="grid items-center justify-center gap-12 lg:grid-cols-2">
        <div className="grid items-center justify-center w-full h-full p-8 bg-Villo-secondary rounded-xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <ResponsiveH4 className="text-center text-Villo-tertiary">
              {language === "Norwegian"
                ? "Design fra idè til virkelighet"
                : "Design from idea to reality"}
            </ResponsiveH4>
            <ResponsiveP className="text-center text-Villo-black">
              {language === "Norwegian"
                ? "Websidens helhetsuttrykk er avgjørende for å oppnå et godt resultat. Derfor kreves det grundig forarbeid for å sikre at det valgte designet fungerer og er tilpasset dine spesifikke behov. Følgende prosess blir fulgt:"
                : "The overall appearance of a website is essential for a successful outcome. Therefore, preparatory work is needed to ensure that the design you want both works and meets your needs. This is the process that is followed:"}
            </ResponsiveP>
            <div>
              <ResponsiveLi className="text-left">
                {language === "Norwegian"
                  ? "Først lages en mockup av siden du ønsker, med designmanual."
                  : "First, a mockup of the page you want is created, along with a design manual."}
              </ResponsiveLi>
              <ResponsiveSmall className="text-Villo-black75">
                {language === "Norwegian"
                  ? "Har du en mockup fra før kan denne brukes."
                  : "If you have a mockup already made, it can be used."}
              </ResponsiveSmall>
              <ResponsiveLi className="text-left">
                {language === "Norwegian"
                  ? "Så lages en prototype for å teste ut designet."
                  : "Next, a prototype is created to test the design."}
              </ResponsiveLi>
              <ResponsiveSmall className="text-Villo-black75">
                {language === "Norwegian"
                  ? "Hvis du har en prototype fra før kan denne brukes."
                  : "If you have a prototype already made, it can be used."}
              </ResponsiveSmall>
              <ResponsiveLi className="text-left">
                {language === "Norwegian"
                  ? "Tilslutt lages nettsiden i henhold til designmanualen."
                  : "Finally, the website is created according to the design manual."}
              </ResponsiveLi>
              <ResponsiveSmall className="text-Villo-black75">
                {language === "Norwegian"
                  ? "Resultatet blir gjennomgått og eventuelle endringer utføres."
                  : "The result is reviewed and any changes are made."}
              </ResponsiveSmall>
              <ResponsiveSmall className="text-Villo-black75">
                <br />
                {language === "Norwegian"
                  ? "I alle trinn vil oppdragsgiveren få innsikt og mulighet til å gi tilbakemeldinger."
                  : "At every step, the client has insight and the opportunity to provide feedback."}
              </ResponsiveSmall>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src="/socialProof1.png"
            alt="man programming"
            className="mx-12 md:px-0 shadowblend"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center justify-center gap-12 lg:grid lg:grid-cols-2">
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src="/socialProof2.png"
            alt="several people working on a website"
            className="mx-12 md:px-0 shadowblend"
          />
        </div>

        <div className="grid items-center justify-center w-full h-full p-8 bg-Villo-secondary rounded-xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <ResponsiveH4 className="text-center text-Villo-tertiary">
              {language === "Norwegian"
                ? "Hva vil dette koste?"
                : "What will this cost?"}
            </ResponsiveH4>
            <ResponsiveP className="text-center text-Villo-black">
              {language === "Norwegian"
                ? "Ingen mellomledd er involvert, og dermed kan jeg tilby meget konkurransedyktige priser. Prisen vil bli diskutert og avtalt på forhånd før prosjektet starter."
                : "No intermediaries are involved, and therefore I can offer very competitive prices. The price will be discussed and agreed upon in advance before the project starts."}
            </ResponsiveP>
          </div>
        </div>
      </div>
    </section>
  );
};
