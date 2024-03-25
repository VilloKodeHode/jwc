import Image from "next/image";
import { ResponsiveH2, ThemedP } from "../../base_components/ResponsiveText";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Utilities/UserContext";

export const CTAOneSection = () => {
  const { language, theme } = useContext(UserContext);
  const [currentWeb, setCurrentWeb] = useState("/images/showcase/HeroLogo.png");
  const [isAnimating, setIsAnimating] = useState(false);

//TODO: Reduser koden (diss Sabine etterpå)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        switch (currentWeb) {
          case "/images/showcase/HeroLogo.png":
            setCurrentWeb("/images/showcase/HeroDesign.png");
            break;
          case "/images/showcase/HeroDesign.png":
            setCurrentWeb("/images/showcase/HeroDevelopment.png");
            break;
          case "/images/showcase/HeroDevelopment.png":
            setCurrentWeb("/images/showcase/HeroCollage.webp");
            break;
          case "/images/showcase/HeroCollage.webp":
            setCurrentWeb("/images/showcase/HeroLogo.png");
            break;
          default:
            setCurrentWeb("/images/showcase/HeroLogo.png");
        }
        setIsAnimating(false);
      }, 500); // Adjust the duration here
    }, 5500);

    return () => clearInterval(interval);
  }, [currentWeb]);

  const imageWidth = currentWeb === "/images/showcase/HeroLogo.png" ? 400 : 500;
  const imageHeight =
    currentWeb === "/images/showcase/HeroLogo.png" ? 400 : 300;

  return (
    <>
      <section
        className="relative animate-on-scroll opacity-0 z-10 flex items-center justify-center w-full h-[100vh] group/imageEffect"
        id="CTAOneSection"
      >
        <div className="flex items-center justify-center h-full m-0">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative z-10 select-none">
                <ResponsiveH2 className="mb-8 ">
                  <span
                    onMouseEnter={() =>
                      setCurrentWeb("/images/showcase/HeroDesign.png")
                    }
                    className={`cursor-pointer group  ${
                      theme === "light"
                        ? "text-Villo-light-primary"
                        : "text-Villo-dark-primary"
                    }`}
                  >
                    <span
                      className={` ${
                        theme === "light"
                          ? "group-hover:text-Villo-light-primary"
                          : "group-hover:text-Villo-dark-primary"
                      }  group-hover:opacity-100 transition-all duration-500 opacity-80 h1hidden ${
                        currentWeb === "/images/showcase/HeroDesign.png"
                          ? "text-Villo-dark-primary"
                          : theme === "light"
                          ? "text-Villo-light-white20"
                          : "text-Villo-dark-black50"
                      }`}
                    >
                      Web
                    </span>
                    design
                  </span>{" "}
                  <span
                    onMouseEnter={() =>
                      setCurrentWeb("/images/showcase/HeroDevelopment.png")
                    }
                    className={`cursor-pointer group  ${
                      theme === "light"
                        ? "text-Villo-light-primary"
                        : "text-Villo-dark-primary"
                    }`}
                  >
                    <span
                      className={` ${
                        theme === "light"
                          ? "group-hover:text-Villo-light-primary"
                          : "group-hover:text-Villo-dark-primary"
                      }  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
                        currentWeb === "/images/showcase/HeroDevelopment.png"
                          ? "text-Villo-dark-primary"
                          : theme === "light"
                          ? "text-Villo-light-white20"
                          : "text-Villo-dark-black50"
                      }`}
                    >
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "utvikling" : "development"}
                  </span>{" "}
                  <span
                    onMouseEnter={() =>
                      setCurrentWeb("/images/showcase/HeroCollage.webp")
                    }
                    className={`cursor-pointer group  ${
                      theme === "light"
                        ? "text-Villo-light-primary"
                        : "text-Villo-dark-primary"
                    }`}
                  >
                    <span
                      className={` ${
                        theme === "light"
                          ? "group-hover:text-Villo-light-primary"
                          : "group-hover:text-Villo-dark-primary"
                      }  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
                        currentWeb === "/images/showcase/HeroCollage.webp"
                          ? "text-Villo-dark-primary"
                          : theme === "light"
                          ? "text-Villo-light-white20"
                          : "text-Villo-dark-black50"
                      }`}
                    >
                      <br />
                      Web
                    </span>
                    {language === "Norwegian" ? "innhold" : "content"}
                  </span>
                </ResponsiveH2>
                <ThemedP className="md:max-w-md max-h-[48px] mb-8">
                  {currentWeb === "/images/showcase/HeroLogo.png"
                    ? language === "Norwegian"
                      ? "Engasjerende nettsider for ditt formål: Fra enkle til komplekse nettsider, som er tilpasset alle enheter."
                      : "Engaging websites for your purpose: From simple to complex websites, customized for all devices."
                    : currentWeb === "/images/showcase/HeroDesign.png"
                    ? language === "Norwegian"
                      ? "Gjennomgående design som er estetisk og funksjonelt, med fokus på brukervennlighet og konvertering"
                      : "Consistent design that is aesthetic and functional, with a focus on user-friendliness and conversion"
                    : currentWeb === "/images/showcase/HeroDevelopment.png"
                    ? language === "Norwegian"
                      ? "Ekspertise innenfor utvikling av nettsider som er lette å vedlikeholde og endre innhold på"
                      : "Expertise in developing websites that are easy to maintain and change content on"
                    : currentWeb === "/images/showcase/HeroCollage.webp"
                    ? language === "Norwegian"
                      ? "Originalt høykvalitets innhold til nettsiden din, som er tilpasset ditt formål og målgruppe"
                      : "Original high-quality content for your website, customized for your purpose and target audience"
                    : null}
                </ThemedP>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className={`relative z-10 grid items-center justify-center`}>
                <div
                  className={`transition-all border border-b-8 border-r-8 w-fit md:h-[450px] rounded-xl ${
                    theme === "light"
                      ? "border-Villo-light-primary"
                      : "border-Villo-dark-primary"
                  }  `}
                >
                  <Image
                    src={currentWeb}
                    alt={
                      currentWeb === "/images/showcase/HeroLogo.png"
                        ? "Logo"
                        : currentWeb === "/images/showcase/HeroLogo.png"
                        ? "Villo utvikling"
                        : currentWeb === "/images/showcase/HeroDesign.png"
                        ? "Web design"
                        : currentWeb === "/images/showcase/HeroDevelopment.png"
                        ? "Web utvikling"
                        : currentWeb === "/images/showcase/HeroCollage.webp"
                        ? "Web innhold"
                        : "Image showing the services of Villo utvikling"
                    }
                    width={imageWidth}
                    height={imageHeight}
                    className={`object-cover duration-500 bg-Villo-dark-primary transition-all rounded-[4px] rounded-tl-xl xl:w-[550px] lg:w-[500px] md:w-full md:h-full h-[300px] ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    } `}
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
