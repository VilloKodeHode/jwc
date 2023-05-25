import Image from "next/image";
import { ResponsiveThemedH2, ThemedP } from "../Responsive text/ResponsiveText";
import SKILLS_LIST from "../Skills/skills_list";

export const SkillsSection = ({ language, Theme }) => {
  return (
    <section className="py-20 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center md:text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Kode kunnskap" : "Coding skills"}
          </ResponsiveThemedH2>
          <ThemedP className="max-w-2xl mt-2">
            {language === "Norwegian"
              ? "Jeg har erfaring å arbeide med følgende teknologier:"
              : "I have experience working with the following technologies:"}
          </ThemedP>
        </div>

        <div className="relative flex justify-center p-8 mt-10 backgroundblend shadowblend">
          <div className="grid grid-cols-2 gap-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4">
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "code language" ? (
                <div
                  className="flex items-center justify-center"
                  key={skill.name}
                >
                  <Image
                    width={80}
                    height={80}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative z-10 mx-auto duration-500 max-w-[70%]"
                  ></Image>
                </div>
              ) : null
            )}
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "framework" ? (
                <div
                  className="flex items-center justify-center"
                  key={skill.name}
                >
                  <Image
                    width={150}
                    height={150}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative z-10 mx-auto duration-500 max-w-[100%]"
                  ></Image>
                </div>
              ) : null
            )}
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "styling" ? (
                <div
                  className="flex items-center justify-center"
                  key={skill.name}
                >
                  <Image
                    width={150}
                    height={150}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative z-10 mx-auto duration-500 max-w-[100%]"
                  ></Image>
                </div>
              ) : null
            )}
            {SKILLS_LIST.map((skill) =>
              skill.skilltype === "design" ? (
                <div
                  className="flex items-center justify-center"
                  key={skill.name}
                >
                  <Image
                    width={100}
                    height={100}
                    alt={skill.alt}
                    src={skill.imageSrc}
                    className="relative z-10 mx-auto duration-500 max-w-[100%]"
                  ></Image>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
