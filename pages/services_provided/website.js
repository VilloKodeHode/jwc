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

export default function ProvidedServiceWebsite({ language, Theme }) {
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
            {language === "Norwegian" ? "Trenger du ny nettside?" : "Need a new website?"}
          </ResponsiveThemedH2>
          <ThemedP className={`mt-4`}>
            {language === "Norwegian"
              ? "Som profesjonell nettsidedesigner spesialiserer jeg meg på å lage imponerende og funksjonelle nettsteder som tilpasses dine unike behov og mål. Med års erfaring innen feltet forstår jeg betydningen av en sterk tilstedeværelse på nett i dagens digitale tidsalder. Mine tjenester er skreddersydd for enkeltpersoner og bedrifter som ønsker å etablere eller forbedre sin online tilstedeværelse. Jeg tar en personlig tilnærming til hvert prosjekt, slik at nettstedet ditt ikke bare ser visuelt tiltalende ut, men også fungerer sømløst på alle enheter. Enten du lanserer en helt ny nettside eller ønsker å fornye den eksisterende, er jeg her for å gjøre din visjon til virkelighet. Fra brukervennlig navigasjon til iøynefallende designelementer, legger jeg nøye vekt på hver detalj. La oss samarbeide for å skape en nettside som ikke bare gjenspeiler merket ditt, men også gir resultater og etterlater et varig inntrykk på dine besøkende"
              : "As a professional website designer, I specialize in crafting stunning and functional websites that cater to your unique needs and goals. With years of experience in the field, I understand the importance of a strong online presence in today's digital age. My services are tailored to individuals and businesses looking to establish or enhance their online footprint. I take a personalized approach to every project, ensuring that your website not only looks visually appealing but also functions seamlessly across devices. Whether you're launching a brand-new website or looking to revamp your existing one, I'm here to turn your vision into a reality. From user-friendly navigation to eye-catching design elements, I pay meticulous attention to every detail. Let's work together to create a website that not only reflects your brand but also drives results and leaves a lasting impression on your visitors."}
          </ThemedP>
        </div>

        <div className="mt-10 ">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <ServicesSectionPart
              Theme={Theme}
              language={language}
              norTitle="Lage nettside"
              engTitle="Website creation"
              norText="Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv."
              engText="I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive."
            />
          </div>
        </div>
      </div>
    </div>
      </PageLayout>
    </>
  );
}
