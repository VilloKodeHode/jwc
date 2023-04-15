import { Player, Controls } from "@lottiefiles/react-lottie-player";
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

export default function Projects() {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="JWC projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <section className="relative grid justify-center min-h-[70vh] text-center mt-[112px]">
          <TextFlex>
            <ResponsiveH1>Prosjekter</ResponsiveH1>
          </TextFlex>
          <div className="flex flex-col justify-center gap-24">
            {PROJECT_LIST.map((project) => (
              <ProjectCard
                key={project.projectName}
                projectName={project.projectName}
                textColor={project.textColor}
                src={project.src}
                alt={project.alt}
                cardColor={project.cardColor}
                href={project.href}
                hrefCode={project.hrefCode}
                description={project.description}
                mobileSrc={project.mobileSrc}
              />
            ))}
          </div>
          <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center">
            <div className="absolute w-screen left-1/2 -translate-x-1/2 h-[70%] bg-JWC-tertiary -translate-y-1/2 top-1/2 " />
            <TextFlex textWidth="max-w-[60ch]">
              <div>
                <ResponsiveH3>Klienter</ResponsiveH3>
              </div>
              <ClientLayout>
                <ResponsiveH4>Wileo AS</ResponsiveH4>
                <Image
                  src="/liva-logo.png"
                  alt="LIVA"
                  width="50"
                  height="50"
                  className="absolute top-5 left-5"
                />
                <div className="text-start">
                  <ResponsiveUL>
                    <p>Et startup som skal lansere produktet sitt midt i Q2.</p>
                    <ResponsiveH5 className="font-bold underline">
                      JWCs roller:
                    </ResponsiveH5>
                    <p>Lage deres landingsside</p>
                    <p>Skape innhold for deres konsept</p>
                    <p className="text-xs">
                      (linker kommer når siden lanseres)
                    </p>
                    <ResponsiveH5 className="font-bold underline">
                      JWCs potensielle roller:
                    </ResponsiveH5>
                    <p>Komplett design makover for Wileo.no</p>
                    <p>Innholdskaper for deres nettsted</p>
                  </ResponsiveUL>
                </div>
              </ClientLayout>
            </TextFlex>
          </section>
          <section className="relative grid justify-center min-h-[40vh] mb-[112px] text-center">
            <TextFlex>
              <ResponsiveP>
                Flere prosjekter vil bli lagt til etterhvert
              </ResponsiveP>
            </TextFlex>
          </section>
        </section>
      </PageLayout>
    </>
  );
}
