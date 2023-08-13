import Image from "next/image";
import { ResponsiveH2, ThemedP } from "../Responsive text/ResponsiveText";
import LanguageContext from "../Utilities/LanguageSwitch/LanguageContext";
import { useContext, useEffect, useState } from "react";

export const CTAOneSection = ({ language, Theme }) => {
  const [currentWeb, setCurrentWeb] = useState("/HeroLogo.png");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        switch (currentWeb) {
          case "/HeroLogo.png":
            setCurrentWeb("/HeroDesign.png");
            break;
          case "/HeroDesign.png":
            setCurrentWeb("/HeroDevelopment.png");
            break;
          case "/HeroDevelopment.png":
            setCurrentWeb("/HeroCollage.webp");
            break;
          case "/HeroCollage.webp":
            setCurrentWeb("/HeroLogo.png");
            break;
          default:
            setCurrentWeb("/HeroLogo.png");
        }
        setIsAnimating(false);
      }, 500); // Adjust the duration here
    }, 5500);

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
                    onMouseEnter={() => setCurrentWeb("/HeroDesign.png")}
                    className={`cursor-pointer group  ${Theme === "light" ? "text-Villo-light-primary" : "text-Villo-dark-primary"}`}
                  >
                    <span
                      className={` ${Theme === "light" ? "group-hover:text-Villo-light-primary" : "group-hover:text-Villo-dark-primary"}  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
                        currentWeb === "/HeroDesign.png"
                          ? "text-Villo-dark-primary"
                          : Theme === "light"
                           ? "text-Villo-light-white10"
                          : "text-Villo-dark-black75"
                      }`}
                    >
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroDevelopment.png")}
                       className={`cursor-pointer group  ${Theme === "light" ? "text-Villo-light-primary" : "text-Villo-dark-primary"}`}
                  >
                    <span
                      className={` ${Theme === "light" ? "group-hover:text-Villo-light-primary" : "group-hover:text-Villo-dark-primary"}  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
                        currentWeb === "/HeroDevelopment.png"
                          ? "text-Villo-dark-primary"
                          : Theme === "light"
                           ? "text-Villo-light-white10"
                          : "text-Villo-dark-black75"
                      }`}
                    >
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "development"}
                  </span>{" "}
                  <span
                    onMouseEnter={() => setCurrentWeb("/HeroCollage.webp")}
                    className={`cursor-pointer group  ${Theme === "light" ? "text-Villo-light-primary" : "text-Villo-dark-primary"}`}
                  >
                    <span
                      className={` ${Theme === "light" ? "group-hover:text-Villo-light-primary" : "group-hover:text-Villo-dark-primary"}  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
                        currentWeb === "/HeroCollage.webp"
                          ? "text-Villo-dark-primary"
                          : Theme === "light"
                          ? "text-Villo-light-white10"
                          : "text-Villo-dark-black75"
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
                <div className={`transition-all border border-b-8 border-r-8 w-fit h-fit rounded-xl ${Theme === "light" ? "border-Villo-light-primary" : "border-Villo-dark-primary"}  `}>
                  <Image
                    src={currentWeb}
                    alt="intro image"
                    width={400}
                    height={400}
                    className={`object-cover duration-500 bg-Villo-dark-primary transition-all rounded-[4px] rounded-tl-xl xl:w-[550px] xl-h md:w-full md:h-full ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    } `}
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
//     "/HeroLogo.png",
//     "/HeroDesign.png",
//     "/HeroDevelopment.png",
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