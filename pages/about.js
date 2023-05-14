import { BigButton } from "@/components/Buttons";
import PageLayout, { TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
  ResponsiveSmall,
} from "@/components/Responsive text/ResponsiveText";
import SkillWithTabs from "@/components/Skills/SkillsWithTabs";
import SKILLS_LIST from "@/components/Skills/skills_list";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  return (
    <PageLayout gap="gap-28">
      <section className="grid items-center min-h-[60vh] justify-center w-screen font-bold text-center lg:grid-cols-2 mt-[56px]">
        <div className="flex flex-col items-center justify-center lg:h-full h-[50vh] shadow shadow-JWC-black75 m-8 px-8">
          <div className="">
            <ResponsiveH2 className="text-JWC-white">
              JV Web Consult
            </ResponsiveH2>
            <ResponsiveH3>
              <div className="bg-gradient-to-r from-JWC-tertiary to-JWC-secondary bg-clip-text transparent">
                Joakim Villo
              </div>
            </ResponsiveH3>
          </div>
          <TextFlex textWidth="md:max-w-[60ch] max-w-[80ch]">
            <ResponsiveH4 className="text-JWC-white">
              {language === "Norwegian" ? "Norsk foretak" : "Norwegian company"}
            </ResponsiveH4>
            <ResponsiveP className="text-JWC-white">
              {language === "Norwegian"
                ? "Siden oppstarten i Tønsberg i 2023 har selskapet fokusert på å skaffe nye kunder ved å ta på seg mindre prosjekter og bygge opp en lojal kundebase."
                : "Since its inception in Tønsberg in 2023, the company has focused on acquiring new customers by taking on smaller projects and building a loyal customer base."}
            </ResponsiveP>
          </TextFlex>
        </div>
        <div className="w-screen lg:h-full lg:w-full h-[40vh] shadow shadow-JWC-black75 tonsbergBG" />
      </section>

      {/* <section className="flex relative w-screen min-h-[40vh] py-8 snap-center">
        <div className="z-20 grid items-start justify-center w-full grid-flow-col">
          <SkillWithTabs />
        </div>
      </section> */}

      <section className="py-20 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <ResponsiveH2 className="font-semibold text-JWC-white">
              Coding Skills
            </ResponsiveH2>
            {/* <ResponsiveH4 className="mt-2 font-extrabold text-JWC-white15">
              Here are some of my coding skills
            </ResponsiveH4> */}
            <p className="max-w-2xl mt-4 text-xl text-JWC-white15 lg:mx-auto">
              I have experience working with the following technologies:
            </p>
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

      <div className="mb-[92px]">
        <Link href="/projects">
          <BigButton>
            <ResponsiveSmall className="text-JWC-white">
              {language === "Norwegian" ? "Prosjekter" : "Projects"}
            </ResponsiveSmall>
          </BigButton>
        </Link>
      </div>
    </PageLayout>
  );
}
