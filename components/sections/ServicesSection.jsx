import { useContext } from "react";
import CallToActionButton from "../Buttons";
import {
  ResponsiveH2,
  ResponsiveH5,
  ResponsiveP,
  ResponsiveThemedH2,
  ThemedP,
} from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import ThemeContext from "../Utilities/ThemeSwitch/ThemeContext";

export const ServicesSection = () => {
  const { Theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="py-12 ">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Tjenester" : "Services"}
          </ResponsiveThemedH2>
          <ThemedP className={`mt-4`}>
            {language === "Norwegian"
              ? "Jeg tilbyr en rekke tjenester for å møte dine behov. Enten du trenger hjelp med nettsiden din, digital markedsføring eller noe i mellom, så har jeg deg dekket."
              : "I offer a range of services to meet your needs. Whether you need help with your website, digital marketing, or anything in between, I've got you covered."}
          </ThemedP>
        </div>

        <div className="mt-10 ">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div
                  className={`flex flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${
                    Theme === "light" ? "bg-JWC-white" : "bg-jwc-black"
                  } sm:p-6`}
                >
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      {language === "Norwegian"
                        ? "Lage nettside"
                        : "Website creation"}
                    </ResponsiveH5>

                    <ThemedP className="mt-2">
                      {language === "Norwegian"
                        ? "Jeg lager nettsider som er optimalisert for best mulig brukeropplevelse og trafikk på nettet. Den nyeste teknologien blir brukt for å sikre at nettsiden din er rask, moderne og responsiv."
                        : "I create websites that are optimized for the best user experience and web traffic. The latest technology is used to ensure that your website is fast, secure, and responsive."}
                    </ThemedP>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div
                  className={`flex flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${
                    Theme === "light" ? "bg-JWC-white" : "bg-jwc-black"
                  } sm:p-6`}
                >
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      {language === "Norwegian" ? "Nettinnhold" : " Webcontent"}
                    </ResponsiveH5>
                    <ThemedP className="mt-2">
                      {language === "Norwegian"
                        ? "Jeg har kunnskap innen flere felt utenom programmering, som ernæring, pedagogikk og fysisk aktivitet. Jeg kan skrive nettinnhold som både er informativt og engasjerende."
                        : "Im knowledgeable in several fields outside of programming, like nutrition, pedagogy and physical activity. I can write content for your website that is both informative and engaging."}
                    </ThemedP>
                  </div>
                  {/* <CallToActionButton>Learn more</CallToActionButton> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div
                  className={`flex flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${
                    Theme === "light" ? "bg-JWC-white" : "bg-jwc-black"
                  } sm:p-6`}
                >
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      {language === "Norwegian" ? "Nettdesign" : " Webdesign"}
                    </ResponsiveH5>
                    <ThemedP className="mt-2">
                      {language === "Norwegian"
                        ? "Hvis du ikke vet hvordan du vil at nettsiden din skal se ut, kan jeg hjelpe deg med det. Jeg kan skape et design som passer dine behov og merkevare. Jeg kan også hjelpe deg med å skape ditt merkevare"
                        : "If you dont know what you want your website to look like, I can help you with that. I can create a design that fits your needs and your brand. I can also help you create a brand if you dont have one."}
                    </ThemedP>
                  </div>
                  {/* <CallToActionButton>Learn more</CallToActionButton> */}
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-1">
              <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
                <div
                  className={`flex flex-col justify-between px-4 py-5 min-h-[150px] md:min-h-[200px] ${
                    Theme === "light" ? "bg-JWC-white" : "bg-jwc-black"
                  } sm:p-6`}
                >
                  <div className="h-full">
                    <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
                      {language === "Norwegian" ? "Småjobber" : "Odd jobs"}
                    </ResponsiveH5>
                    <ThemedP className="mt-2">
                      {language === "Norwegian"
                        ? "Hvis du trenger hjelp med noe som ikke er nevnt her, ikke nøl med å ta kontakt med meg. Jeg er alltid åpen for nye utfordringer, og jeg er sikker på at vi kan finne en løsning."
                        : "If you need help with something that is not listed here, dont hesitate to contact me. I&apos;m always open to new challenges and I&apos;m sure we can work something out."}
                    </ThemedP>
                  </div>
                  {/* <CallToActionButton>Contact me</CallToActionButton> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//! Use the component below after I have added pages or modals for each service
// export const ServicesSection = () => {
//   return (
//     <div className="py-12 ">
//       <div className="mx-auto max-w-7xl">
//         <div className="text-center">
//           <ResponsiveH2 className="font-extrabold text-JWC-White15">
//             Services
//           </ResponsiveH2>
//           <p className="mt-4 text-JWC-white15">
//             I offer a range of services to meet your needs. Whether you need
//             help with your website, digital marketing, or anything in between,
//             I&apos;ve got you covered.
//           </p>
//         </div>

//         <div className="mt-10 ">
//           <div className="md:grid md:grid-cols-2 md:gap-6">
//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Website creation
//                     </ResponsiveH5>

//                     <p className="mt-2 text-JWC-white15">
//                       I create websites that are optimized for the best user
//                       experience and web traffic. The latest technology is used
//                       to ensure that your website is fast, secure, and
//                       responsive. I can make everything for simple landing pages
//                       to complex web applications.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Webcontent
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       Im knowledgeable in several fields outside of programming,
//                       like nutrition, pedagogy and physical activity. I can
//                       write content for your website that is both informative
//                       and engaging.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-10 md:grid md:grid-cols-2 md:gap-6">
//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Webdesign
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       If you dont know what you want your website to look like,
//                       I can help you with that. I can create a design that fits
//                       your needs and your brand. I can also help you create a
//                       brand if you dont have one.
//                     </p>
//                   </div>
//                   <CallToActionButton>Learn more</CallToActionButton>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 md:mt-0 md:col-span-1">
//               <div className="overflow-hidden shadow shadow-JWC-black75 sm:rounded-lg">
//                 <div className="flex flex-col justify-between px-4 py-5 h-[310px] bg-JWC-black sm:p-6">
//                   <div className="h-full">
//                     <ResponsiveH5 className="font-light bg-gradient-to-br from-JWC-secondary to-JWC-primary bg-clip-text transparent">
//                       Odd jobs
//                     </ResponsiveH5>
//                     <p className="mt-2 text-JWC-white15">
//                       If you need help with something that is not listed here,
//                       dont hesitate to contact me. I&apos;m always open to new
//                       challenges and I&apos;m sure we can work something out.
//                     </p>
//                   </div>
//                   <CallToActionButton>Contact me</CallToActionButton>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
