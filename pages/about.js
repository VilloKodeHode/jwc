import { BigButton } from "@/components/Buttons";
import PageLayout from "@/components/Layout";
import { CompanyInfo } from "@/components/sections/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Head from "next/head";
import Link from "next/link";

export default function AboutPage({ language, Theme }) {
  return (
    <>
      <Head>
        <title>Villo utvikling</title>
        <meta name="description" content="Villo utvikling kontakt skjema" />
        <meta
          name="keywords"
          content="contact form, kontaktskjema, skjema, kontakt, contact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/WindLogoNoText.svg" />
      </Head>
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
    </>
  );
}
