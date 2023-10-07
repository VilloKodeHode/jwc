import Image from "next/image";
import { ResponsiveThemedH2, ThemedP } from "../../Responsive text/ResponsiveText";
import SKILLS_LIST from "../../Skills/skills_list";
import { SiAdobephotoshop, SiSquarespace, SiWix, SiCanva, SiChakraui, SiCss3, SiDaisyui, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiNuxtdotjs, SiReact, SiSvelte, SiTailwindcss, SiVisualstudiocode } from "react-icons/si";
import SiSanity from "public/images/skills/SiSanity.svg";
export const SkillsSection = ({ language, Theme }) => {
  return (
    <section className={`w-screen py-20 ${Theme === "light" ? "bg-Villo-light-white15" : " bg-Villo-dark-black85"}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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

        <div className={`relative flex justify-center mt-10 ${Theme === "light" ? " bg-Villo-light-" : "bg-Villo-dark-"} `}>
          <div className={`flex flex-wrap transition-colors duration-1000   ${Theme === "light" ? " [&>*]:text-Villo-light-black hover:[&>*]:text-Villo-light-primary" : "[&>*]:text-Villo-dark-white20 hover:[&>*]:text-Villo-dark-primary"} md:gap-20 gap-12`}>
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
            <SiWix className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            <SiSquarespace className="relative z-10 w-[60px] h-[60px] mx-auto duration-500" />
            {/* Sanity icon: try to find an import that works instead of the svg */}
            <svg className={`relative z-10 w-[60px] h-[60px] mx-auto duration-500 ${Theme === "light" ? " fill-Villo-light-black hover:fill-Villo-light-primary" : "fill-Villo-dark-white20 hover:fill-Villo-dark-primary"}`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Sanity</title><path d="M7.394 7.31a5.745 5.745 0 0 1-.833-.68c-.913-.91-1.38-2.067-1.38-3.568v-.575C6.699.929 9.039 0 11.828 0c5.394 0 8.515 2.8 9.285 6.74H16.22c-.54-1.554-1.89-2.764-4.352-2.764-2.422 0-4.136 1.276-4.473 3.334h-.002ZM4.683 3.062c0 3.236 2.034 5.162 6.106 6.177l4.316.983c3.854.87 6.2 3.03 6.2 6.55a6.61 6.61 0 0 1-1.436 4.239c0-3.511-1.85-5.409-6.31-6.55l-4.236-.946c-3.393-.76-6.011-2.536-6.011-6.36a6.578 6.578 0 0 1 1.37-4.093ZM17.18 16.484c-.292 2.235-2.092 3.495-4.698 3.495-2.314 0-4.048-.946-4.703-2.99H2.694C3.518 21.44 7.224 24 12.519 24c2.828 0 5.277-.87 6.85-2.439v-.55c0-1.66-.433-2.876-1.342-3.816a5.508 5.508 0 0 0-.847-.71v-.001Z" /></svg>


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
