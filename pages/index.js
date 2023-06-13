import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/Layout";

import CallToActionButton from "@/components/Buttons";
import { ResponsiveH3 } from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";


import { CTAOneSection } from "@/components/sections/CTAOneSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";


export default function Home({ language, Theme }) {
  // const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="Villo utvikling" content="Villo utvikling's webside" />
        <meta
          name="keywords"
          content="webdesign, utvikling, nettside, SEO, frontend utvikling"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/WindLogoNoText.svg" />
      </Head>
      <PageLayout gap="gap-28">
        <HeroSection language={language} Theme={Theme} />
        <CTAOneSection language={language} Theme={Theme} />
        <BenefitsSection language={language} Theme={Theme} />
        <ServicesSection language={language} Theme={Theme} />

        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <div className="z-20 mb-16">
            <ResponsiveH3 className="z-20 flex px-12 text-center bg-gradient-to-r from-Villo-tertiary to-Villo-secondary bg-clip-text transparent">
              {language === "Norwegian"
                ? "La oss komme i gang!"
                : "Let's get started!"}
            </ResponsiveH3>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center group">
            <Link href="/contact">
              <CallToActionButton>
                {language === "Norwegian" ? "Ta kontakt" : "Contact me"}
              </CallToActionButton>
            </Link>
            <Image
              src="/logo/WindLogoNoText.svg"
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
