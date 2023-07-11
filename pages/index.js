import Head from "next/head";
import PageLayout from "@/components/Layout";
import CallToActionButton from "@/components/Buttons";
import Link from "next/link";

import { CTAOneSection } from "@/components/sections/CTAOneSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";

export default function Home({ language, Theme }) {
  return (
    <>
      <Head>
        <title>Villo utvikling</title>
        <meta name="description" content="Villo utvikling's webside" />
        <meta
          name="keywords"
          content="web design, development, website, SEO, frontend development, frontend developer, freelance, freelancer, freelance developer, web developer, UI/UX, HTML, CSS, JavaScript, responsive design, cross-browser compatibility"
        />
        <meta name="theme-color" content="#a2cbcc" />
        <meta
          name="description"
          content="Transforming ideas into captivating websites through professional frontend development services. Crafted with precision and creativity, we specialize in creating responsive, user-friendly, and visually appealing websites that engage and delight users. Our expertise covers modern web technologies, including HTML, CSS, JavaScript, and frameworks like React and Next.js. Partner with us to bring your online presence to life and establish a strong digital footprint. Contact us today to discuss your project and unlock the full potential of your website."
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
      </Head>
      <PageLayout gap="gap-28">
        <HeroSection language={language} Theme={Theme} />
        <CTAOneSection language={language} Theme={Theme} />
        <BenefitsSection language={language} Theme={Theme} />
        <ServicesSection language={language} Theme={Theme} />

        <LetsGoCTA
          language={language}
          Theme={Theme}
          engText="Let's get started!"
          norText="La oss komme i gang!"
          href="/contact"
          buttonEngText="Contact us"
          buttonNorText="Kontakt oss"
        />
      </PageLayout>
    </>
  );
}
