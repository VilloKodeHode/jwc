import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
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

      <ProjectSection language={language} Theme={Theme} />

      {/* <NewClientLayout language={language} Theme={Theme} /> */}

      <LetsGoCTA
        language={language}
        Theme={Theme}
        engText="Check my work with previous customers"
        norText="Sjekk mitt arbeid med tidligere kunder"
        href="/work"
        buttonEngText="My work"
        buttonNorText="Mitt arbeid"
      />

    </>
  );
}
