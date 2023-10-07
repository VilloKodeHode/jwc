import PageLayout from "@/components/Layout/Layout";
import { ProjectSection } from "@/components/sections/ProjectsPage/ProjectSection";
import MetaTags from "@/components/Utilities/Metatags";

export default function ProjectPage({ language, Theme }) {
  // const { language } = useContext(LanguageContext);
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mine prosjekter."
        title="Villo Utvikling - Projects"
        url="https://jvwebconsult.no/projects"
      />
      <PageLayout gap="gap-28">
        <ProjectSection language={language} Theme={Theme} />

        {/* <NewClientLayout language={language} Theme={Theme} /> */}

        <div className="mb-[112px]" />
      </PageLayout>
    </>
  );
}
