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
import ProjectCard from "@/components/Projects/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";

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
      <PageLayout>
        <section className="relative grid justify-center min-h-[70vh] text-center mt-[112px]">
          <TextFlex>
            <ResponsiveH1>
              {language === "Norwegian" ? "Prosjekter" : "Projects"}
            </ResponsiveH1>
          </TextFlex>
          <div className="flex flex-col items-center justify-center gap-24">
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
          </div>
          <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center">
            <div className="absolute w-screen left-1/2 -translate-x-1/2 h-[70%] bg-JWC-tertiary -translate-y-1/2 top-1/2 " />
            <TextFlex textWidth="max-w-[60ch]">
              <div>
                <ResponsiveH3>
                  {language === "Norwegian" ? "Klienter" : "Clients"}
                </ResponsiveH3>
              </div>
              <ClientLayout>
                <ResponsiveH4 className="text-JWC-black">Wileo AS</ResponsiveH4>
                <Image
                  src="/liva-logo.png"
                  alt="LIVA"
                  width="50"
                  height="50"
                  className="absolute top-5 left-5"
                />
                <div className="text-start ">
                  <ResponsiveUL>
                    <p className="text-JWC-black">
                      {language === "Norwegian"
                        ? "Et startup som skal lansere produktet sitt midt i Q2."
                        : "A startup that is planning to launch its product in the middle of Q2."}
                    </p>
                    <ResponsiveH5 className="font-bold underline text-JWC-black">
                      {language === "Norwegian"
                        ? "JWC's roller:"
                        : "JWC's roles:"}
                    </ResponsiveH5>
                    <p className="text-JWC-black">
                      {" "}
                      {language === "Norwegian"
                        ? "Lage deres landingsside"
                        : "Make their landing page"}
                    </p>
                    <p className="text-JWC-black">
                      {language === "Norwegian"
                        ? "Skape innhold for deres konsept"
                        : "Create content for their concept"}
                    </p>
                    <p className="text-xs text-JWC-black">
                      {language === "Norwegian"
                        ? "(linker kommer når siden lanseres)"
                        : "(links will be added when the page is launched)"}
                    </p>
                    <ResponsiveH5 className="font-bold underline text-JWC-black">
                      {language === "Norwegian"
                        ? " JWC's potensielle roller:"
                        : "JWC's potential roles:"}
                    </ResponsiveH5>
                    <p className="text-JWC-black">
                      Full design makover for Wileo.no
                    </p>
                    <p className="text-JWC-black">
                      {language === "Norwegian"
                        ? "Innholdskaper for deres nettsted"
                        : "Content creator for their website"}
                    </p>
                  </ResponsiveUL>
                </div>
              </ClientLayout>
            </TextFlex>
          </section>
          <section className="relative grid justify-center min-h-[40vh] mb-[112px] text-center">
            <TextFlex>
              <ResponsiveP>
                {language === "Norwegian"
                  ? " Flere prosjekter vil bli lagt til etterhvert"
                  : "More projects will be added eventually"}
              </ResponsiveP>
            </TextFlex>
          </section>
        </section>
      </PageLayout>
    </>
  );
}
