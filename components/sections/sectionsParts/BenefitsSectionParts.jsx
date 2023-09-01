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
    <div className="mt-5 md:mt-0 md:col-span-1">
      <div className="overflow-hidden shadow sm:rounded-lg">
        <div
          className={`min-h-[131px] px-4 py-5  ${
            Theme === "light"
              ? "bg-Villo-light-white10"
              : "bg-Villo-dark-black75"
          } sm:p-6`}
        >
          <ResponsiveThemedH5 className="font-bold max-w-fit">
            {language === "Norwegian" ? norTitle : engTitle}
          </ResponsiveThemedH5>
          <ResponsiveThemedH5 className="font-bold max-w-fit">
            {language === "Norwegian" ? norSubTitle : engSubTitle}
          </ResponsiveThemedH5>
          <div className="mt-2">
            <ThemedP>{language === "Norwegian" ? norText : engText}</ThemedP>
          </div>
        </div>
      </div>
    </div>
  );
};
