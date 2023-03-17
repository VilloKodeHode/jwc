import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PageLayout, {
  AltTwoGriddedLayout,
  TopTwoGridLayout,
} from "@/components/Layout";
import SKILLS_LIST from "@/components/Skills/skills_list";
import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="JWC Jv Web Consult official website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <TopTwoGridLayout>
          <Grid className="items-center justify-center grid-flow-row text-center">
            <h1 className="text-5xl text-center md:text-8xl ">
              A passionate Frontend developer <br />
              <span className="text-3xl md:text-5xl">
                for all your design and coding needs
              </span>
            </h1>
          </Grid>
          <div className="bg-[url('/Hero.jpg')] bg-cover bg-right"></div>
        </TopTwoGridLayout>
        <div className="text-center text-5xl text-[#2f1d87]">
          <h2>About JWC</h2>
        </div>
        <AltTwoGriddedLayout>
          <div className="flex justify-center items-center bg-slate-200 text-[#2f1d87]">
            <h2>About</h2>
          </div>
          <div className="flex items-center justify-center">
            <h2>About</h2>
          </div>
        </AltTwoGriddedLayout>
        <SimpleGrid spacing={10} className="text-[#2f1d87]">
          <h2 className="text-5xl text-center">Technologies I use:</h2>
          <Flex className="flex-wrap justify-center items-center mx-[10%] md:gap-24 gap-16">
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
        </SimpleGrid>
        <Box>hello</Box>
      </PageLayout>
    </>
  );
}
