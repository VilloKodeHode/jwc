import {
  ResponsiveThemedH5,
  ResponsiveThemedH2,
  ThemedP,
} from "../Responsive text/ResponsiveText";
import { ServicesSectionPart } from "./sectionsParts/ServiceSectionsParts";

export const ServicesSection = ({ language, Theme }) => {
  return (
    <div className="py-12 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Tjenester" : "Services"}
          </ResponsiveThemedH2>
          <ThemedP className={`mt-4`}>
            {language === "Norwegian"
              ? "Jeg tilbyr en rekke tjenester for å møte dine behov. Enten du trenger hjelp med nettsiden din, digital markedsføring eller noe i mellom, så har jeg deg dekket."
              : "I offer a range of services to meet your needs. Whether you need help with your website, digital marketing, or anything in between, I've got you covered."}
          </ThemedP>
        </div>

        <div className="mt-10 ">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <ServicesSectionPart
              Theme={Theme}
              language={language}
              norTitle="Lage nettside"
              engTitle="Website creation"
              norText="Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv."
              engText="I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive."
            />
            <ServicesSectionPart
              Theme={Theme}
              language={language}
              norTitle="Nettinnhold"
              engTitle="Webcontent"
              norText="Jeg har kunnskap innen flere felt utenom programmering, som ernæring, pedagogikk og fysisk aktivitet. Jeg kan skrive nettinnhold som både er informativt og engasjerende."
              engText="I'm knowledgeable in several fields outside of programming, like nutrition, pedagogy and physical activity. I can write content for your website that is both informative and engaging."
            />
            <ServicesSectionPart
              Theme={Theme}
              language={language}
              norTitle="Nettdesign"
              engTitle="Webdesign"
              norText="Hvis du ikke vet hvordan du vil at nettsiden din skal se ut, kan jeg hjelpe deg med det. Jeg kan skape et design som passer dine behov og merkevare. Jeg kan også hjelpe deg med å skape ditt merkevare"
              engText="If you dont know what you want your website to look like, I can help you with that. I can create a design that fits your needs and your brand. I can also help you create a brand if you dont have one."
            />
            <ServicesSectionPart
              Theme={Theme}
              language={language}
              norTitle="Småjobber"
              engTitle="Odd jobs"
              norText="Hvis du trenger hjelp med noe som ikke er nevnt her, ikke nøl med å kontakte meg. Jeg er alltid åpen for nye utfordringer, og jeg er sikker på at vi kan finne en løsning."
              engText="If you need help with something that is not listed here, dont hesitate to contact me. I'm always open to new challenges and I'm sure we can work something out."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
