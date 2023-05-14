//Component for displaying project layout

import Image from "next/image";
import { useContext, useState } from "react";
import { CallToActionButtonAlt } from "../Buttons";
import ResponsiveH1, {
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveP,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import PROJECT_LIST from "./projects_list";

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

export const ProjectSection = (props) => {
  const {} = props;
  const { language } = useContext(LanguageContext);
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <ResponsiveH1>
            {language === "Norwegian" ? "Prosjekter" : "Projects"}
          </ResponsiveH1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECT_LIST.map((project) => (
              <div
                key={project.engProjectName}
                className="flex flex-col justify-between overflow-hidden rounded-lg shadow shadow-JWC-black75 bg-JWC-black"
              >
                <Image
                  className="object-cover object-center w-full h-48"
                  src={project.src}
                  alt={project.engProjectName}
                  width={400}
                  height={300}
                />
                <div className="h-full p-6">
                  <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                    {language === "Norwegian"
                      ? project.norProjectName
                      : project.engProjectName}
                  </ResponsiveH5>
                  <ResponsiveP className="mt-2 text-sm text-JWC-white15">
                    {language === "Norwegian"
                      ? project.norDescription
                      : project.engDescription}
                  </ResponsiveP>
                </div>
                <a className="" href={project.href} target="_blank">
                  <CallToActionButtonAlt>
                    {language === "Norwegian" ? "Prøv ut" : "Try it out"}
                  </CallToActionButtonAlt>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


