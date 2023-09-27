import PageLayout from "@/components/Layout";
import Head from "next/head";
import { ProjectSection } from "@/components/sections/ProjectSection";
import MetaTags from "@/components/Utilities/Metatags";

export default function ProjectPage({ language, Theme }) {
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
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mine prosjekter."
        title="Villo Utvikling - Projects"
        url="https://jvwebconsult.no/projects"
      />
      <PageLayout gap="gap-28">
        <ProjectSection language={language} Theme={Theme} />

        {/* <NewClientLayout language={language} Theme={Theme} /> */}

        <div className="mb-[112px]" />
      </PageLayout>
    </>
  );
}
