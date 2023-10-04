import Head from "next/head";
import PageLayout from "@/components/Layout";
import CallToActionButton from "@/components/Buttons";
import Link from "next/link";

import { CTAOneSection } from "@/components/sections/CTAOneSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { SectionNavigation } from "@/components/navigation/SectionNavigation";

export default function Home({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Home"
        url="https://jvwebconsult.no/"
      />
      <PageLayout gap="gap-28">
        <SectionNavigation language={language} Theme={Theme} />
        <HeroSection language={language} Theme={Theme} />
        <CTAOneSection language={language} Theme={Theme} />
        <OfferSection language={language} Theme={Theme} />
        {/* <ServicesSection language={language} Theme={Theme} /> */}

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
