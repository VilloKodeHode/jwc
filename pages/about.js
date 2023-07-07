import CallToActionButton, { BigButton } from "@/components/Buttons";
import PageLayout from "@/components/Layout";
import { ResponsiveH3, ResponsiveThemedH3 } from "@/components/Responsive text/ResponsiveText";
import { CompanyInfo } from "@/components/sections/CompanyInfoSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage({ language, Theme }) {
  return (
    <>
      <Head>
        <title>Villo utvikling</title>
        <meta name="description" content="Villo utvikling kontakt skjema" />
        <meta
          name="keywords"
          content="contact form, kontaktskjema, skjema, kontakt, contact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href={Theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"} />
      </Head>
      <PageLayout gap="gap-28">
        <CompanyInfo language={language} Theme={Theme} />
        <SkillsSection language={language} Theme={Theme} />

        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <div className="z-20 mb-16">
            <ResponsiveThemedH3 className="z-20 flex px-12 font-extrabold text-center">
              {language === "Norwegian"
                ? "Sjekk prosjekter"
                : "Check out projects"}
            </ResponsiveThemedH3>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center group">
            <Link href="/projects">
              <CallToActionButton Theme={Theme}>
                {language === "Norwegian" ? "Prosjekter" : "Projects"}
              </CallToActionButton>
            </Link>
             <Image
              src={Theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"}
              className="absolute w-48 h-48 duration-500 -translate-y-1/2 -z-10 group-active:scale-110 group-hover:rotate-180 group-hover:scale-150 top-1/2"
              width={150}
              height={150}
              alt=""
            />
          </div>
        </section>
      </PageLayout>
    </>
  );
}
