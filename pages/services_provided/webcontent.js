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
import { ServicesSectionPart } from "@/components/sections/sectionsParts/ServiceSectionsParts";
import { ResponsiveThemedH2, ThemedP } from "@/components/Responsive text/ResponsiveText";

export default function ProvidedServiceWebcontent({ language, Theme }) {
  return (
    <>
      <MetaTags
        Theme={Theme}
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Home"
        url="https://jvwebconsult.no/"
      />
      <PageLayout gap="gap-28">
      <div className="py-12 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Trenger du nettinnhold?" : "Need webcontent?"}
          </ResponsiveThemedH2>
          <ThemedP className={`mt-4`}>
            {language === "Norwegian"
              ? "Levering av engasjerende og innflytelsesrik webinnhold er min ekspertise. Jeg forstår at innholdet på nettstedet ditt spiller en avgjørende rolle i å tiltrekke og beholde besøkende. Med en lidenskap for effektiv kommunikasjon og en evne for kreativitet, tilbyr jeg profesjonelle tjenester innen webinnholdsskaping til bedrifter og enkeltpersoner som ønsker å skape et varig inntrykk på nettet. Min tilnærming til innholdsskaping er skreddersydd for dine unike behov og mål. Enten du trenger engasjerende blogginnlegg, informative artikler, overbevisende produktbeskrivelser eller engasjerende innhold for sosiale medier, har jeg ferdighetene som kreves. Jeg gjennomfører grundig research for å sikre at innholdet ikke bare er velinformert, men også relevant for din målgruppe."
              : "Delivering engaging and impactful web content is my expertise. I understand that the content on your website plays a pivotal role in attracting and retaining visitors. With a passion for effective communication and a flair for creativity, I offer professional web content creation services to businesses and individuals looking to make a lasting impression online. My approach to content creation is tailored to your unique needs and objectives. Whether you require compelling blog posts, informative articles, persuasive product descriptions, or engaging social media content, I have the skills to deliver. I conduct thorough research to ensure that the content is not only well-informed but also relevant to your target audience."}
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
