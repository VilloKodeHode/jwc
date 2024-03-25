import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../base_components/ResponsiveText";
import { SkillIcon } from "@/components/base_components/SkillIcon";
import { UserContext } from "../../Utilities/UserContext";
import { useContext } from "react";
import SKILLS_LIST from "../../../data/skills_list";


export const SkillsSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section
      className={`w-screen py-20 ${
        theme === "light" ? "bg-Villo-light-white20" : " bg-Villo-dark-black85"
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
            theme === "light" ? " bg-Villo-light-" : "bg-Villo-dark-"
          } `}
        >
          <div
            className={`flex gap-8 flex-wrap justify-center transition-colors duration-1000`}
          >
            {SKILLS_LIST.map((skill) => (
              <figure key={skill.alt}>
              <SkillIcon text={skill.name} logo={skill.logo} saturate={skill.options.saturate} colored={skill.options.colored} width={skill.options.width} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
