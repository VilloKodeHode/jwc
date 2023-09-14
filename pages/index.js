import Head from "next/head";
import PageLayout from "@/components/Layout";
import CallToActionButton from "@/components/Buttons";
import Link from "next/link";

import { CTAOneSection } from "@/components/sections/CTAOneSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";

export default function Home({ language, Theme }) {
  return (
    <>
      <Head>
        <title>Profesjonell Frontend web utvikling service | Villo Utvikling</title>
        <meta name="description" content="Villo utvikling's webside" />
        <meta name="keywords" content="webdesign, utvikling, nettside, SEO, frontend-utvikling, frontend-utvikler, frilans, frilanser, frilans utvikler, webutvikler, UI/UX, HTML, CSS, JavaScript, responsivt design, kryssnettleserkompatibilitet" />
        <meta name="theme-color" content="#a2cbcc" />
        <meta
          name="description"
          content="Omskaper ideer til fengslende nettsider gjennom profesjonell frontend-utvikling. Spesialister på responsive, brukervennlige og visuelt tiltalende nettsteder ved hjelp av HTML, CSS, JavaScript og rammeverk som React og Next.js. Samarbeid med oss i dag!" />

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
        <HeroSection language={language} Theme={Theme} />
        <CTAOneSection language={language} Theme={Theme} />
        <BenefitsSection language={language} Theme={Theme} />
        <ServicesSection language={language} Theme={Theme} />

        <LetsGoCTA
          language={language}
          Theme={Theme}
          engText="Let's get started!"
          norText="La oss komme i gang!"
          href="/contact"
          buttonEngText="Contact us"
          buttonNorText="Kontakt oss"
        />
      </PageLayout>
    </>
  );
}
