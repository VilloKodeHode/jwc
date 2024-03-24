import Image from "next/image";
import {
  ResponsiveThemedH1,
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "../../base_components/ResponsiveText";
import  { ExternalCTA } from "../../base_components/Buttons";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../Utilities/UserContext";
import PROJECT_LIST from "@/data/projects_list";

export const ProjectSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <ResponsiveThemedH1>
            {language === "Norwegian" ? "Hobby prosjekter" : "Hobby projects"}
          </ResponsiveThemedH1>
        </div>
        <div className="mt-10 animate-PageAppearRight">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECT_LIST.map((project) => (
              <div
                key={project.engProjectName}
                className={`flex flex-col h-[460px] md:h-[550px] lg:h-[600px] justify-between overflow-hidden rounded-lg shadow ${theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black85"
                  }  shadow-Villo-black75`}
              >

                <div className={`p-4 pb-0 border-b-4 ${theme === "light" ? "border-Villo-light-primary" : "border-Villo-dark-primary"} `}>
                  
                  <Image
                    className="object-cover object-center w-full h-48"
                    src={project.src ? project.src : theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"}
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
                    className={`mt-2 ${theme === "light"
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
                    <ExternalCTA Theme={theme}>
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
