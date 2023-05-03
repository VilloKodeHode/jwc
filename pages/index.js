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
} from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";

import JWCIcon from "@/components/base components/Icon";
import { useContext, useState } from "react";
import THREESpace from "@/components/animation/Space";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";

export default function Home() {
  const [currentWeb, setCurrentWeb] = useState("/Hero8.png");
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
        {/* <div className="min-h-[50vh] w-screen]"> */}
        <section className="grid xl:grid-cols-[60%_40%] group/imageEffect md:py-12 z-20 sm:pt-0 pt-12 xl:gap-16 gap-2 px-12 justify-center items-center mx-auto min-h-[45vh] w-screen">
          <div className="flex items-center justify-center w-full h-full web">
            <TextFlex>
              <div className="flex items-center justify-end">
                <ResponsiveHeaderH1 className="flex flex-col items-center justify-center text-center xl:items-end headertext xl:text-right">
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDesign.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-primary w-fit"
                  >
                    <span className="group-hover:opacity-100 opacity-10 h1hidden">
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDevelopment.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-secondary w-fit"
                  >
                    <span className="group-hover:opacity-100 opacity-10 h1hidden">
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "dev"}
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-tertiary w-fit"
                  >
                    <span className="group-hover:opacity-100 opacity-10 h1hidden">
                      Web
                    </span>
                    {language === "Norwegian" ? "innhold" : "content"}
                  </span>
                </ResponsiveHeaderH1>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:gap-8 md:flex-row xl:justify-end">
                <ResponsiveP
                  maxWidth="max-w-sm"
                  className="text-center xl:text-right text-JWC-white15 clearText"
                >
                  {language === "Norwegian"
                    ? "Engasjerende nettsider for ditt formål: Fra enkle til komplekse nettsider, som er tilpasset alle enheter."
                    : "Engaging websites for your purpose: From simple to complex websites, customized for all devices."}
                </ResponsiveP>
                <Link href="/contact" className="">
                  <CallToActionButton>
                    {" "}
                    {language === "Norwegian" ? "Ta kontakt" : "Contact me"}
                  </CallToActionButton>
                </Link>
              </div>
            </TextFlex>
          </div>
          <div className="flex justify-center w-full h-full xl:justify-start ">
            <Image
              src={currentWeb}
              alt="hero"
              width={500}
              height={500}
              className="m-4 duration-300 opacity-90 shadowblend group-hover/imageEffect:opacity-100"
              priority={true}
            />
          </div>
        </section>
        <THREESpace className="absolute top-0 -z-10" />
        {/* </div> */}

        {/* <section className="relative snap-y snap-mandatory">
          <THREESpace className="snap-center" />
          <div className="absolute z-10 px-12 translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 w-fit">
            <ResponsiveH3 className="flex flex-wrap text-JWC-white15">
              Welcome to infinite <br /> possibilites!
            </ResponsiveH3>
          </div>
        </section> */}
        <section className="relative grid justify-center items-center py-8 w-full bg-JWC-tertiary my-8 min-h-[35vh] text-left xl:gap-0 gap-12">
          <TextFlex>
            <ResponsiveH2 className="flex px-12 text-center">
              {language === "Norwegian"
                ? "Hva du kan oppnå med JWC"
                : "What you can achieve with JWC"}
            </ResponsiveH2>
          </TextFlex>
          <div className="flex flex-wrap justify-center gap-12 xl:items-start text-JWC-white15">
            <div>
              <div className="flex gap-2">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  {language === "Norwegian"
                    ? "Kvalitet til en god pris"
                    : "Quality for a good price"}
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                {language === "Norwegian"
                  ? "Ingen mellomledd som tar en stor del av budsjettet"
                  : "No middleman that takes a big part of the budget"}
              </ResponsiveLi>
            </div>
            <div>
              <div className="flex gap-2">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  {language === "Norwegian"
                    ? "Optimaliserte websider som bruker den nyeste teknologien"
                    : "Optimized websites that use the latest technology"}
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                {language === "Norwegian"
                  ? "For den beste nettrafikken og brukeropplevelse"
                  : "For the best web traffic and user experience"}
              </ResponsiveLi>
            </div>
            <div>
              <div className="flex gap-2 ">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  {language === "Norwegian"
                    ? "Kontinuerlige kommunikasjon gjennom hele prosessen"
                    : "Continuous communication throughout the whole process"}
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                {language === "Norwegian"
                  ? "For å sikre at du får det resultatet du ønsker"
                  : "To ensure that the result will be just what you want"}
              </ResponsiveLi>
            </div>
          </div>
        </section>
        <section className="relative grid items-center justify-center gap-12 px-12 lg:px-24">
          <div className="grid items-center justify-center gap-12 lg:grid-cols-2">
            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-secondary rounded-xl">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center text-JWC-tertiary">
                  {language === "Norwegian"
                    ? "Design fra idè til virkelighet"
                    : "Design from idea to reality"}
                </ResponsiveH4>
                <ResponsiveP className="text-center text-JWC-black">
                  {language === "Norwegian"
                    ? "Websidens helhetsuttrykk er avgjørende for å oppnå et godt resultat. Derfor kreves det grundig forarbeid for å sikre at det valgte designet fungerer og er tilpasset dine spesifikke behov. Følgende prosess blir fulgt:"
                    : "The overall appearance of a website is essential for a successful outcome. Therefore, preparatory work is needed to ensure that the design you want both works and meets your needs. This is the process that is followed:"}
                </ResponsiveP>
                <div>
                  <ResponsiveLi className="text-left">
                    {language === "Norwegian"
                      ? "Først lages en mockup av siden du ønsker, med designmanual."
                      : "First, a mockup of the page you want is created, along with a design manual."}
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    {language === "Norwegian"
                      ? "Har du en mockup fra før kan denne brukes."
                      : "If you have a mockup already made, it can be used."}
                  </ResponsiveMini>
                  <ResponsiveLi className="text-left">
                    {language === "Norwegian"
                      ? "Så lages en prototype for å teste ut designet."
                      : "Next, a prototype is created to test the design."}
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    {language === "Norwegian"
                      ? "Hvis du har en prototype fra før kan denne brukes."
                      : "If you have a prototype already made, it can be used."}
                  </ResponsiveMini>
                  <ResponsiveLi className="text-left">
                    {language === "Norwegian"
                      ? "Tilslutt lages nettsiden i henhold til designmanualen."
                      : "Finally, the website is created according to the design manual."}
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    {language === "Norwegian"
                      ? "Resultatet blir gjennomgått og eventuelle endringer utføres."
                      : "The result is reviewed and any changes are made."}
                  </ResponsiveMini>
                  <ResponsiveMini className="text-JWC-black75">
                    <br />
                    {language === "Norwegian"
                      ? "I alle trinn vil oppdragsgiveren få innsikt og mulighet til å gi tilbakemeldinger."
                      : "At every step, the client has insight and the opportunity to provide feedback."}
                  </ResponsiveMini>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src="/socialProof1.png"
                alt="man programming"
                className="mx-12 md:px-0 shadowblend"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-center gap-12 lg:grid lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src="/socialProof2.png"
                alt="several people working on a website"
                className="mx-12 md:px-0 shadowblend"
              />
            </div>

            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-secondary rounded-xl">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center text-JWC-tertiary">
                  {language === "Norwegian"
                    ? "Hva vil dette koste?"
                    : "What will this cost?"}
                </ResponsiveH4>
                <ResponsiveP className="text-center text-JWC-black">
                  {language === "Norwegian"
                    ? "Ingen mellomledd er involvert, og dermed kan jeg tilby meget konkurransedyktige priser. Prisen vil bli diskutert og avtalt på forhånd før prosjektet starter."
                    : "No intermediaries are involved, and therefore I can offer very competitive prices. The price will be discussed and agreed upon in advance before the project starts."}
                </ResponsiveP>
              </div>
            </div>
          </div>
        </section>
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
