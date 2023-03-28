import { Player, Controls } from "@lottiefiles/react-lottie-player";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1 from "@/components/Responsive text/ResponsiveText";
import { IoConstructOutline } from "react-icons/io5";
import PROJECT_LIST from "@/components/Projects/projects_list";
import ProjectCard from "@/components/Projects/ProjectCard";
import Head from "next/head";

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
        <section className="relative grid justify-center min-h-[70vh] my-28 text-center">
          <TextFlex>
            <ResponsiveH1>Prosjekter</ResponsiveH1>
          </TextFlex>
          <div className="flex flex-col justify-center gap-12">
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
        </section>
      </PageLayout>
    </>
  );
}
