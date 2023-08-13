import Image from "next/image";
import { ResponsiveThemedH2, ThemedP } from "../Responsive text/ResponsiveText";
import SKILLS_LIST from "../Skills/skills_list";
import { SiAdobephotoshop, SiCanva, SiChakraui, SiCss3, SiDaisyui, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiNuxtdotjs, SiReact, SiSvelte, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";

export const SkillsSection = ({ language, Theme }) => {
  return (
    <section className={`w-screen py-20 ${Theme === "light" ? "bg-Villo-light-white10" : " bg-Villo-dark-black85" }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Kode kunnskap" : "Coding skills"}
          </ResponsiveThemedH2>
          <ThemedP className="max-w-2xl mt-2">
            {language === "Norwegian"
              ? "Jeg har erfaring å arbeide med følgende teknologier:"
              : "I have experience working with the following technologies:"}
          </ThemedP>
        </div>

        <div className={`relative flex justify-center mt-10 ${Theme === "light" ? " bg-Villo-light-" : "bg-Villo-dark-" } `}>
          <div className={`flex flex-wrap  ${Theme === "light" ? " [&>*]:text-Villo-light-black hover:[&>*]:text-Villo-light-primary" : "[&>*]:text-Villo-dark-white20 hover:[&>*]:text-Villo-dark-primary" } md:gap-20 gap-12`}>
            <SiHtml5 className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiCss3 className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiJavascript className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiReact className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiNextdotjs className={`relative z-10 w-[60px] h-[60px] mx-auto duration-500`} />
            <SiSvelte className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiNuxtdotjs className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiVisualstudiocode className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiGit className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiGithub className={`relative z-10 w-[60px] h-[60px] mx-auto duration-500`} />
            <SiTailwindcss className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiDaisyui className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiChakraui className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiFigma className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiCanva className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            {/* <SiAdobephotoshop className="relative z-10 w-[60px] h-[60px] mx-auto duration-500 hover:text-[#31c5f0] border-[#31c5f0] rounded-xl hover:bg-white hover:border-8 border-spacing-2" /> */}
            {/* {SKILLS_LIST.map((skill) =>
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
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};
