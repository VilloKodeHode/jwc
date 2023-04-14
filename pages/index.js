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
  ResponsiveP,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";

export default function Home() {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="JWC official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout gap="gap-28">
        <div className="heroBG">
          <section className="relative grid xl:grid-cols-2 md:py-12 sm:pt-0 pt-12 px-12 justify-center items-center mx-auto min-h-[65vh]">
            <TextFlex>
              <ResponsiveH1 className="text-left">
                Webdesign og utvikling
              </ResponsiveH1>
              <EqualTwoGrids>
                <ResponsiveP
                  maxWidth="max-w-md"
                  className="text-left text-JWC-black75"
                >
                  Lag en engasjerende nettside med JWC. Nettsider som er enkle å
                  bruke, og som er tilpasset alle enheter.
                </ResponsiveP>
                <div className="flex flex-col">
                  {/* <Link
                    href="/Norwegian resume shorted JWC.png"
                    target="_blank"
                  >
                    <CallToActionButtonAlt>CV</CallToActionButtonAlt>
                  </Link> */}
                  <Link href="/contact">
                    <CallToActionButton>Ta kontakt</CallToActionButton>
                  </Link>
                </div>
              </EqualTwoGrids>
            </TextFlex>
            <Image
              src="/Hero8.png"
              alt="hero"
              width="500"
              height="500"
              className="mx-auto heroShadow"
            />
          </section>
        </div>
        <section className="grid items-center min-h-[70vh] justify-center w-screen font-bold text-center lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center lg:h-full h-[50vh] bg-JWC-black p-4">
            <div className="">
              <ResponsiveH2 className="text-JWC-white">
                JV Web Consult
              </ResponsiveH2>
              <ResponsiveH2>
                <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                  Joakim Villo
                </div>
              </ResponsiveH2>
            </div>
            <TextFlex textWidth="max-w-[60ch]">
              <ResponsiveH3 className="text-JWC-white">
                Norsk foretak
              </ResponsiveH3>
              <ResponsiveP className="text-JWC-white">
                Virksomheten ble startet i Tønsberg i 2023, og har siden da
                prioritert mindre oppdrag for å bygge opp en trofast kundebase
              </ResponsiveP>
            </TextFlex>
          </div>
          <div className="w-screen lg:h-full lg:w-full h-[50vh] tonsbergBG" />
        </section>
        <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center">
          <div className="absolute w-screen left-1/2 -translate-x-1/2 h-[70%] bg-JWC-tertiary -translate-y-1/2 top-1/2 " />
          <TextFlex textWidth="max-w-[60ch]">
            <div>
              <ResponsiveH3>Klienter</ResponsiveH3>
            </div>
            <ClientLayout>
              <ResponsiveH4>Wileo AS</ResponsiveH4>
              <Image
                src="/liva-logo.png"
                alt="LIVA"
                width="50"
                height="50"
                className="absolute top-5 left-5"
              />
              <div className="text-start">
                <ResponsiveUL>
                  <p>Et startup som skal lansere produktet sitt midt i Q2.</p>
                  <ResponsiveH5 className="font-bold underline">
                    JWCs roller:
                  </ResponsiveH5>
                  <p>Lage deres landingsside</p>
                  <p>Skape innhold for deres konsept</p>
                  <p className="text-xs">(linker kommer når siden lanseres)</p>
                  <ResponsiveH5 className="font-bold underline">
                    JWCs potensielle roller:
                  </ResponsiveH5>
                  <p>Komplett design makover for Wileo.no</p>
                  <p>Innholdskaper for deres nettsted</p>
                </ResponsiveUL>
              </div>
            </ClientLayout>
          </TextFlex>
        </section>

        <div className="flex flex-col items-center justify-start">
          {/* <div className="skillswave topwave h-[250px] animate-waveSlideRight" /> */}
          <section className="flex relative w-screen min-h-[40vh] py-8 bg-JWC-white10 snap-center font-Lato">
            <div className="z-20 grid items-start justify-center w-full">
              <SkillWithTabs />
            </div>
          </section>
          {/* <div className="skillswave bottomwave h-[250px] animate-waveSlideLeft" /> */}
        </div>
        <div className="mb-[212px]">
          <Link href="/projects">
            <BigButton>
              <ResponsiveP className="text-JWC-white">
                Mine prosjekter
              </ResponsiveP>
            </BigButton>
          </Link>
        </div>
      </PageLayout>
    </>
  );
}
