import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import MetaTags from "@/components/Utilities/Metatags";
import { SubpageContent } from "../../components/sections/subpages/SubPageContent";
import { useContext } from "react";
import { UserContext } from "../../components/Utilities/UserContext";



export default function ProvidedServiceWebcontent() {
  const { theme, language } = useContext(UserContext);
  return (
    <>
      <MetaTags
  
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Trenger du nettinnhold?"
        url="https://jvwebconsult.no/services_provided/webcontent"
      />
<SubpageContent page="webcontent" id="webcontent" />
      <LetsGoCTA
        type="email"
        engText="Let us make some webcontent!"
        norText="La oss lage noe nettinnhold!"
        href="/contact"
      >{language === "Norwegian" ? "Kontakt meg" : "Contact me"}</LetsGoCTA>
    </>
  );
}
