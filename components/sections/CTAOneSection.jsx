import Image from "next/image";
import { ResponsiveH2, ThemedP } from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import { useContext, useEffect, useState } from "react";

export const CTAOneSection = ({ language, Theme }) => {
  const [currentWeb, setCurrentWeb] = useState("/Hero8.png");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        switch (currentWeb) {
          case "/Hero8.png":
            setCurrentWeb("/HeroDesign.webp");
            break;
          case "/HeroDesign.webp":
            setCurrentWeb("/HeroDevelopment.webp");
            break;
          case "/HeroDevelopment.webp":
            setCurrentWeb("/HeroCollage.webp");
            break;
          case "/HeroCollage.webp":
            setCurrentWeb("/Hero8.png");
            break;
          default:
            setCurrentWeb("/Hero8.png");
        }
        setIsAnimating(false);
      }, 500); // Adjust the duration to match your animation
    }, 3500);

    return () => clearInterval(interval);
  }, [currentWeb]);

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
                    className="cursor-pointer group text-Villo-primary"
                  >
                    <span
                      className={`group-hover:text-Villo-primary group-hover:opacity-100 transition-all duration-500 opacity-80 text-Villo-black50 h1hidden ${
                        currentWeb === "/HeroDesign.webp"
                          ? "text-Villo-primary"
                          : ""
                      }`}
                    >
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDevelopment.webp")}
                    className="cursor-pointer group text-Villo-secondary w-fit"
                  >
                    <span
                      className={`group-hover:text-Villo-secondary group-hover:opacity-100 transition-all duration-500 opacity-80 text-Villo-black50 h1hidden ${
                        currentWeb === "/HeroDevelopment.webp"
                          ? "text-Villo-secondary"
                          : ""
                      }`}
                    >
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "development"}
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    className="cursor-pointer group text-Villo-tertiary w-fit"
                  >
                    <span
                      className={`group-hover:text-Villo-tertiary transition-all duration-500 group-hover:opacity-100 opacity-80 text-Villo-black50 h1hidden ${
                        currentWeb === "/HeroCollage.webp"
                          ? "text-Villo-tertiary"
                          : ""
                      }`}
                    >
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
              <div className={`relative z-10 grid justify-center`}>
                <div className="transition-opacity">
                  <Image
                    src={currentWeb}
                    alt="intro image"
                    width={400}
                    height={400}
                    className={`object-cover duration-500 md:w-full md:h-full ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    } shadowblend`}
                    priority={true}
                  />
                </div>
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