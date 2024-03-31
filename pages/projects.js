import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { ProjectSection } from "@/components/sections/AboutPage/ProjectSection";
import MetaTags from "@/components/Utilities/Metatags";

export default function ProjectPage() {
  return (
    <>
      <MetaTags
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mine prosjekter."
        title="Villo Utvikling - Projects"
        url="https://jvwebconsult.no/projects"
      />

      <ProjectSection/>

      {/* <NewClientLayout language={language} Theme={Theme} /> */}

      <LetsGoCTA
        engText="Check my work with previous customers"
        norText="Sjekk mitt arbeid med tidligere kunder"
        href="/work"
        buttonEngText="My work"
        buttonNorText="Mitt arbeid"
      />

    </>
  );
}
