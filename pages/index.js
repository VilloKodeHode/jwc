import Head from "next/head";
import Image from "next/image";
import { Image as ChakraImage } from "@chakra-ui/react";
import PageLayout, {
  TextTwoGridLayout,
  TopTwoGridLayout,
} from "@/components/Layout";
import SKILLS_LIST from "@/components/Skills/skills_list";
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

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
        <Grid className="grid relative text-white font-semibold sm:grid-cols-[65%_35%] h-[calc(100vh-126.767px)] w-screen">
          <Grid className="items-center justify-center grid-flow-row text-center">
            <h1 className="z-10 m-12 text-5xl duration-500 lg:text-8xl md:text-7xl hover:scale-110">
              Devoted to <br /> web-design
            </h1>
            <Box className="absolute sm:h-3/4 h-1/3 sm:w-[60%] w-full bg-JWC-moonstone hover:scale-110 duration-500" />
            <Box className="absolute sm:left-1/4 sm:translate-x-2/3 left-16 sm:bottom-1/2 bottom-1/2 sm:h-[30%] h-1/3 sm:w-[30%] w-64 bg-JWC-robineggblue hover:scale-110 duration-500" />
          </Grid>
          <Grid className="items-end justify-end grid-flow-row text-center">
            <div className="z-10 p-4 mr-24 duration-500 border-4 border-JWC-teal mb-36 sm:mb-10 sm:mr-10 hover:scale-110">
              <Image
                width={300}
                height={300}
                src="/Hero4.jpg"
                alt="Joakim Villo"
                className="w-44 sm:w-96 "
              />
            </div>
            <Box className="absolute sm:right-0 right-16 bottom-0 sm:h-[60%] h-1/3 sm:w-[30%] w-64 bg-JWC-tiffanyblue hover:scale-110 duration-500" />
          </Grid>
        </Grid>
        <TextTwoGridLayout sectionTitle="JV Web Consult">
          <Box className="absolute right-1/2 translate-x-1/2 sm:-top-1/2 -top-1/3 h-[50%] sm:h-[100%] sm:w-[30rem] hover:scale-110 w-full bg-JWC-moonstone duration-500" />
          <Container className="z-20 flex flex-col items-center justify-center gap-4 p-8 duration-500 text-JWC-nonphotoblue bg-JWC-teal hover:scale-110">
            <h3 className="text-3xl">A Norwegian Company</h3>
            <p>
              Started by Joakim Villo in 2023 as a one-man freelance business.
              Focuses on does smaller jobs to gain a client base.
            </p>
          </Container>
          <Box className="absolute sm:left-0 left-16 sm:bottom-1/3 bottom-1/2 sm:h-[60%] h-1/3 sm:w-[45%] sm:hover:w-[50%] w-64 bg-JWC-robineggblue duration-500 z-10" />
          <Container className="z-20 flex flex-col items-center justify-center gap-4 p-8 duration-500 text-JWC-nonphotoblue bg-JWC-teal hover:scale-110">
            <h3 className="text-3xl">Current clients</h3>
            <h4 className="text-2xl underline">Wileo AS</h4>
            <ul>
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
          </Container>
          <Box className="absolute sm:right-0 right-16 sm:bottom-1/2 bottom-1/2 sm:h-[60%] h-1/3 sm:w-[45%] sm:hover:w-[50%] w-64 bg-JWC-robineggblue duration-500 z-10" />
        </TextTwoGridLayout>
        <SimpleGrid
          spacing={10}
          className="relative py-12 text-white bg-JWC-lightblue"
        >
          <h2 className="text-5xl text-center">Technologies I use</h2>
          <Flex className="flex-wrap justify-center items-center mx-[10%] md:gap-24 gap-16 min-h-[50vh] m-20 z-20">
            {SKILLS_LIST.map((skill) => (
              <Image
                key={skill.name}
                width={100}
                height={100}
                alt={skill.alt}
                src={skill.imageSrc}
              />
            ))}
          </Flex>
          <Box className="absolute w-screen -translate-y-1/2 top-1/2 h-[600px] bg-JWC-darkblue" />
        </SimpleGrid>
        <TextTwoGridLayout>
          <Container className="flex flex-col items-center justify-center text-JWC-lightblue">
            <h3>Hello</h3>
          </Container>
          <Container className="flex flex-col items-center justify-center text-JWC-lightblue">
            <h3>Hello</h3>
          </Container>
        </TextTwoGridLayout>
      </PageLayout>
    </>
  );
}
