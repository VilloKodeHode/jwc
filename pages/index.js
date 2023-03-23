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
import Accordion from "@/components/Accordion";

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
              Freelance <br /> web-developer <br /> & UI designer
            </ResponsiveH1>
            <EqualTwoGrids>
              <ResponsiveP maxWidth="max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac pellentesque leo. Nam eget maximus libero, a posuere leo.
              </ResponsiveP>
              <CallToActionButton>Hire me</CallToActionButton>
            </EqualTwoGrids>
          </TextFlex>
        </section>

        <section className="my-28">
          <div className="h-[20vh] flex items-center flex-col justify-center mb-12 font-bold">
            <ResponsiveH2>JV Web Consult</ResponsiveH2>
            <ResponsiveH2>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH2>
          </div>
          <TextTwoGridLayout>
            <TextFlex textWidth="max-w-[60ch]">
              <ResponsiveH3>Norwegian Company</ResponsiveH3>
              <ResponsiveP>
                Started in Tønsberg by Joakim Villo in 2023 as a one-man
                freelance business. Focuses on does smaller jobs to gain a
                client base.
              </ResponsiveP>
            </TextFlex>
            <TextFlex textWidth="max-w-[60ch]">
              <ResponsiveH3>Current clients</ResponsiveH3>
              <ResponsiveH4>Wileo AS</ResponsiveH4>
              <ResponsiveUL>
                <li>
                  A startup company that will be releasing their product in mid
                  Q2
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
        </section>

        <div className="skillswave topwave h-[250px] animate-waveSlideRight mt-28" />
        <section className="flex relative w-screen min-h-[40vh] bg-[#312b35] snap-center font-Lato">
          <div className="z-20 grid items-start justify-center w-full gap-16 xl:grid-cols-2 md:gap-24">
            <Accordion text="Code languages">
              {SKILLS_LIST.map((skill) =>
                skill.skilltype === "code language" ? (
                  <div className="relative" key={skill.name}>
                    <Image
                      width={100}
                      height={100}
                      alt={skill.alt}
                      src={skill.imageSrc}
                      className="relative max-w-[80%] mx-auto z-10 m-12 duration-500 w-fit"
                    ></Image>
                    <div className="absolute h-[20%] w-[30%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                  </div>
                ) : null
              )}
            </Accordion>
            <Accordion text="Frameworks">
              {SKILLS_LIST.map((skill) =>
                skill.skilltype === "framework" ? (
                  <div className="" key={skill.name}>
                    <div className="relative">
                      <Image
                        width={100}
                        height={100}
                        alt={skill.alt}
                        src={skill.imageSrc}
                        className="relative max-w-[70%] mx-auto z-10 m-12 duration-500 w-fit"
                      ></Image>
                      <div className="absolute w-[60%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                    </div>
                  </div>
                ) : null
              )}
            </Accordion>
            <Accordion text="Web Styling">
              {SKILLS_LIST.map((skill) =>
                skill.skilltype === "styling" ? (
                  <div className="relative" key={skill.name}>
                    <Image
                      width={100}
                      height={100}
                      alt={skill.alt}
                      src={skill.imageSrc}
                      className="relative max-w-[60%] mx-auto z-10 duration-500 w-fit"
                    ></Image>
                    <div className="absolute w-[45%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                  </div>
                ) : null
              )}
            </Accordion>
            <Accordion text="Design tools">
              {SKILLS_LIST.map((skill) =>
                skill.skilltype === "design" ? (
                  <div className="relative" key={skill.name}>
                    <Image
                      width={100}
                      height={100}
                      alt={skill.alt}
                      src={skill.imageSrc}
                      className="relative z-10 mx-auto duration-500 max-w-[90%]"
                    ></Image>
                    <div className="absolute h-[25%] w-[25%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                  </div>
                ) : null
              )}
            </Accordion>
          </div>
        </section>
        <div className="skillswave bottomwave h-[250px] animate-waveSlideLeft mb-28" />

        <section className="my-28">
          <TextTwoGridLayout>
            <TextFlex textWidth="max-w-[60ch]">
              <h3>Hello</h3>
            </TextFlex>
            <TextFlex textWidth="max-w-[60ch]">
              <h3>Hello</h3>
            </TextFlex>
          </TextTwoGridLayout>
        </section>
      </PageLayout>
    </>
  );
}
