import Head from "next/head";
import Image from "next/image";
import PageLayout, {
  TextFlex,
  TextTwoGridLayout,
  TopTwoGridLayout,
} from "@/components/Layout";
import SKILLS_LIST from "@/components/Skills/skills_list";

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
        <section className="relative min-h-[calc(100vh-132px)] text-center">
          <TextFlex textWidth="">
            <h2 className="md:leading-h2 sm:leading-h3 leading-h4 md:text-h2 sm:text-h3 text-h4 font-light bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
              Joakim Villo
            </h2>
            <h1 className="text-center max-w-4xl md:text-h1 sm:text-h2 text-h3 md:leading-h1 sm:leading-h2 leading-h3">
              Freelancer web-developer & UI designer
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              pellentesque leo. Nam eget maximus libero, a posuere leo.
            </p>
            {/* <Box className="absolute sm:h-3/4 h-1/3 sm:w-[60%] w-full bg-JWC-secondary hover:scale-110 duration-500" /> */}
            {/* <Box className="absolute sm:left-1/4 sm:translate-x-2/3 left-16 sm:bottom-1/2 bottom-1/2 sm:h-[30%] h-1/3 sm:w-[30%] w-64 bg-JWC-primary hover:scale-110 duration-500" /> */}
          </TextFlex>
          {/* <Grid className="items-center justify-center grid-flow-row text-center">
            <div className="z-10 p-4 duration-500 border-4 rounded-3xl border-JWC-tertiary hover:scale-110">
              <Image
                width={300}
                height={300}
                src="/Hero5.png"
                alt="Joakim Villo"
                className="w-44 sm:w-96 rounded-3xl"
              />
            </div>
          </Grid> */}
        </section>
        <div className="h-[20vh] flex items-end mb-12 text-center font-bold">
          <h2 className="z-10 text-h2 leading-h2">JV Web Consult</h2>
        </div>
        <TextTwoGridLayout>
          {/* <Box className="absolute right-1/2 translate-x-1/2 sm:-top-1/2 -top-1/3 h-[50%] sm:h-[100%] sm:w-[30rem] hover:scale-110 w-full bg-JWC-secondary duration-500" /> */}
          <TextFlex textWidth="max-w-[60ch]">
            <h3 className="text-center text-h3 leading-h3">
              A Norwegian Company
            </h3>
            <p className="text-p leading-p">
              Started by Joakim Villo in 2023 as a one-man freelance business.
              Focuses on does smaller jobs to gain a client base.
            </p>
          </TextFlex>
          {/* <Box className="absolute sm:left-0 left-16 sm:bottom-1/3 bottom-1/2 sm:h-[60%] h-1/3 sm:w-[45%] sm:hover:w-[50%] w-64 bg-JWC-robineggblue duration-500 z-10" /> */}
          <TextFlex textWidth="max-w-[60ch]">
            <h3 className="text-h3 leading-h3">Current clients</h3>
            <h4 className="underline text-h4 leading-h4">Wileo AS</h4>
            <ul className="text-p leading-p">
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
            </ul>
          </TextFlex>
          {/* <Box className="absolute sm:right-0 right-16 sm:bottom-1/2 bottom-1/2 sm:h-[60%] h-1/3 sm:w-[45%] sm:hover:w-[50%] w-64 bg-JWC-robineggblue duration-500 z-10" /> */}
        </TextTwoGridLayout>
        <div className="skillswave topwave h-[200px]" />
        <section className="flex relative py-12 min-h-[60vh] bg-[#312b35]">
          {/* <h2 className="text-5xl font-bold text-center">Technologies used</h2> */}
          <div className="flex flex-wrap justify-center items-center md:gap-24 gap-16 w-full m-20 z-20">
            {SKILLS_LIST.map((skill) => (
              <Image
                key={skill.name}
                width={100}
                height={100}
                alt={skill.alt}
                src={skill.imageSrc}
                className="z-10 p-2 duration-500 rounded-xl hover:scale-125"
              />
            ))}
          </div>
        </section>
        <div className="skillswave bottomwave h-[200px]" />
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
