import CallToActionButton, { ArrowCTA } from "@/components/Buttons";
import { LetsGoCTA } from "@/components/CTA/LetsGoCTA";
import {
  ResponsiveThemedH4,
  ResponsiveThemedH5,
  ThemedP,
} from "@/components/Responsive text/ResponsiveText";
import Link from "next/link";

export const OfferSectionPart = ({
  language,
  Theme,
  norTitle,
  engTitle,
  norText,
  engText,
  href
}) => {
  return (
    <div className="mt-5  transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden max-w-sm transition-transform duration-300 shadow sm:rounded-lg group-hover:outline  ${Theme === "light"
          ? " group-hover:outline-Villo-light-white20"
          : " group-hover:outline-Villo-dark-black50"
          }`}
      >
        <div
          className={`grid gap-6 min-h-[131px] transition-colors duration-300  ${Theme === "light"
            ? "bg-Villo-light-white10 group-hover:bg-Villo-light-primary"
            : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-primary"
            } p-12`}
        >
          <ResponsiveThemedH4
            className={`font-bold max-w-fit ${Theme === "light"
              ? "group-hover:text-Villo-light-white"
              : "group-hover:text-Villo-dark-black"
              }`}
          >
            {language === "Norwegian" ? norTitle : engTitle}
          </ResponsiveThemedH4>
          {/* <ResponsiveThemedH5
            className={`font-bold max-w-fit ${
              Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
            }`}
          >
            {language === "Norwegian" ? norSubTitle : engSubTitle}
          </ResponsiveThemedH5> */}
          <div className="mt-2">
            <ThemedP
              className={`${Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
                }`}
            >
              {language === "Norwegian" ? norText : engText}
            </ThemedP>
          </div>
          <Link href={href}>
            <CallToActionButton Theme={Theme} >{language === "Norwegian" ? "les mer" : "read more"}</CallToActionButton>
          </Link>
        </div>

      </div>
    </div>
  );
};
