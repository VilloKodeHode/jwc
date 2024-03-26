import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import { useContext } from "react";
import { UserContext } from "../../components/Utilities/UserContext";
import { SubpageContent } from "../../components/sections/subpages/SubPageContent";
import { useRouter } from "next/router";
import { DynamicMetaTags } from "../../components/Utilities/Metatags";



export default function ProvidedServiceWebsite() {
  const router = useRouter()
  const { service } = router.query
  const { theme, language } = useContext(UserContext);
  return (
    <>
      <DynamicMetaTags page={service} />
      <SubpageContent page={service} />

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

export async function getStaticProps({ params }) {
  return {
    props: {
      service: params.service,
    },
  };
}
