import { ClientsSection } from "@/components/sections/WorkPage/ClientSection";
import { QuotesSection } from "@/components/sections/WorkPage/QuotesSections";
import MetaTags from "@/components/Utilities/Metatags";
import { LetsGoCTA } from "@/components/organisms/LetsGoCTA";
import { WorkedWithSection } from "@/components/sections/WorkPage/WorkedWithSection";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { ResponsiveThemedH1, ThemedP } from "@/components/atoms/ResponsiveText";

export default function ProjectPage() {
  const { language } = useContext(UserContext);
  return (
    <>

      <MetaTags
        description="Villo utvikling spesialiserer seg på å tilby høykvalitets webutviklings- og designtjenester. Lær mer om mitt tidligere arbeid og attester fra fornøyde kunder."
        title="Villo Utvikling - Work"
        url="https://villoutvikling.com/work"
      />

      <div className="pt-12">
        <ResponsiveThemedH1>
          {language === "Norwegian" ? "Portofølje" : "Portfolio"}
        </ResponsiveThemedH1>
        <ThemedP className="pt-8 mx-auto text-left max-w-7xl">
          {language === "Norwegian"
            ? "Med lidenskap for front-end-utvikling og et forpliktende fokus på å skape brukersentrerte design, gir jeg liv til din visjon. Utforsk prosjektene jeg har hatt gleden av å jobbe med, hver av dem representerer en blanding av kunst og teknologi som definerer min tilnærming."
            : "With a passion for front-end development and a commitment to creating user-centric designs, I bring your vision to life. Explore the projects I've had the privilege to work on, each representing the blend of art and technology that defines my approach."}
        </ThemedP>
      </div>
      <ClientsSection />
      <WorkedWithSection />
      <QuotesSection />
      <LetsGoCTA
        type="email"
        engText="Make me you coworker!"
        norText="Få meg som medarbeider!"
        href="/contact"
      >
        {language === "Norwegian" ? "Kontakt meg" : "Contact me"}
      </LetsGoCTA>


    </>
  );
}
