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
        <title>Frontend webutvikling og webdesign service | Villo Utvikling</title>
        <meta
          name="description"
          content="Frontend webutvikling og webdesign service. Omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        />
        <meta name="keywords" content="webdesign, webutvikling, nettside, SEO, frontend-utvikling, frontend-utvikler, frilans, frilanser, frilans utvikler, webutvikler, UI/UX, HTML, CSS, JavaScript, responsivt design, kryssnettleserkompatibilitet" />
        <meta name="theme-color" content="#a2cbcc" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Villo Utvikling" />
        <meta charSet="UTF-8" />

        <meta name="og:title" content="Profesjonell Frontend webutvikling og webdesign service | Villo Utvikling" />
        <meta name="og:description" content="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder." />
        <meta name="og:image" content="/logo/WindLogoNoTextLightMode.svg" />
        <meta name="og:url" content="https://jvwebconsult.no/" />
        <meta name="og:site_name" content="Villo Utvikling" />
        <meta name="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jvwebconsult" />
        <meta name="twitter:creator" content="@jvwebconsult" />
        <meta name="twitter:description" content="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder." />
        <meta name="twitter:image" content="/logo/WindLogoNoTextLightMode.svg" />
        <meta name="twitter:image:alt" content="Villo Utvikling logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jvwebconsult" />
        <meta name="twitter:creator" content="@jvwebconsult" />
        <meta name="twitter:title" content="Profesjonell Frontend webutvikling og webdesign service | Villo Utvikling" />

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
