import PageLayout from "@/components/Layout/Layout";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";

import { WebcontentProcessSection } from "@/components/sections/WebContentPage/WebcontentProcessSection";
import { WebcontentServiceBottomSection, WebcontentServiceTopSection } from "@/components/sections/WebContentPage/WebcontentServiceContentSection";


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
        <WebcontentProcessSection id="webContentYouGet" language={language} Theme={Theme} />
        <WebcontentServiceBottomSection language={language} Theme={Theme} />
        <LetsGoCTA
          language={language}
          type="email"
          Theme={Theme}
          engText="Let us make some webcontent!"
          norText="La oss lage noe nettside!"
          href="/contact"
        >{language === "Norwegian" ? "Kontakt meg" : "Contact me"}</LetsGoCTA>
      </PageLayout>
    </>
  );
}
