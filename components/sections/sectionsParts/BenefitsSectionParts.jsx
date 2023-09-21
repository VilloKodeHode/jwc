import {
  ResponsiveThemedH5,
  ThemedP,
} from "@/components/Responsive text/ResponsiveText";

export const BenefitsSectionPart = ({
  language,
  Theme,
  norTitle,
  engTitle,
  norText,
  engText,
  norSubTitle,
  engSubTitle,
}) => {
  return (
    <div className="mt-5 transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden transition-transform duration-300 shadow sm:rounded-lg group-hover:outline  ${
          Theme === "light"
            ? " group-hover:outline-Villo-light-white20"
            : " group-hover:outline-Villo-dark-black50"
        }`}
      >
        <div
          className={`min-h-[131px] transition-colors duration-300 px-4 py-5  ${
            Theme === "light"
              ? "bg-Villo-light-white10 group-hover:bg-Villo-light-primary"
              : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-primary"
          } sm:p-6`}
        >
          <ResponsiveThemedH5
            className={`font-bold max-w-fit ${
              Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
            }`}
          >
            {language === "Norwegian" ? norTitle : engTitle}
          </ResponsiveThemedH5>
          <ResponsiveThemedH5
            className={`font-bold max-w-fit ${
              Theme === "light"
                ? "group-hover:text-Villo-light-white"
                : "group-hover:text-Villo-dark-black"
            }`}
          >
            {language === "Norwegian" ? norSubTitle : engSubTitle}
          </ResponsiveThemedH5>
          <div className="mt-2">
            <ThemedP
              className={`${
                Theme === "light"
                  ? "group-hover:text-Villo-light-white"
                  : "group-hover:text-Villo-dark-black"
              }`}
            >
              {language === "Norwegian" ? norText : engText}
            </ThemedP>
          </div>
        </div>
      </div>
    </div>
  );
};
