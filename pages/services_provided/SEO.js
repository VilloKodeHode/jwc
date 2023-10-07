import PageLayout from "@/components/Layout/Layout";
import MetaTags from "@/components/Utilities/Metatags";
import { ResponsiveThemedH2, ThemedP } from "@/components/Responsive text/ResponsiveText";
import { ServicesSectionPart } from "@/components/sections/ServiceSection";

export default function ProvidedServiceSEO({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du mer trafikk til din nettside?"
        url="https://jvwebconsult.no/services_provided/SEO"
      />
      <PageLayout gap="gap-28">
        <div className="py-12 ">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <ResponsiveThemedH2 className="">
                {language === "Norwegian" ? "Ønsker du mer traffik til din nettside?" : "Do you want more traffic to your website?"}
              </ResponsiveThemedH2>
              <ThemedP className={`mt-4`}>
                {language === "Norwegian"
                  ? "Som en SEO-spesialist tilbyr jeg eksperttjenester dedikert til å forbedre og optimalisere din online tilstedeværelse. Hvis du sliter med lave rangeringer i søkemotorer, redusert nettsidetrafikk eller dårlig synlighet på nett, har jeg ferdighetene og erfaringen som trengs for å løse disse problemene og få nettstedet ditt tilbake på rett spor. Mine SEO-fikstjenester er skreddersydd for å håndtere de spesifikke utfordringene nettstedet ditt kan stå overfor. Jeg starter med en grundig gjennomgang av nettstedet for å identifisere områder som kan forbedres. Dette inkluderer vurdering av on-page faktorer, vurdering av tilbakekoblinger (backlinks) og analyse av nøkkelordsytelse. Når problemene er identifisert, implementerer jeg effektive strategier for å rette dem opp. Dette kan innebære optimalisering av meta-tags, forbedring av innholds-kvaliteten, økning av nettsidehastighet eller fjerning av skadelige tilbakekoblinger. Målet mitt er å sørge for at nettstedet ditt ikke bare følger søkemotorenes retningslinjer, men overgår dem, noe som fører til forbedrede rangeringer i søkeresultatene og økt organisk trafikk. Jeg holder meg oppdatert med de nyeste trendene innen SEO og endringer i algoritmer for å sikre at nettstedet ditt forblir konkurransedyktig i det stadig skiftende digitale landskapet. La meg hjelpe deg med å løse dine SEO-utfordringer og realisere det fulle potensialet til din online tilstedeværelse."
                  : "As an SEO specialist, I offer expert services dedicated to enhancing and optimizing your online presence. If you're struggling with low search engine rankings, decreased website traffic, or poor online visibility, I have the skills and experience to fix these issues and get your website back on track. My SEO fixing services are tailored to address the specific challenges your website may be facing. I begin with a comprehensive website audit to identify areas of improvement. This includes evaluating on-page factors, assessing backlinks, and analyzing keyword performance. Once the issues are identified, I implement effective strategies to rectify them. This may involve optimizing meta tags, improving content quality, enhancing site speed, or disavowing harmful backlinks. My goal is to ensure that your website not only meets but exceeds search engine guidelines, leading to improved search rankings and increased organic traffic. I stay updated with the latest SEO trends and algorithm changes to ensure that your website remains competitive in the ever-evolving digital landscape. Let me help you resolve your SEO challenges and unlock the full potential of your online presence."}
              </ThemedP>
            </div>

            <div className="mt-10 ">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <ServicesSectionPart
                  Theme={Theme}
                  language={language}
                  norTitle="Nettinnhold"
                  engTitle="Webcontent"
                  norText="Jeg har kunnskap innen flere felt utenom programmering, som ernæring, pedagogikk og fysisk aktivitet. Jeg kan skrive nettinnhold som både er informativt og engasjerende."
                  engText="I'm knowledgeable in several fields outside of programming, like nutrition, pedagogy and physical activity. I can write content for your website that is both informative and engaging."
                />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
