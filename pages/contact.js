import { ContactformSection } from "@/components/sections/ContactPage/ContactformSection";
import MetaTags from "@/components/Utilities/Metatags";
import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";


export default function ContactPage() {
  const { language } = useContext(UserContext);

  return (
    <>
   <MetaTags
        description="Ta kontakt gjennom skjemaet på denne siden for en hyggelig prat om ditt prosjekt"
        title="Villo Utvikling - Contact"
        url="https://jvwebconsult.com/contact"
      />
      <ContactformSection />
      <LetsGoCTA
        type="portfolio"
        engText="Need to see more? Check my portfolio"
        norText="Trenger du mer? Sjekk min portfølje"
        href="/portfolio"
      >
        {language === "Norwegian" ? "Portofølje" : "Portfolio"}
      </LetsGoCTA>
    </>
  );
}
