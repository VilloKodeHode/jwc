import MetaTags from "@/components/Utilities/Metatags";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import { useContext } from "react";
import { UserContext } from "../../components/Utilities/UserContext";
import { SubpageContent } from "../../components/sections/subpages/SubPageContent";



export default function ProvidedServiceWebsite() {
  const { theme, language } = useContext(UserContext);
  return (
    <>
      <MetaTags
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du ny nettside?"
        url="https://jvwebconsult.no/services_provided/website"
      />

      <SubpageContent page="website" id="website" />

      <LetsGoCTA
        type="email"
        engText="Let us make you new website!"
        norText="La oss lage din nye nettside!"
        href="/contact"
      >{language === "Norwegian" ? "Kontakt meg" : "Contact me"}</LetsGoCTA>

    </>
  );
}
