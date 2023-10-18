import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import PageLayout from "@/components/Layout/Layout";
import MetaTags from "@/components/Utilities/Metatags";
import { CompanyInfo } from "@/components/sections/AboutPage/CompanyInfoSection";
import { MyIntroSection } from "@/components/sections/AboutPage/MyIntroSection";
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
        <MyIntroSection language={language} Theme={Theme} />

        <SkillsSection language={language} Theme={Theme} />

        <ProjectSection language={language} Theme={Theme} />
        <LetsGoCTA
          language={language}
          type="portfolio"
          Theme={Theme}
          engText="Check my portfolio"
          norText="Sjekk min portfølje"
          href="/portfolio"

        > {language === "Norwegian" ? "Portofølje" : "Portfolio"}
        </LetsGoCTA>



      </PageLayout>
    </>
  );
}
