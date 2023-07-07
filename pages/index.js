import Head from "next/head";
import Image from "next/image";
import PageLayout from "@/components/Layout";

import CallToActionButton from "@/components/Buttons";
import { ResponsiveH3, ResponsiveThemedH3 } from "@/components/Responsive text/ResponsiveText";
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
        <link rel="icon" href={Theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"} />
      </Head>
      <PageLayout gap="gap-28">
        <HeroSection language={language} Theme={Theme} />
        <CTAOneSection language={language} Theme={Theme} />
        <BenefitsSection language={language} Theme={Theme} />
        <ServicesSection language={language} Theme={Theme} />

        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <div className="z-20 mb-16">
            <ResponsiveThemedH3 className="z-20 flex px-12 font-extrabold text-center">
              {language === "Norwegian"
                ? "La oss komme i gang!"
                : "Let's get started!"}
            </ResponsiveThemedH3>
          </div>
          <div className="relative z-20 flex flex-col items-center justify-center group">
            <Link href="/contact">
              <CallToActionButton Theme={Theme}>
                {language === "Norwegian" ? "Ta kontakt" : "Contact me"}
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
