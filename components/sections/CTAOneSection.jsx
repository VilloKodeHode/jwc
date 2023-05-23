import Image from "next/image";
import { ResponsiveH2, ThemedP } from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import { useContext, useState } from "react";
export const CTAOneSection = () => {
  const [currentWeb, setCurrentWeb] = useState("/Hero8.png");
  const { language } = useContext(LanguageContext);

  return (
    <>
      <section className="relative animate-PageAppearRight z-10 flex items-center justify-center w-full min-h-[calc(100vh-144px)] bg-center bg-cover group/imageEffect">
        <div className="max-w-6xl ">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative z-10 text-center select-none md:text-left">
                <ResponsiveH2 className="mb-8 ">
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDesign.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-primary"
                  >
                    <span className="group-hover:text-JWC-primary group-hover:opacity-100 opacity-80 text-JWC-black50 h1hidden">
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDevelopment.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-secondary w-fit"
                  >
                    <span className="group-hover:text-JWC-secondary group-hover:opacity-100 opacity-80 text-JWC-black50 h1hidden">
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "development"}
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    onMouseLeave={() => setCurrentWeb("/Hero8.png")}
                    className="cursor-pointer group text-JWC-tertiary w-fit"
                  >
                    <span className="group-hover:text-JWC-tertiary group-hover:opacity-100 opacity-80 text-JWC-black50 h1hidden">
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "innhold" : "content"}
                  </span>
                </ResponsiveH2>
                <ThemedP className="max-w-md mb-8">
                  {language === "Norwegian"
                    ? "Engasjerende nettsider for ditt formål: Fra enkle til komplekse nettsider, som er tilpasset alle enheter."
                    : "Engaging websites for your purpose: From simple to complex websites, customized for all devices."}
                </ThemedP>
              </div>
            </div>
            <div className="w-full mt-8 md:w-1/2">
              <div className="relative z-10 grid justify-center">
                <Image
                  src={currentWeb}
                  alt="intro image"
                  width={400}
                  height={400}
                  className="object-cover duration-300 md:w-full md:h-full opacity-90 shadowblend group-hover/imageEffect:opacity-100"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// export const getStaticProps = async () => {
//   const images = [
//     "/Hero8.png",
//     "/HeroDesign.webp",
//     "/HeroDevelopment.webp",
//     "/HeroCollage.webp",
//   ];

//   const imagePromises = images.map((image) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.src = image;
//       img.onload = resolve;
//       img.onerror = reject;
//     });
//   });

//   try {
//     await Promise.all(imagePromises);
//   } catch (error) {
//     console.error("Failed to preload images:", error);
//   }

//   return {
//     props: {},
//   };
// };

// CTAOneSection.getStaticProps = getStaticProps;