import { useContext, useEffect } from "react";
import LanguageContext from "./LanguageContext";
import NORWEGIAN from "./assets/norwegian.png";
import ENGLISH from "./assets/english.png";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next"; // Import the necessary functions

const LanguageSwitch = ({ cookiesAccepted, className }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Check if cookies are accepted and the language cookie is set
    const storedLanguage = cookiesAccepted ? getCookie("language") : null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    console.log("Is theme cookie set?", !!storedLanguage);
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
        className={`w-6 hover:scale-110 transition h-6 cursor-pointer ${
          language === "Norwegian" ? "opacity-100" : "opacity-50"
        }`}
        alt="Norwegian"
        width={50}
        height={50}
        onClick={() => {
          changeLanguage("Norwegian");
        }}
      />
      <Image
        src={ENGLISH}
        className={`w-6 h-6 hover:scale-110 transition cursor-pointer ${
          language === "English" ? "opacity-100" : "opacity-50"
        }`}
        alt="English"
        width={50}
        height={50}
        onClick={() => {
          changeLanguage("English");
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
