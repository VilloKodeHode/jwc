import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import PageLayout from "@/components/Layout/Layout";
import MetaTags from "@/components/Utilities/Metatags";
import { CompanyInfo } from "@/components/sections/AboutPage/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/AboutPage/SkillsSection";
import { ProjectSection } from "@/components/sections/ProjectsPage/ProjectSection";


export default function AboutPage({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om meg."
        title="Villo Utvikling - About"
        url="https://jvwebconsult.no/about"
      />
      <PageLayout gap="gap-28">
        <CompanyInfo language={language} Theme={Theme} />
        <SkillsSection language={language} Theme={Theme} />

        <ProjectSection language={language} Theme={Theme} />

        <LetsGoCTA
          language={language}
          Theme={Theme}
          engText="Check my portfolio"
          norText="Sjekk min portfølje"
          href="/portfolio"
          buttonEngText="View portfolio"
          buttonNorText="Se portfølje"
        />
      </PageLayout>
    </>
  );
}
