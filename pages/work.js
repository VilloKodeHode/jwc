import PageLayout from "@/components/Layout";
import { ResponsiveThemedH1 } from "@/components/Responsive text/ResponsiveText";
import Head from "next/head";

import { NewClientLayout } from "@/components/sections/ClientSection";
import { QuotesSection } from "@/components/sections/QuotesSections";
import { CLIENT_LIST } from "@/data/client_list";
import MetaTags from "@/components/Utilities/Metatags";

export default function ProjectPage({ language, Theme }) {
  const clientList =
    CLIENT_LIST.find((list) => list.language === language).CLIENTS || [];
  // const { language } = useContext(LanguageContext);
  return (
    <>
      {/* <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="Villo utviklings prosjekter" />
        <meta
          name="keywords"
          content="web design, development, website, SEO, frontend development, frontend developer, freelance, freelancer, freelance developer, web developer, UI/UX, HTML, CSS, JavaScript, responsive design, cross-browser compatibility"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href={
            Theme === "light"
              ? "/logo/WindLogoNoTextLightMode.svg"
              : "/logo/WindLogoNoTextDarkMode.svg"
          }
        />
      </Head> */}
      <MetaTags
        Theme={Theme}
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mitt tidligere arbeid og attester fra fornøyde kunder."
        title="Villo Utvikling - Work"
        url="https://jvwebconsult.no/work"
      />
      <PageLayout gap="gap-28">
        <div className="pt-12 text-center">
          <ResponsiveThemedH1>
            {language === "Norwegian" ? "Arbeid" : "Work"}
          </ResponsiveThemedH1>
        </div>
        <NewClientLayout
          clients={clientList}
          language={language}
          Theme={Theme}
        />
        <QuotesSection language={language} Theme={Theme} />
        <div className="mb-[112px]" />
      </PageLayout>
    </>
  );
}
