import Image from "next/image";
import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../base_components/ResponsiveText";
import { UserContext } from "../../Utilities/UserContext";
import { useContext } from "react";

export const SkillsSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section
      className={`w-screen py-20 ${
        theme === "light" ? "bg-Villo-light-white15" : " bg-Villo-dark-black85"
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
            className={`flex flex-wrap justify-center transition-colors duration-1000 md:gap-24 gap-12`}
          >
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/html-logo.png"
                className="relative z-10 w-[53.5px] aspect-auto m-auto duration-500 saturate-[70%] group-hover:saturate-100 group-hover:scale-125"
                alt="html logo"
                height={60}
                width={60}
              />
              <div className="absolute group-hover:scale-125 duration-500 rounded-full group-hover:shadow-[0_0_30px_20px_#e15021] translate-x-1/2 translate-y-1/2  bottom-1/2 right-1/2" />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Html</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/react-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="react logo"
                height={60}
                width={60}
              />
              <div className="absolute group-hover:scale-125 duration-500 group-hover:shadow-[0_0px_30px_10px_#00d8fe]  translate-x-1/2 translate-y-1/2  bottom-1/2 right-1/2" />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>React</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/css-logo.png"
                className="relative z-10 w-[53.5px] aspect-auto m-auto duration-500 saturate-[70%]  hover:saturate-100 hover:scale-125"
                alt="css logo"
                height={60}
                width={60}
              />
              <div className="absolute group-hover:scale-125 duration-500 rounded-full group-hover:shadow-[0_0_30px_20px_#2d63f3] translate-x-1/2 translate-y-1/2  bottom-1/2 right-1/2" />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Css</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/javascript-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="javascript logo"
                height={60}
                width={60}
              />
              <div className="absolute group-hover:scale-125 duration-500 rounded-full group-hover:shadow-[0_0_30px_20px_#f7e01d] translate-x-1/2 translate-y-1/2  bottom-1/2 right-1/2" />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Javascript</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/nextjs-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-125"
                alt="nextjs logo"
                height={60}
                width={60}
              />

              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Next.js</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/svelte-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="svelte logo"
                height={60}
                width={60}
              />
              <div className="absolute group-hover:scale-125 duration-500 rounded-full group-hover:group-hover:shadow-[0_0_30px_20px_#f73f04] translate-x-1/2 translate-y-1/2  bottom-1/2 right-1/2" />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Svelte</ThemedP>
              </span>
            </figure>

            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/nuxt-logo.png"
                className="relative z-10 w-[92px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="nuxt logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Nuxt.js</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/vsc-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="vsc logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold text-center duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Visual Studio Code</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/git-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="git logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Git</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/github-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-125"
                alt="github logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Github</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/tailwindcss-logo.png"
                className="relative object-fit z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="tailwind logo"
                height={80}
                width={80}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Tailwind css</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <div className="grid grid-cols-[2fr_1fr] w-[120px] group-hover:scale-125 duration-500">
                <Image
                  src="/images/skills/daisy1-logo.png"
                  className="relative object-fit z-10 w-[70px] aspect-auto m-auto duration-500 saturate-[70%] group-hover:saturate-100"
                  alt="daisy logo - daisy part"
                  height={80}
                  width={80}
                />
                <Image
                  src="/images/skills/daisy2-logo.png"
                  className="relative object-fit z-10 w-[35px] aspect-auto my-auto duration-500 contrast-50 group-hover:contrast-100"
                  alt="daisyUI logo - UI part"
                  height={80}
                  width={80}
                />
              </div>
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>DaisyUI</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/chakraUI-logo.png"
                className="relative object-fit z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="figma logo"
                height={80}
                width={80}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>ChakraUI</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/figma-logo.png"
                className="relative object-fit z-10 w-[40px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="figma logo"
                height={80}
                width={80}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Figma</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/canva-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="react logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Canva</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/wix-logo.png"
                className="relative z-10 w-[120px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-125"
                alt="react logo"
                height={120}
                width={120}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Wix</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/squarespace-logo.png"
                className="relative z-10 w-[60px] aspect-auto m-auto duration-500 contrast-50 hover:contrast-100 hover:scale-125"
                alt="Squarespace logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Squarespace</ThemedP>
              </span>
            </figure>
            <figure className="relative group h-[60px] flex justify-center">
              <Image
                src="/images/skills/sanity-logo.png"
                className="relative z-10 w-[45px] aspect-auto m-auto duration-500 saturate-[70%] hover:saturate-100 hover:scale-125"
                alt="Sanity logo"
                height={60}
                width={60}
              />
              <span className="absolute font-bold duration-500 translate-x-1/2 opacity-0 select-none w-max group-hover:opacity-100 -top-8 right-1/2">
                <ThemedP>Sanity</ThemedP>
              </span>
            </figure>

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
                  />
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
