import { ContactformSection } from "@/components/sections/ContactPage/ContactformSection";
import MetaTags from "@/components/Utilities/Metatags";


export default function ContactPage() {

  return (
    <>
   <MetaTags
        description="Ta kontakt gjennom skjemaet på denne siden for en hyggelig prat om ditt prosjekt"
        title="Villo Utvikling - Contact"
        url="https://jvwebconsult.no/contact"
      />
      <ContactformSection />
    </>
  );
}
