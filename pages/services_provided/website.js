import PageLayout from "@/components/Layout/Layout";
import MetaTags from "@/components/Utilities/Metatags";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import { WebsiteProcessSection } from "@/components/sections/WebsitePage/WebsiteProcessSection";
import { WebsiteServiceBottomSection, WebsiteServiceTopSection } from "@/components/sections/WebsitePage/WebsiteServiceContentSections";


export default function ProvidedServiceWebsite({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du ny nettside?"
        url="https://jvwebconsult.no/services_provided/website"
      />
      <PageLayout gap="gap-28">
        <WebsiteServiceTopSection language={language} Theme={Theme} />
        <WebsiteProcessSection id="websiteYouGet" language={language} Theme={Theme} />
        <WebsiteServiceBottomSection language={language} Theme={Theme} />
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
