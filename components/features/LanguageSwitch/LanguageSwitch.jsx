import { useContext, useEffect } from "react";
import NORWEGIAN from "./assets/norwegian.png";
import ENGLISH from "./assets/english.png";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next"; // Import the necessary functions
import { UserContext } from "../../Utilities/UserContext";

const LanguageSwitch = ({ className }) => {
  const { language, setLanguage, cookiesAccepted } = useContext(UserContext);

  useEffect(() => {
    // Check if cookies are accepted and the language cookie is set
    const storedLanguage = cookiesAccepted ? getCookie("language") : null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [setLanguage, cookiesAccepted]);

  const changeLanguage = () => {
    if (language === "Norwegian") {
      setLanguage("English");
      if (cookiesAccepted) {
        setCookie("language", "English", {
          maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year in this example)
        });
      }
    } else {
      setLanguage("Norwegian");
      if (cookiesAccepted) {
        setCookie("language", "Norwegian", {
          maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year in this example)
        });
      }
    }
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <Image
        src={NORWEGIAN}
        className={`w-full hover:scale-125 transition h-5 cursor-pointer ${language === "Norwegian" ? "scale-110 opacity-100" : "opacity-40"
          }`}
        alt="Norwegian"
        width={450}
        height={300}
        onClick={() => {
          changeLanguage("Norwegian");
        }}
      />
      <Image
        src={ENGLISH}
        className={`w-full h-5 hover:scale-125 transition cursor-pointer ${language === "English" ? "scale-110 opacity-100" : "opacity-40"
          }`}
        alt="English"
        width={500}
        height={350}
        onClick={() => {
          changeLanguage("English");
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
