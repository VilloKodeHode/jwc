import Image from "next/image";
import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../Responsive text/ResponsiveText";
import SKILLS_LIST from "../../Skills/skills_list";
import {
  SiAdobephotoshop,
  SiSquarespace,
  SiWix,
  SiCanva,
  SiChakraui,
  SiCss3,
  SiDaisyui,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

export const SkillsSection = ({ language, Theme }) => {
  return (
    <section
      className={`w-screen py-20 ${
        Theme === "light" ? "bg-Villo-light-white15" : " bg-Villo-dark-black85"
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
            className={`flex flex-wrap transition-colors duration-1000    md:gap-20 gap-12`}
          >
            <Image
              src="/images/skills/html-logo.png"
              className="relative z-10 w-[53.5px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            ></Image>

            <Image
              src="/images/skills/react-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            ></Image>

            <Image
              src="/images/skills/css-logo.png"
              className="relative z-10 w-[53.5px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/javascript-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="javascript logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/nextjs-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-110"
              alt="nextjs logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/svelte-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="nextjs logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/nuxt-logo.png"
              className="relative z-10 w-[92px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="nextjs logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/vsc.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/git-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="nextjs logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/github-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-110"
              alt="nextjs logo"
              height={60}
              width={60}
            ></Image>
            <Image
              src="/images/skills/tailwindcss-logo.png"
              className="relative object-fit z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="figma logo"
              height={80}
              width={80}
            />

            <figure className="grid grid-cols-[2fr_1fr] w-[120px] group hover:scale-110 duration-500">
              <Image
                src="/images/skills/daisy1-logo.png"
                className="relative object-fit z-10 w-[70px] aspect-auto m-auto duration-500 saturate-50 group-hover:saturate-100"
                alt="figma logo"
                height={80}
                width={80}
              />
              <Image
                src="/images/skills/daisy2-logo.png"
                className="relative object-fit z-10 w-[35px] aspect-auto my-auto duration-500 contrast-50 group-hover:contrast-100"
                alt="figma logo"
                height={80}
                width={80}
              />
            </figure>
            <Image
              src="/images/skills/chakraUI-logo.png"
              className="relative object-fit z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="figma logo"
              height={80}
              width={80}
            />

            <Image
              src="/images/skills/figma-logo.png"
              className="relative object-fit z-10 w-[40px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="figma logo"
              height={80}
              width={80}
            />

            <Image
              src="/images/skills/canva-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            />
            <Image
              src="/images/skills/wix-logo.png"
              className="relative z-10 w-[120px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-110"
              alt="react logo"
              height={120}
              width={120}
            ></Image>
            <Image
              src="/images/skills/squarespace-logo.png"
              className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            />
            <Image
              src="/images/skills/sanity-logo.png"
              className="relative z-10 w-[45px] aspect-auto m-auto duration-500 saturate-50 hover:saturate-100 hover:scale-110"
              alt="react logo"
              height={60}
              width={60}
            />

            {/* <SiAdobephotoshop className="relative z-10 w-[60px] h-[60px] m-auto duration-500 hover:text-[#31c5f0] border-[#31c5f0] rounded-xl hover:bg-white hover:border-8 border-spacing-2" /> */}
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
                    className="relative z-10 m-auto duration-500 max-w-[70%]"
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
                    className="relative z-10 m-auto duration-500 max-w-[100%]"
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
                    className="relative z-10 m-auto duration-500 max-w-[100%]"
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
                    className="relative z-10 m-auto duration-500 max-w-[100%]"
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
