import Image from "next/image";
import CallToActionButton from "../Buttons";
import THREESpace from "../animation/Space";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";
import Link from "next/link";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import { useContext, useState } from "react";

export const CTAOneSection = () => {
  const [currentWeb, setCurrentWeb] = useState("/Hero8.png");
  const { language } = useContext(LanguageContext);
  return (
    <>
      <section className="relative z-10 flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover group/imageEffect">
        <div className="max-w-6xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative z-10 text-center select-none md:text-left">
                <ResponsiveH2 className="mb-8 ">
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDesign.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-primary"
                  >
                    <span className="group-hover:text-JWC-primary group-hover:opacity-100 opacity-80 text-JWC-white15 h1hidden">
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDevelopment.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-secondary w-fit"
                  >
                    <span className="group-hover:text-JWC-secondary group-hover:opacity-100 opacity-80 text-JWC-white15 h1hidden">
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "development"}
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-tertiary w-fit"
                  >
                    <span className="group-hover:text-JWC-tertiary group-hover:opacity-100 opacity-80 text-JWC-white15 h1hidden">
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "innhold" : "content"}
                  </span>
                </ResponsiveH2>
                <ResponsiveP className="mb-8 text-JWC-white15 clearText">
                  {language === "Norwegian"
                    ? "Engasjerende nettsider for ditt formål: Fra enkle til komplekse nettsider, som er tilpasset alle enheter."
                    : "Engaging websites for your purpose: From simple to complex websites, customized for all devices."}
                </ResponsiveP>
              </div>
            </div>
            <div className="w-full mt-8 md:w-1/2">
              <div className="relative z-10 grid justify-center">
                <Image
                  src={currentWeb}
                  alt="intro image"
                  width={400}
                  height={400}
                  className="object-cover duration-300 md:w-full md:h-full opacity-90 shadowblend group-hover/imageEffect:opacity-100"
                  priority={true}
                />
              </div>
              {/* <Link href="/contact" className="">
                <CallToActionButton>
                  {language === "Norwegian" ? "Ta kontakt" : "Contact me"}
                </CallToActionButton>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <THREESpace className="absolute top-0 -z-10" />
    </>
  );
};
