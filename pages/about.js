import CallToActionButton, { BigButton } from "@/components/Buttons";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import PageLayout from "@/components/Layout";
import {
  ResponsiveH3,
  ResponsiveThemedH3,
} from "@/components/Responsive text/ResponsiveText";
import { CompanyInfo } from "@/components/sections/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Head from "next/head";
import Image from "next/image";
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
        <link
          rel="icon"
          href={
            Theme === "light"
              ? "/logo/WindLogoNoTextLightMode.svg"
              : "/logo/WindLogoNoTextDarkMode.svg"
          }
        />
      </Head>
      <PageLayout gap="gap-28">
        <CompanyInfo language={language} Theme={Theme} />
        <SkillsSection language={language} Theme={Theme} />

        <LetsGoCTA
          language={language}
          Theme={Theme}
          engText="Check my portfolio"
          norText="Sjekk min portfølje"
          href="/projects"
          buttonEngText="View portfolio"
          buttonNorText="Se portfølje"
        />
      </PageLayout>
    </>
  );
}
