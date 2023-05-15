import { BigButton } from "@/components/Buttons";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
  ResponsiveSmall,
  ResponsiveThemedH2,
  ResponsiveThemedH4,
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "@/components/Responsive text/ResponsiveText";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import SKILLS_LIST from "@/components/Skills/skills_list";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import LogoComponent, {
  SimpleLogoComponent,
} from "@/components/base components/Logo";
import { CompanyInfo } from "@/components/sections/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  return (
    <PageLayout gap="gap-28">
      <CompanyInfo />
      <SkillsSection />

      <div className="mb-[92px]">
        <Link href="/projects">
          <BigButton>
            {language === "Norwegian" ? "Prosjekter" : "Projects"}
          </BigButton>
        </Link>
      </div>
    </PageLayout>
  );
}
