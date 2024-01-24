import Image from "next/image";
import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../Responsive text/ResponsiveText";
import SKILLS_LIST from "@/data/skills_list";
import { SkillIcon } from "@/components/base components/SkillIcon";


export const SkillsSection = ({ language, Theme }) => {
  return (
    <section
      className={`w-screen py-20 ${
        Theme === "light" ? "bg-Villo-light-white20" : " bg-Villo-dark-black85"
      }`}
    >
      <div className="px-4 m-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Kode kunnskap" : "Coding skills"}
          </ResponsiveThemedH2>
          <ThemedP className="max-w-2xl mt-2">
            {language === "Norwegian"
              ? "Jeg har erfaring å arbeide med følgende teknologier og design-verktøy:"
              : "I have experience working with the following technologies and design-tools:"}
          </ThemedP>
        </div>

        <div
          className={`relative flex justify-center mt-10 ${
            Theme === "light" ? " bg-Villo-light-" : "bg-Villo-dark-"
          } `}
        >
          <div
            className={`flex flex-wrap justify-center transition-colors duration-1000`}
          >
            <SkillIcon text="HTML" logo="html" saturate="70" width={53.5} />
            <SkillIcon text="CSS" logo="css" saturate="70" width={53.5} />
            <SkillIcon text="Javascript" logo="javascript" saturate="70" />
            <SkillIcon text="Visual studio code" logo="vsc" saturate="70" />
            <SkillIcon text="React" logo="react" saturate="70" />
            <SkillIcon
              text="Nextjs"
              logo="nextjs"
              colored={false}
              saturate="10"
            />
            <SkillIcon text="Scss" logo="scss" saturate="70" />
            <SkillIcon text="Svelte" logo="svelte" saturate="70" />
            <SkillIcon text="Nuxt" logo="nuxt" saturate="70" width={92} />
            <SkillIcon text="Git" logo="git" saturate="70" />
            <SkillIcon
              text="Github"
              logo="github"
              saturate="70"
              colored={false}
            />
            <SkillIcon text="Tailwindcss" logo="tailwindcss" saturate="70" />
            <SkillIcon text="ChakraUI" logo="chakraUI" saturate="70" />
            <SkillIcon text="Figma" logo="figma" saturate="70" width={40} />
            <SkillIcon text="Canva" logo="canva" saturate="70" />
            <SkillIcon
              text="Wix"
              logo="wix"
              saturate="70"
              width={120}
              colored={false}
            />
            <SkillIcon
              text="Squarespace"
              logo="squarespace"
              saturate="70"
              colored={false}
            />
            <SkillIcon text="Sanity" logo="sanity" saturate="70" width={45} />
          </div>
        </div>
      </div>
    </section>
  );
};
