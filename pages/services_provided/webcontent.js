import PageLayout from "@/components/Layout";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { WebcontentServiceTopSection } from "@/components/sections/webcontent_subpage/WebcontentServiceTopSection";
import { WebcontentProcessSection } from "@/components/sections/webcontent_subpage/WebcontentProcessSection";

export default function ProvidedServiceWebcontent({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du nettinnhold?"
        url="https://jvwebconsult.no/services_provided/webcontent"
      />
      <PageLayout gap="gap-28">
        <WebcontentServiceTopSection language={language} Theme={Theme} />
        <WebcontentProcessSection language={language} Theme={Theme} />
        <LetsGoCTA
          language={language}
          Theme={Theme}
          engText="Let us make you new website!"
          norText="La oss lage din nye nettside!"
          href="/contact"
          buttonEngText="Contact us"
          buttonNorText="Kontakt oss"
        />
      </PageLayout>
    </>
  );
}
