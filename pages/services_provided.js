import { OfferPageContent } from "../components/sections/ServicesPage/OfferPageContent";
import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function ServicesProvided() {
    const { language } = useContext(UserContext);
    return (
        <>
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