import Image from "next/image";
import {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH1,
} from "../Responsive text/ResponsiveText";
import { CallToActionButtonAlt } from "../Buttons";
import { useContext } from "react";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import PROJECT_LIST from "../Projects/projects_list";

export const ProjectSection = (props) => {
  const {} = props;
  const { language } = useContext(LanguageContext);
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <ResponsiveThemedH1>
            {language === "Norwegian" ? "Prosjekter" : "Projects"}
          </ResponsiveThemedH1>
        </div>
        <div className="mt-10 animate-PageAppearRight">
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
