import { useContext } from "react";
import { UserContext } from "../../Utilities/UserContext";
import { SUBPAGES_DATA } from "../../../data/subPages_data";
import {
  ResponsiveThemedH1,
  ResponsiveThemedH3,
  ResponsiveThemedH5,
} from "../../base_components/ResponsiveText";
import { ArrowCTA, ReadMoreButton } from "../../base_components/Buttons";
import { scrollToSection } from "@/components/navigation/scrollLogic";
import Link from "next/link";
import {
  CheckProcessBullitin,
  SectionProcessPartSection,
} from "../ServiceSection";

export const SubpageContent = ({ page, id }) => {
  const { theme, language } = useContext(UserContext);
  const pageData = SUBPAGES_DATA[page];
  const topTitle = pageData.top.title;
  const topParagraph = pageData.top.paragraph;
  const middleTittle = pageData.middle.title;
  const subpageBullitins = pageData.middle.bullitins;
  const bottomParagraph = pageData.bottom.paragraphs;
  return (
    <>
      <section className="py-12">
        <div className="flex flex-col items-start justify-center gap-8 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="w-full text-left">
            <ResponsiveThemedH1>
              {language === "Norwegian" ? topTitle.norText : topTitle.engText}
            </ResponsiveThemedH1>
          </div>
          <div className="animate-PageAppearRight">
            <ResponsiveThemedH5 className={`mt-4 font-normal`}>
              {language === "Norwegian"
                ? topParagraph.norText
                : topParagraph.engText}
            </ResponsiveThemedH5>
          </div>
          <div className="grid justify-center gap-8 ml:grid-flow-col">
            <div className="h-[60px] flex justify-start items-center max-w-fit">
              <a
                //TODO fix the id target so its dynamic.
                onClick={(event) => scrollToSection(event, id)}
                className=""
              >
                <ReadMoreButton className="">
                  {language === "Norwegian" ? "lær mer" : "learn more"}
                </ReadMoreButton>
              </a>
            </div>
            <div className="h-[60px] flex justify-start items-center">
              <Link href="/contact" className="">
                <ArrowCTA className="">
                  {language === "Norwegian" ? "Kontakt nå" : "Contact now"}
                </ArrowCTA>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid justify-center items-center w-full min-h-[35vh] text-left xl:gap-0 gap-12">
        <div className="mx-auto">
          <ResponsiveThemedH3 className="flex mb-12 text-center md:max-w-full max-w-[280px]">
            {language === "Norwegian"
              ? middleTittle.norText
              : middleTittle.engText}
          </ResponsiveThemedH3>
        </div>
        <div
          id={id}
          className="flex flex-wrap justify-center gap-12 xl:items-start text-Villo-white15"
        >
          <SectionProcessPartSection engTitle="You get:" norTitle="Du får:">
            {subpageBullitins.map((bullitin, index) => (
              <CheckProcessBullitin key={page + "bullitin" + index}>
                {language === "Norwegian" ? bullitin.norText : bullitin.engText}
              </CheckProcessBullitin>
            ))}
            <div
              className={`absolute -z-10 w-screen overflow-hidden translate-x-1/2 -translate-y-1/2 bg-opacity-50  ml:h-[90%] h-[97%] right-1/2 top-1/2 ${
                theme === "light"
                  ? "bg-Villo-light-white20"
                  : "bg-Villo-dark-black85"
              } `}
            />
          </SectionProcessPartSection>
        </div>
      </section>

      <section className="">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-10 text-center animate-PageAppearRight">
          {bottomParagraph.map((paragraph, index) => (
            <div key={page + "BottomParagraph" + index}>
          <ResponsiveThemedH5 className={`mt-4 font-normal`}>
          {language === "Norwegian"
           ? paragraph.norText
           : paragraph.engText}
        </ResponsiveThemedH5>  
          </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
