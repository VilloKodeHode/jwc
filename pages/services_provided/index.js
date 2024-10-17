import { OfferPageContent } from "../../components/sections/ServicesPage/OfferPageContent";
import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import MetaTags from "../../components/Utilities/Metatags";


export default function ServicesProvided() {
    const { language } = useContext(UserContext);
    return (
        <>
             <MetaTags
        description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
        title="Villo Utvikling - Services"
        url="https://www.villoutvikling.com/services_provided"
      />
            <OfferPageContent />
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