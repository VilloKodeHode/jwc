import { BigButton } from "@/components/Buttons";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
  ResponsiveSmall,
} from "@/components/Responsive text/ResponsiveText";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  return (
    <PageLayout gap="gap-28">
      <section className="grid items-center min-h-[70vh] justify-center w-screen font-bold text-center lg:grid-cols-2 mt-[56px]">
        <div className="flex flex-col items-center justify-center lg:h-full h-[50vh] bg-JWC-primary px-8">
          <div className="">
            <ResponsiveH2 className="text-JWC-white">
              JV Web Consult
            </ResponsiveH2>
            <ResponsiveH3>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH3>
          </div>
          <TextFlex textWidth="md:max-w-[60ch] max-w-[80ch]">
            <ResponsiveH4 className="text-JWC-white">
              {language === "Norwegian" ? "Norsk foretak" : "Norwegian company"}
            </ResponsiveH4>
            <ResponsiveP className="text-JWC-white">
              {language === "Norwegian"
                ? "Siden oppstarten i Tønsberg i 2023 har selskapet fokusert på å skaffe nye kunder ved å ta på seg mindre prosjekter og bygge opp en lojal kundebase."
                : "Since its inception in Tønsberg in 2023, the company has focused on acquiring new customers by taking on smaller projects and building a loyal customer base."}
            </ResponsiveP>
          </TextFlex>
        </div>
        <div className="w-screen lg:h-full lg:w-full h-[50vh] tonsbergBG" />
      </section>

      <section className="flex relative w-screen min-h-[40vh] py-8 bg-JWC-tertiary snap-center font-Lato">
        <div className="z-20 grid items-start justify-center w-full">
          <SkillWithTabs />
        </div>
      </section>

      <div className="mb-[92px]">
        <Link href="/projects">
          <BigButton>
            <ResponsiveSmall className="text-JWC-white">
              {language === "Norwegian" ? "Prosjekter" : "Projects"}
            </ResponsiveSmall>
          </BigButton>
        </Link>
      </div>
    </PageLayout>
  );
}
