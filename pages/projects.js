import PageLayout, { ClientLayout, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveP,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";
import Head from "next/head";
import { useContext } from "react";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ClientSection } from "@/components/sections/ClientSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function ProjectPage() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta
          name="Villo utviklings's prosjekter"
          content="Villo utviklings prosjekter"
        />
        <meta
          name="keywords"
          content="webdesign, utvikling, nettside, SEO, prosjekter, projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/WindLogoNoText.svg" />
      </Head>
      <PageLayout gap="gap-28">
        <ProjectSection />
        <ClientSection />

        <section className="relative grid justify-center min-h-[40vh] mb-[112px] text-center">
          <TextFlex>
            <ResponsiveP>
              {language === "Norwegian"
                ? " Flere prosjekter vil bli lagt til etterhvert"
                : "More projects will be added eventually"}
            </ResponsiveP>
          </TextFlex>
        </section>
        {/* </section> */}
      </PageLayout>
    </>
  );
}
