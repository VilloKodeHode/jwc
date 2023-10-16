import PageLayout from "@/components/Layout/Layout";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";


import { SEOServiceBottomSection, SEOServiceTopSection } from "@/components/sections/SEOPage/SEOServiceContentSection";
import { SEOProcessSection } from "@/components/sections/SEOPage/SEOProcessSection";


export default function ProvidedServiceSEO({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du nettinnhold?"
        url="https://jvwebconsult.no/services_provided/webcontent"
      />
      <PageLayout gap="gap-28">
        <SEOServiceTopSection language={language} Theme={Theme} />
        <SEOProcessSection id="SEOYouGet" language={language} Theme={Theme} />
        <SEOServiceBottomSection language={language} Theme={Theme} />
        <LetsGoCTA
          language={language}
          type="email"
          Theme={Theme}
          engText="Lets improve your SEO!"
          norText="Lås opp din synlighet!"
          href="/contact"
        >{language === "Norwegian" ? "Kontakt meg" : "Contact me"}</LetsGoCTA>

      </PageLayout>
    </>
  );
}
