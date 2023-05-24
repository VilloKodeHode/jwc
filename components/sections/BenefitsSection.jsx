import { useContext } from "react";
import {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH2,
  Themed,
  ThemedP,
  ThemedPP,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export const BenefitsSection = () => {
  const { language } = useContext(LanguageContext);
  const { Theme } = useContext(ThemeContext);
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="flex px-12 text-center">
            {language === "Norwegian"
              ? "Hva du kan oppnå med Villo utvikling"
              : "What you can achieve with Villo development"}
          </ResponsiveThemedH2>
        </div>
        <div className="mt-10">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-Villo-black75 sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-white" : "bg-Villo-black"
                  } sm:p-6`}
                >
                  <ResponsiveH5 className="font-light bg-gradient-to-br from-Villo-secondary to-Villo-primary bg-clip-text transparent">
                    {language === "Norwegian"
                      ? "Kvalitet til en god pris"
                      : "Quality for a good price"}
                  </ResponsiveH5>
                  <div className="mt-2">
                    <ThemedP>
                      {language === "Norwegian"
                        ? "Ingen mellomledd som tar en stor del av budsjettet"
                        : "No middleman that takes a big part of the budget"}
                    </ThemedP>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-Villo-black75 sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-white" : "bg-Villo-black"
                  } sm:p-6`}
                >
                  <ResponsiveH5 className="font-light bg-gradient-to-br from-Villo-secondary to-Villo-primary bg-clip-text transparent">
                    {language === "Norwegian"
                      ? "Optimaliserte websider som bruker den nyeste teknologien"
                      : "Optimized websites that use the latest technology"}
                  </ResponsiveH5>
                  <div className="mt-2">
                    <ThemedP>
                      {language === "Norwegian"
                        ? "For den beste nettrafikken og brukeropplevelse"
                        : "For the best web traffic and user experience"}
                    </ThemedP>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-Villo-black75 sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-white" : "bg-Villo-black"
                  } sm:p-6`}
                >
                  <ResponsiveH5 className="font-light bg-gradient-to-br from-Villo-secondary to-Villo-primary bg-clip-text transparent">
                    {language === "Norwegian"
                      ? "Kontinuerlige kommunikasjon gjennom hele prosessen"
                      : "Continuous communication throughout the whole process"}
                  </ResponsiveH5>
                  <div className="mt-2">
                    <ThemedP>
                      {language === "Norwegian"
                        ? "For å sikre at du får det resultatet du ønsker"
                        : "To ensure that the result will be just what you want"}
                    </ThemedP>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
