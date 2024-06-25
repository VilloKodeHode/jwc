import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { SubpageContent } from "@/components/sections/subpages/SubPageContent";
import { useRouter } from "next/router";
import { DynamicMetaTags } from "@/components/Utilities/Metatags";



export default function ProvidedServiceWebsite() {
  //TODO see if this can me moved to the UserContext
  const router = useRouter()
  const { service } = router.query
  const { theme, language } = useContext(UserContext);
  return (
    <>
      {service &&
        <>
          <DynamicMetaTags page={service} />
          <SubpageContent page={service} />
        </>
      }


      <LetsGoCTA
        type="email"
        engText="Let us make you new website!"
        norText="La oss lage din nye nettside!"
        href="/contact"
      >
        {language === "Norwegian" ? "Kontakt meg" : "Contact me"}
      </LetsGoCTA>

    </>
  );
}
