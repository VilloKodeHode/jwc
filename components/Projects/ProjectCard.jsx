//Component for displaying project layout

import Image from "next/image";
import { useContext, useState } from "react";
import { CallToActionButtonAlt } from "../Buttons";
import {
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";

export default function ProjectCard(props) {
  const {
    href,
    projectName,
    textColor,
    src,
    mobileSrc,
    description,
    alt,
    cardColor,
  } = props;
  const { language } = useContext(LanguageContext);

  return (
    <>
      <section
        className={`xl:max-w-[60%] md:max-w-[70%] max-w-[90%] my-28 ${cardColor} bg-opacity-10`}
      >
        <div className="z-10 flex flex-col items-center justify-center m-4 snap-always snap-mandatory snap-center">
          <ResponsiveH3 className={`p-4 ${textColor}`}>
            {projectName}
          </ResponsiveH3>
          <div className="flex flex-col items-center justify-center p-8 xl:flex-row">
            <ResponsiveP
              className={`xl:max-w-[30%] max-w-[100%] ${textColor} shadow-sm p-8`}
            >
              {description}
            </ResponsiveP>
            <div className="">
              <Image
                width={700}
                height={700}
                className={`hidden md:block`}
                src={src}
                alt={alt}
              />
              <Image
                width={450}
                height={450}
                className={`md:hidden block`}
                src={mobileSrc}
                alt={alt}
              />
              <div className="flex justify-center w-full mt-8">
                <a className="" href={href} target="_blank">
                  <CallToActionButtonAlt>
                    {language === "Norwegian" ? "Prøv ut" : "Try it out"}
                  </CallToActionButtonAlt>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
