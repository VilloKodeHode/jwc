//In use. Uses the Tabs component from Chakra UI to display the skills in a tabbed format.

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Image from "next/image";
import SKILLS_LIST from "./skills_list";

export default function SkillWithTabs() {
  

  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="JWC"
        size="lg"
        isFitted
        className="w-[90vw]"
      >
        <TabList className="flex flex-wrap">
          <Tab fontSize="2xl">Kodespråk</Tab>
          <Tab fontSize="2xl">Frameworks</Tab>
          <Tab fontSize="2xl">Web-Styling</Tab>
          <Tab fontSize="2xl">Design-verktøy</Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="flex items-center gap-12 justify-center min-h-[300px]">
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "code language" ? (
                <div className="relative" key={skill.name}>
                  <Image
                    width={100}
                    height={100}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative max-w-[80%] mx-auto z-10 m-12 duration-500 w-fit "
                  ></Image>
                  <div className="absolute h-[20%] w-[30%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                </div>
              ) : null
            )}
          </TabPanel>
          <TabPanel className="flex items-center flex-wrap gap-12 justify-center min-h-[300px]">
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "framework" ? (
                <div className="relative" key={skill.name}>
                  <Image
                    width={100}
                    height={100}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative max-w-[70%] mx-auto z-10 m-12 duration-500 w-fit "
                  ></Image>
                  <div className="absolute w-[60%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                </div>
              ) : null
            )}
          </TabPanel>
          <TabPanel className="flex items-center flex-wrap gap-12 justify-center min-h-[300px]">
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "styling" ? (
                <div className="relative" key={skill.name}>
                  <Image
                    width={100}
                    height={100}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative max-w-[60%] mx-auto m-12 z-10 duration-500 w-fit "
                  ></Image>
                  <div className="absolute w-[45%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                </div>
              ) : null
            )}
          </TabPanel>
          <TabPanel className="flex items-center gap-12 justify-center min-h-[300px]">
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "design" ? (
                <div className="relative" key={skill.name}>
                  <Image
                    width={100}
                    height={100}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative z-10 mx-auto duration-500 max-w-[90%] "
                  ></Image>
                  <div className="absolute h-[25%] w-[25%] translate-x-1/2 -translate-y-1/2 rounded-full bg-JWC-primary right-1/2 top-1/2 skillGlow animate-glow" />
                </div>
              ) : null
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
