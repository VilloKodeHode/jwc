import { OfferSection } from "@/components/sections/IndexPage/OfferSection";
import { HeroSection } from "@/components/sections/IndexPage/HeroSection";
import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { ShowcaseSection } from "../components/sections/IndexPage/ShowcaseSection";

export default function Home() {
  const { language } = useContext(UserContext);
  return (
    <>
      <MetaTags
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Home"
        url="https://www.villoutvikling.com/"
      />

      <HeroSection />
      <ShowcaseSection />
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
