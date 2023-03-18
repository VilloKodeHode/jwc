import { Flex, Grid } from "@chakra-ui/react";

export default function PageLayout({ children }) {
  return (
    <Flex className="flex-col items-center justify-start min-h-screen gap-8">
      <>{children}</>
    </Flex>
  );
}

export function TopTwoGridLayout({ children }) {
  return (
    <Grid className="grid relative text-white sm:grid-cols-[60%_40%] h-[calc(100vh-126.75px)] w-screen bg-JWC-lightblue">
      <>{children}</>
    </Grid>
  );
}

export function TwoGriddedLayout({ children }) {
  return (
    <Grid className="grid text-white grid-cols-[60%_40%] h-[100vh] w-screen">
      <>{children}</>
    </Grid>
  );
}

export function TextTwoGridLayout({ children, sectionTitle }) {
  return (
    <>
      <div className="h-[20vh] flex items-end text-5xl mb-12 text-center text-white font-bold">
        <h2 className="z-10">{sectionTitle}</h2>
      </div>
      <Grid className="items-start sm:grid-cols-[50%_50%] sm:gap-2 gap-12 min-h-[30vh] w-screen relative">
        <>{children}</>
      </Grid>
    </>
  );
}

export function SkillsLayout({ children }) {
  return (
    <section className="grid text-white grid-cols-[40%_60%] h-[100vh] w-screen bg-JWC-darkblue">
      <>{children}</>
    </section>
  );
}
