//Not currently used. Alternate look for the skills section. Uses the Accordion component from Chakra UI.

import Image from "next/image";
import Accordion from "../Accordion";
import SKILLS_LIST from "./skills_list";

export default function SkillsWithAccordion() {
  return (
    <>
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
              <div className="absolute h-[20%] w-[30%] translate-x-1/2 -translate-y-1/2 rounded-full bg-Villo-primary right-1/2 top-1/2 skillGlow animate-glow" />
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
                <div className="absolute w-[60%] translate-x-1/2 -translate-y-1/2 rounded-full bg-Villo-primary right-1/2 top-1/2 skillGlow animate-glow" />
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
              <div className="absolute w-[45%] translate-x-1/2 -translate-y-1/2 rounded-full bg-Villo-primary right-1/2 top-1/2 skillGlow animate-glow" />
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
              <div className="absolute h-[25%] w-[25%] translate-x-1/2 -translate-y-1/2 rounded-full bg-Villo-primary right-1/2 top-1/2 skillGlow animate-glow" />
            </div>
          ) : null
        )}
      </Accordion>
    </>
  );
}
