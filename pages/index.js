import Head from "next/head";
import Image from "next/image";
import PageLayout, {
  EqualTwoGrids,
  TextFlex,
  TextTwoGridLayout,
  TopTwoGridLayout,
} from "@/components/Layout";
import SKILLS_LIST from "@/components/Skills/skills_list";
import CallToActionButton from "@/components/Buttons";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
  ResponsiveUL,
} from "@/components/Responsive text/ResponsiveText";

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
        <section className="relative grid justify-center min-h-[60vh] text-center">
          <TextFlex textWidth="">
            <ResponsiveH2>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH2>
            <ResponsiveH1 className="max-w-4xl text-center lg:text-h1 sm:text-h2 text-h3 lg:leading-h1 sm:leading-h2 leading-h3">
              Freelance web-developer & UI designer
            </ResponsiveH1>
            <EqualTwoGrids>
              <p className="max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pellentesque leo. Nam eget maximus libero, a posuere leo.
              </p>
              <CallToActionButton>Hire me</CallToActionButton>
            </EqualTwoGrids>
          </TextFlex>
        </section>
        <div className="h-[20vh] flex items-end mb-12 font-bold">
          <ResponsiveH2>JV Web Consult</ResponsiveH2>
        </div>
        <TextTwoGridLayout>
          <TextFlex textWidth="max-w-[60ch]">
            <ResponsiveH3>A Norwegian Company</ResponsiveH3>
            <ResponsiveP>
              Started by Joakim Villo in 2023 as a one-man freelance business.
              Focuses on does smaller jobs to gain a client base.
            </ResponsiveP>
          </TextFlex>

          <TextFlex textWidth="max-w-[60ch]">
            <ResponsiveH3>Current clients</ResponsiveH3>
            <ResponsiveH4>Wileo AS</ResponsiveH4>
            <ResponsiveUL>
              <li>
                A startup company that will be releasing their product in mid Q2
              </li>
              <li className="font-bold">JWC&apos;s roles in Wileo AS:</li>
              <ul className="ml-8 list-disc">
                <li>Making their landingpage</li>
                <li>Creating content for their consept</li>
              </ul>
              <li className="font-bold">
                JWC&apos;s planned future roles in Wileo AS:
              </li>
              <ul className="ml-8 list-disc">
                <li>Complete Wileo.no website makover</li>
                <li>Consultant relevant to their content</li>
              </ul>
            </ResponsiveUL>
          </TextFlex>
        </TextTwoGridLayout>
        <div className="skillswave topwave h-[250px] animate-waveSlideRight " />
        <section className="flex relative min-h-[30vh] bg-[#312b35] snap-center">
          <div className="z-20 flex flex-wrap items-center justify-center w-full gap-16 m-12 sm:m-24 md:gap-24">
            {SKILLS_LIST.map((skill) => (
              <Image
                key={skill.name}
                width={100}
                height={100}
                alt={skill.alt}
                src={skill.imageSrc}
                className="z-10 duration-500 w-fit hover:scale-125"
              />
            ))}
          </div>
        </section>
        <div className="skillswave bottomwave h-[250px] animate-waveSlideLeft " />
        <TextTwoGridLayout>
          <TextFlex textWidth="max-w-[60ch]">
            <h3>Hello</h3>
          </TextFlex>
          <TextFlex textWidth="max-w-[60ch]">
            <h3>Hello</h3>
          </TextFlex>
        </TextTwoGridLayout>
      </PageLayout>
    </>
  );
}
