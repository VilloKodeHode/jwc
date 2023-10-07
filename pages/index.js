import PageLayout from "@/components/Layout/Layout";
import { CTAOneSection } from "@/components/sections/IndexPage/CTAOneSection";
import { OfferSection } from "@/components/sections/IndexPage/OfferSection";
import { HeroSection } from "@/components/sections/IndexPage/HeroSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { SectionNavigation } from "@/components/sections/IndexPage/SectionNavigation";


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
