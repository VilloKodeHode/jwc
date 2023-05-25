import { BigButton } from "@/components/Buttons";
import PageLayout from "@/components/Layout";
import { CompanyInfo } from "@/components/sections/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Link from "next/link";

export default function AboutPage({ language, Theme }) {
  return (
    <PageLayout gap="gap-28">
      <CompanyInfo language={language} Theme={Theme} />
      <SkillsSection language={language} Theme={Theme} />

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
