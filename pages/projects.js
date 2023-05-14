import PageLayout, { ClientLayout, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveP,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";
import PROJECT_LIST from "@/components/Projects/projects_list";
import ProjectCard, { ProjectSection } from "@/components/Projects/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ClientSection } from "@/components/sections/ClientSection";

export default function ProjectPage() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="JWC's projects" content="JWC projects" />
        <meta name="keywords" content="webdesign, utvikling, nettside, SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <PageLayout gap="gap-28">
        {/* <section className="relative grid justify-center min-h-[70vh] text-center mt-[112px]"> */}

        {/* <div className="flex flex-col items-center justify-center gap-24">
            {PROJECT_LIST.map((project) => (
              <ProjectCard
                key={project.engProjectName}
                projectName={
                  language === "Norwegian"
                    ? project.norProjectName
                    : project.engProjectName
                }
                textColor={project.textColor}
                src={project.src}
                alt={project.alt}
                cardColor={project.cardColor}
                href={project.href}
                hrefCode={project.hrefCode}
                description={
                  language === "Norwegian"
                    ? project.norDescription
                    : project.engDescription
                }
                mobileSrc={project.mobileSrc}
              />
            ))}
          </div> */}
        <ProjectSection />
        <ClientSection />

        <section className="relative grid justify-center min-h-[40vh] mb-[112px] text-center">
          <TextFlex>
            <ResponsiveP>
              {language === "Norwegian"
                ? " Flere prosjekter vil bli lagt til etterhvert"
                : "More projects will be added eventually"}
            </ResponsiveP>
          </TextFlex>
        </section>
        {/* </section> */}
      </PageLayout>
    </>
  );
}
