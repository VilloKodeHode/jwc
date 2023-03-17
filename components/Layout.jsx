import { Flex, Grid } from "@chakra-ui/react";

export default function PageLayout({ children }) {
  return (
    <Flex className="flex-col justify-start items-center min-h-screen gap-8 bg-white">
      <>{children}</>
    </Flex>
  );
}

export function TopTwoGridLayout({ children }) {
  return (
    <Grid className="grid relative text-white grid-cols-[60%_40%] h-[calc(100vh-148.9px)] w-screen bg-[#2f1d87]">
      <>{children}</>
    </Grid>
  );
}

export function TwoGriddedLayout({ children }) {
  return (
    <Grid className="grid text-white grid-cols-[60%_40%] h-[100vh] w-screen bg-[#2f1d87]">
      <>{children}</>
    </Grid>
  );
}

export function AltTwoGriddedLayout({ children }) {
  return (
    <Grid className="grid text-white grid-cols-[40%_60%] h-[100vh] w-screen bg-[#2f1d87]">
      <>{children}</>
    </Grid>
  );
}

export function SkillsLayout({ children }) {
  return (
    <section className="grid text-white grid-cols-[40%_60%] h-[100vh] w-screen bg-[#2f1d87]">
      <>{children}</>
    </section>
  );
}
