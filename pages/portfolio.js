import PageLayout from "@/components/Layout/Layout";
import { ResponsiveThemedH1, ThemedP } from "@/components/Responsive text/ResponsiveText";
import Head from "next/head";

import { NewClientLayout } from "@/components/sections/WorkPage/ClientSection";
import { QuotesSection } from "@/components/sections/WorkPage/QuotesSections";
import { CLIENT_LIST } from "@/data/client_list";
import MetaTags from "@/components/Utilities/Metatags";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import { NewWorkedWithSection, WorkedWithSection } from "@/components/sections/WorkPage/WorkedWithSection";

export default function ProjectPage({ language, Theme }) {
  const clientList =
    CLIENT_LIST.find((list) => list.language === language).CLIENTS || [];
  return (
    <>

      <MetaTags
        Theme={Theme}
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mitt tidligere arbeid og attester fra fornøyde kunder."
        title="Villo Utvikling - Work"
        url="https://jvwebconsult.no/work"
      />

      <div className="pt-12">
        <ResponsiveThemedH1>
          {language === "Norwegian" ? "Portofølje" : "Portfolio"}
        </ResponsiveThemedH1>
        <ThemedP className="pt-8 mx-auto text-left max-w-7xl">
          {language === "Norwegian"
            ? "Med lidenskap for front-end-utvikling og et forpliktende fokus på å skape brukersentrerte design, gir jeg liv til din visjon. Utforsk prosjektene jeg har hatt gleden av å jobbe med, hver av dem representerer en blanding av kunst og teknologi som definerer min tilnærming."
            : "With a passion for front-end development and a commitment to creating user-centric designs, I bring your vision to life. Explore the projects I&apos;ve had the privilege to work on, each representing the blend of art and technology that defines my approach."}

        </ThemedP>
      </div>
      <NewClientLayout
        clients={clientList}
        language={language}
        Theme={Theme}
      />
      {/* <NewWorkedWithSection language={language} Theme={Theme} /> */}
      <WorkedWithSection language={language} Theme={Theme} />
      <QuotesSection language={language} Theme={Theme} />
      <LetsGoCTA
        language={language}
        type="email"
        Theme={Theme}
        engText="Make me you coworker!"
        norText="Få meg som medarbeider!"
        href="/contact"

      > {language === "Norwegian" ? "Kontakt meg" : "Contact me"}</LetsGoCTA>


    </>
  );
}
