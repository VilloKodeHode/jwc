import {
  ResponsiveH5,
  ResponsiveThemedH2,
  ResponsiveThemedH5,
  ThemedP,
} from "../Responsive text/ResponsiveText";

export const BenefitsSection = ({ language, Theme }) => {
  return (
    <div className={`w-screen py-12 ${
      Theme === "light" ? "bg-Villo-light-white15" : "bg-Villo-dark-black85"
    }`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="px-12 text-center">
            {language === "Norwegian"
              ? "Hva du kan oppnå med Villo utvikling"
              : "What you can achieve with Villo development"}
          </ResponsiveThemedH2>
        </div>
        <div className="flex justify-center mt-10">
          <div className="md:grid md:grid-cols-1 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
                  } sm:p-6`}
                >
                  <ResponsiveThemedH5 className="font-bold">
                    {language === "Norwegian"
                      ? "Kvalitet til en god pris"
                      : "Quality for a good price"}
                  </ResponsiveThemedH5>
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
              <div className="overflow-hidden shadow sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
                  } sm:p-6`}
                >
                  <ResponsiveThemedH5 className="font-bold">
                    {language === "Norwegian"
                      ? "Optimaliserte websider som bruker den nyeste teknologien"
                      : "Optimized websites that use the latest technology"}
                  </ResponsiveThemedH5>
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
              <div className="overflow-hidden shadow sm:rounded-lg">
                <div
                  className={`px-4 py-5  ${
                    Theme === "light" ? "bg-Villo-light-white10" : "bg-Villo-dark-black75"
                  } sm:p-6`}
                >
                  <ResponsiveThemedH5 className="font-bold">
                    {language === "Norwegian"
                      ? "Kontinuerlige kommunikasjon gjennom hele prosessen"
                      : "Continuous communication throughout the whole process"}
                  </ResponsiveThemedH5>
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
