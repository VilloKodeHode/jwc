import Image from "next/image";
import {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH1,
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "../../Responsive text/ResponsiveText";
import CallToActionButton, { CallToActionButtonAlt, ArrowCTA, ExternalCTA } from "../../Buttons";
import PROJECT_LIST from "./projects_list";
import Link from "next/link";

export const ProjectSection = ({ language, Theme }) => {
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
                className={`flex flex-col h-[530px] justify-between overflow-hidden rounded-lg shadow ${Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black85"
                  }  shadow-Villo-black75`}
              >

                <div className={`p-4 pb-0 border-b-4 ${Theme === "light" ? "border-Villo-light-primary" : "border-Villo-dark-primary"} `}>
                  <Image
                    className="object-cover object-center w-full h-48"
                    src={project.src}
                    alt={project.engProjectName}
                    width={400}
                    height={300}
                  />
                </div>

                <div className="h-full p-6">
                  <ResponsiveThemedH5 className="font-bold">
                    {language === "Norwegian"
                      ? project.norProjectName
                      : project.engProjectName}
                  </ResponsiveThemedH5>
                  <ResponsiveThemedP
                    className={`mt-2 ${Theme === "light"
                      ? "text-Villo-black"
                      : "text-Villo-white15"
                      } `}
                  >
                    {language === "Norwegian"
                      ? project.norDescription
                      : project.engDescription}
                  </ResponsiveThemedP>
                </div>
                <div className="ml-3 max-w-fit">
                  <Link
                    className="w-fit h-fit"
                    href={project.href}
                    target="_blank"
                  >
                    <ExternalCTA Theme={Theme}>
                      {language === "Norwegian" ? "Prøv ut" : "Try it out"}
                    </ExternalCTA>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
