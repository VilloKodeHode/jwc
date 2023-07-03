import Image from "next/image";
import {
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH1,
} from "../Responsive text/ResponsiveText";
import { CallToActionButtonAlt } from "../Buttons";
import PROJECT_LIST from "../Projects/projects_list";
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
                className={`flex flex-col justify-between overflow-hidden rounded-lg shadow ${
                  Theme === "light" ? "bg-Villo-white10" : "bg-Villo-black85"
                }  shadow-Villo-black75`}
              >
                <div className="">
                  <div className="p-4 pb-0 border-b-2 border-Villo-black">
                    <Image
                      className="object-cover object-center w-full h-48"
                      src={project.src}
                      alt={project.engProjectName}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
                <div className="h-full p-6">
                  <ResponsiveH5 className="font-bold text-Villo-primary">
                    {language === "Norwegian"
                      ? project.norProjectName
                      : project.engProjectName}
                  </ResponsiveH5>
                  <ResponsiveP
                    className={`mt-2 text-sm ${
                      Theme === "light"
                        ? "text-Villo-black"
                        : "text-Villo-white15"
                    } `}
                  >
                    {language === "Norwegian"
                      ? project.norDescription
                      : project.engDescription}
                  </ResponsiveP>
                </div>
                <div className="m-4">
                  <Link
                    className="w-fit h-fit"
                    href={project.href}
                    target="_blank"
                  >
                    <CallToActionButtonAlt>
                      {language === "Norwegian" ? "Prøv ut" : "Try it out"}
                    </CallToActionButtonAlt>
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
