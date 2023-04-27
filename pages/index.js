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
import { useState } from "react";
import THREEBackground from "@/components/animation/Cube";
import THREESpace from "@/components/animation/Space";

export default function Home() {
  const [currentWeb, setCurrentWeb] = useState("/Hero8.png");
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="JWC official website" />
        <meta name="keywords" content="webdesign, utvikling, nettside, SEO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                    utvikling
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-tertiary w-fit"
                  >
                    <span className="group-hover:opacity-100 opacity-10 h1hidden">
                      Web
                    </span>
                    innhold
                  </span>
                </ResponsiveHeaderH1>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row xl:justify-end">
                <ResponsiveP
                  maxWidth="max-w-sm"
                  className="text-center md:text-right text-JWC-white15 clearText"
                >
                  Engasjerende nettsider for ditt formål: Fra enkle til
                  komplekse nettsider, som er tilpasset alle enheter.
                </ResponsiveP>
                <Link href="/contact" className="">
                  <CallToActionButton>Ta kontakt</CallToActionButton>
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
        <section className="relative grid justify-center items-center py-8 w-full bg-JWC-black75 my-8 min-h-[35vh] text-left xl:gap-0 gap-12">
          <TextFlex>
            <ResponsiveH2 className="flex px-12 text-center">
              Hva du kan oppnå med JWC
            </ResponsiveH2>
          </TextFlex>
          <div className="flex flex-wrap justify-center gap-12 xl:items-start text-JWC-white15">
            <div>
              <div className="flex gap-2">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  Meget konkurransedyktige priser og høy kvalitet
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                Tydelig på pris og forvetninger
              </ResponsiveLi>
            </div>
            <div>
              <div className="flex gap-2">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  Optimaliserte websider som bruker den nyeste teknologien
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                For best SEO og brukeropplevelse
              </ResponsiveLi>
            </div>
            <div>
              <div className="flex gap-2 ">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  God kommunikasjon gjennom hele prosessen
                </ResponsiveP>
              </div>
              <ResponsiveLi
                maxWidth="max-w-xs"
                className="ml-8 text-JWC-black25"
              >
                For å sikre at du får nettsiden du ønsker
              </ResponsiveLi>
            </div>
          </div>
        </section>
        <section className="relative grid items-center justify-center gap-12 px-12 lg:px-24">
          <div className="grid items-center justify-center gap-12 lg:grid-cols-2">
            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-secondary rounded-xl">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center text-JWC-tertiary">
                  Design fra idè til virkelighet
                </ResponsiveH4>
                <ResponsiveP className="text-center text-JWC-black">
                  Websidens helhetsutrykk er essensielt for et godt resultat.
                  Derfor trengs det forarbeid for å forsikre at designet du
                  ønsker både fungerer og er tilpasset dine behov. Dette er
                  prosessen som blir fulgt:
                </ResponsiveP>
                <div>
                  <ResponsiveLi className="text-left">
                    Først lages en mockup av siden du ønsker, med designmanual.
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    Har du allerede en mockup kan denne brukes.
                  </ResponsiveMini>
                  <ResponsiveLi className="text-left">
                    Deretter lages en prototype for å teste ut designet.
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    Igjen om du har en prototype kan denne brukes.
                  </ResponsiveMini>
                  <ResponsiveLi className="text-left">
                    Tilslutt lages nettsiden i henhold til designmanualen.
                  </ResponsiveLi>
                  <ResponsiveMini className="text-JWC-black75">
                    <br />I alle trinn får oppdragsgiver innsikt og mulighet for
                    å gi tilbakemeldinger.
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
                  Hva med pris?
                </ResponsiveH4>
                <ResponsiveP className="text-center text-JWC-black">
                  Konkurransedyktige priser for å kunne tilby det beste,
                  rimelig. Pris blir diskutert og avtalt før prosjektet starter.
                </ResponsiveP>
              </div>
            </div>
          </div>
        </section>
        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <TextFlex>
            <ResponsiveH3 className="flex px-12 text-center bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
              La oss lage noe fantastisk!
            </ResponsiveH3>
          </TextFlex>
          <div className="flex flex-col items-center justify-center w-full">
            <Link href="/contact">
              <CallToActionButton>Ta kontakt</CallToActionButton>
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
