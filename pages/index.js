import PageLayout from "@/components/Layout/Layout";
import { CTAOneSection } from "@/components/sections/IndexPage/CTAOneSection";
import { OfferSection } from "@/components/sections/IndexPage/OfferSection";
import { HeroSection } from "@/components/sections/IndexPage/HeroSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { useContext } from "react";
import { UserContext } from "../components/Utilities/UserContext";

export default function Home() {
  const { language } = useContext(UserContext);
  return (
    <>
      <MetaTags
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Home"
        url="https://jvwebconsult.no/"
      />

      <HeroSection />
      <CTAOneSection />
      <OfferSection />
      <LetsGoCTA
        type="email"
        engText="Let's get started!"
        norText="La oss komme i gang!"
        href="/contact"
      >
        {language === "Norwegian" ? "Kontakt meg" : "Contact me"}
      </LetsGoCTA>
    </>
  );
}
