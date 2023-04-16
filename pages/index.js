import anime from "animejs";
import Head from "next/head";
import Image from "next/image";
import PageLayout, {
  ClientLayout,
  EqualTwoGrids,
  TextFlex,
} from "@/components/Layout";

import CallToActionButton, {
  BigButton,
  CallToActionButtonAlt,
} from "@/components/Buttons";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveH5,
  ResponsiveLi,
  ResponsiveMini,
  ResponsiveP,
  ResponsiveSmall,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import JWCIcon from "@/components/base components/Icon";

export default function Home() {
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
        <section className="relative grid xl:grid-cols-2 md:py-12 sm:pt-0 pt-12 xl:gap-16 gap-2 px-12 justify-center items-center mx-auto min-h-[45vh]">
          <div className="flex items-center justify-center w-full h-full">
            <TextFlex>
              <ResponsiveH1 className="text-center xl:text-right">
                Webdesign og utvikling
              </ResponsiveH1>
              <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row xl:justify-end">
                <ResponsiveP
                  maxWidth="max-w-sm"
                  className="text-center md:text-right text-JWC-black75"
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
          <div className="flex justify-center w-full h-full xl:justify-start">
            <Image
              src="/Hero8.png"
              alt="hero"
              width={500}
              height={500}
              className=""
            />
          </div>
        </section>
        <section className="relative grid justify-center items-center min-h-[35vh] text-left xl:gap-0 gap-12">
          <TextFlex>
            <ResponsiveH2 className="flex px-12 text-center">
              Hva du kan oppnå med JWC
            </ResponsiveH2>
          </TextFlex>
          <div className="flex flex-col items-center justify-center gap-12 xl:flex-row">
            <div>
              <div className="flex gap-2 ">
                <JWCIcon />
                <ResponsiveP maxWidth="max-w-xs">
                  Meget konkurransedyktige priser og høy kvalitet
                </ResponsiveP>
              </div>
              <ResponsiveLi maxWidth="max-w-xs" className="ml-8">
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
              <ResponsiveLi maxWidth="max-w-xs" className="ml-8">
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
              <ResponsiveLi maxWidth="max-w-xs" className="ml-8">
                For å sikre at du får nettsiden du ønsker
              </ResponsiveLi>
            </div>
          </div>
        </section>
        <section className="relative grid items-center justify-center gap-12 px-12 lg:px-24">
          <div className="grid items-center justify-center gap-12 lg:grid-cols-2">
            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-primary">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center">
                  Design fra idè til virkelighet
                </ResponsiveH4>
                <ResponsiveP className="text-center">
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
                className="px-12 md:px-0"
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
                className="px-12 md:px-0"
              />
            </div>

            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-primary">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center">
                  Hva med pris?
                </ResponsiveH4>
                <ResponsiveP className="text-center">
                  Konkurransedyktige priser for å kunne tilby det beste,
                  rimelig. Endelig pris blir diskutert og avtalt før prosjektet
                  starter.
                </ResponsiveP>
              </div>
            </div>
          </div>
        </section>
        <section className="relative grid items-center justify-center gap-2 px-12 pt-12 mx-auto md:py-12 sm:pt-0 xl:gap-16 mb-[116px]">
          <TextFlex>
            <ResponsiveH3 className="flex px-12 text-center">
              La oss lage noe fantastisk sammen!
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
