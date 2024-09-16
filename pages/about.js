import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { CompanyInfo } from "@/components/sections/AboutPage/CompanyInfoSection";
import { MyIntroSection } from "@/components/sections/AboutPage/MyIntroSection";
import { SkillsSection } from "@/components/sections/AboutPage/SkillsSection";
import { ProjectSection } from "@/components/sections/AboutPage/ProjectSection";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";


export default function AboutPage() {
  const { language, theme } = useContext(UserContext);
  return (
    <>
      <MetaTags

        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om meg."
        title="Villo Utvikling - About"
        url="https://jvwebconsult.com/about"
      />

      <CompanyInfo />
      <MyIntroSection />
      <SkillsSection />
      <ProjectSection />
      <LetsGoCTA
        type="portfolio"
        engText="Check my portfolio"
        norText="Sjekk min portfølje"
        href="/portfolio"
      >
        {language === "Norwegian" ? "Portofølje" : "Portfolio"}
      </LetsGoCTA>




    </>
  );
}
