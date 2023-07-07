import PageLayout, { ClientLayout, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedP,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";
import Head from "next/head";
import { useContext } from "react";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ClientSection } from "@/components/sections/ClientSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function ProjectPage({ language, Theme }) {
  // const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="Villo utviklings prosjekter" />
        <meta
          name="keywords"
          content="web design, development, website, SEO, frontend development, frontend developer, freelance, freelancer, freelance developer, web developer, UI/UX, HTML, CSS, JavaScript, responsive design, cross-browser compatibility"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
             <link rel="icon" href={Theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"} />
      </Head>
      <PageLayout gap="gap-28">
        <ProjectSection language={language} Theme={Theme} />
        <ClientSection language={language} Theme={Theme} />

        <section className="relative grid justify-center min-h-[40vh] mb-[112px] text-center">
          <TextFlex>
            <ResponsiveThemedP>
              {language === "Norwegian"
                ? " Flere prosjekter vil bli lagt til etterhvert"
                : "More projects will be added eventually"}
            </ResponsiveThemedP>
          </TextFlex>
        </section>
        {/* </section> */}
      </PageLayout>
    </>
  );
}
