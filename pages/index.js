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
                Sammen lager vi en engasjerende nettside for ditt formål: Fra
                enkle til komplekse nettsider, som er tilpasset alle enheter.
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
        <section className="grid items-center justify-center px-12 lg:px-24">
          <div className="grid items-center justify-center lg:grid-cols-2">
            <div className="grid items-center justify-center w-full h-full p-8 bg-JWC-primary">
              <div className="flex flex-col items-center justify-center gap-8">
                <ResponsiveH4 className="text-center">
                  My main value proposition fds
                </ResponsiveH4>
                <ResponsiveP className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quod, voluptate, quia, voluptas quas voluptatem quibusdam
                </ResponsiveP>
                <div>
                  <ResponsiveLi className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ResponsiveLi>
                  <ResponsiveLi className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ResponsiveLi>
                  <ResponsiveLi className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </ResponsiveLi>
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
          <div className="flex flex-col-reverse items-center justify-center lg:grid lg:grid-cols-2">
            <div className="flex justify-center lg:justify-start">
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
                  My main value proposition fds
                </ResponsiveH4>
                <ResponsiveP className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quod, voluptate, quia, voluptas quas voluptatem quibusdam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quod, voluptate, quia, voluptas quas voluptatem quibusdam
                </ResponsiveP>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
