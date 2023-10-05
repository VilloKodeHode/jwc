import PageLayout from "@/components/Layout";
import MetaTags from "@/components/Utilities/Metatags";
import { ServicesSectionPart } from "@/components/sections/sectionsParts/ServiceSectionsParts";
import { ResponsiveThemedH1, ResponsiveThemedH2, ThemedH5, ThemedP } from "@/components/Responsive text/ResponsiveText";
import { WebsiteServiceSection } from "@/components/sections/website_subpage/WebsiteServiceTopSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import { WebsiteProcessSection } from "@/components/sections/website_subpage/WebsiteProcessSection";

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
        <WebsiteServiceSection language={language} Theme={Theme} />
        <WebsiteProcessSection language={language} Theme={Theme} />
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
