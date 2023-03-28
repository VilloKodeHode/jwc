import Head from "next/head";
import Image from "next/image";
import PageLayout, {
  ClientLayout,
  EqualTwoGrids,
  TextFlex,
  TextTwoGridLayout,
  TopTwoGridLayout,
} from "@/components/Layout";
import SKILLS_LIST from "@/components/Skills/skills_list";
import CallToActionButton, {
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
import Accordion from "@/components/Accordion";
import Link from "next/link";
import SkillsWithAccordion from "@/components/Skills/SkillsWithAccordion";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="description" content="JWC official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <section className="relative grid justify-center min-h-[70vh] my-28 text-center">
          <TextFlex textWidth="">
            <ResponsiveH1 className="max-w-4xl text-center lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3">
              Freelance <br /> web-utvikler <br /> & UI designer
            </ResponsiveH1>
            <EqualTwoGrids>
              <ResponsiveP maxWidth="max-w-md">
                Enten du trenger en enkel nettside eller en avansert plattform,
                kan jeg hjelpe deg med både utvikling og UI-design for både web
                og mobil. Jeg har bred kompetanse innen teknologier som React,
                Next.js, Node.js, Tailwind CSS, Figma og mer.
              </ResponsiveP>
              <div className="flex flex-col">
                <Link href="/Norwegian resume shorted JWC.png" target="_blank">
                  <CallToActionButtonAlt>CV</CallToActionButtonAlt>
                </Link>
                <Link href="/contact">
                  <CallToActionButton>Ta kontakt</CallToActionButton>
                </Link>
              </div>
            </EqualTwoGrids>
          </TextFlex>
        </section>
        <section className="min-h-[70vh] flex items-center text-center gap-12 flex-col justify-center mb-12 font-bold my-28">
          <div>
            <ResponsiveH2>JV Web Consult</ResponsiveH2>
            <ResponsiveH2>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH2>
          </div>
          <TextFlex textWidth="max-w-[60ch]">
            <ResponsiveH3>Norsk ENK</ResponsiveH3>
            <ResponsiveP>
              Virksomheten ble startet i Tønsberg i 2023, og har siden da
              prioritert mindre oppdrag for å bygge opp en trofast kundebase
            </ResponsiveP>
          </TextFlex>
        </section>
        <section className="relative grid items-start justify-center w-full gap-12 px-4 text-center my-28">
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
            </ClientLayout>
          </TextFlex>
        </section>

        <div className="skillswave topwave h-[250px] animate-waveSlideRight mt-28" />
        <section className="flex relative w-screen min-h-[40vh] bg-[#312b35] snap-center font-Lato">
          <div className="z-20 grid items-start justify-center w-full">
            <SkillWithTabs />
          </div>
        </section>
        <div className="skillswave bottomwave h-[250px] animate-waveSlideLeft mb-28" />

        <Link href="/projects">
          <CallToActionButton>Se mine prosjekter</CallToActionButton>
        </Link>

        <section className="my-28">
          {/* <h2>Acoording section with some type of FAQ:</h2>
          <TextTwoGridLayout>
            <TextFlex textWidth="max-w-[60ch]">
              <h3>Hello</h3>
            </TextFlex>
            <TextFlex textWidth="max-w-[60ch]">
              <h3>Hello</h3>
            </TextFlex>
          </TextTwoGridLayout> */}
        </section>
      </PageLayout>
    </>
  );
}
