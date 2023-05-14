import Head from "next/head";
import Image from "next/image";
import PageLayout, { TextFlex } from "@/components/Layout";

import CallToActionButton from "@/components/Buttons";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveHeaderH1,
  ResponsiveLi,
  ResponsiveMini,
  ResponsiveP,
  ResponsiveSmall,
} from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";

import JWCIcon from "@/components/base components/Icon";
import { useContext, useState } from "react";
import THREESpace from "@/components/animation/Space";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { CTAOneSection } from "@/components/sections/CTAOneSection";
import { BullitinSection } from "@/components/sections/BullitinSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="JWC web consult" content="JWC official website" />
        <meta name="keywords" content="webdesign, utvikling, nettside, SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <PageLayout gap="gap-28">
        <HeroSection />
        <CTAOneSection />
        <BenefitsSection />
        <ServicesSection />

        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <TextFlex>
            <ResponsiveH3 className="flex px-12 text-center bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
              {language === "Norwegian"
                ? "La oss komme i gang!"
                : "Let's get started!"}
            </ResponsiveH3>
          </TextFlex>
          <div className="flex flex-col items-center justify-center w-full">
            <Link href="/contact">
              <CallToActionButton>
                {language === "Norwegian" ? "Ta kontakt" : "Contact me"}
              </CallToActionButton>
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
