import { useContext, useEffect } from "react";
import LanguageContext from "./LanguageContext";
import NORWEGIAN from "./assets/norwegian.png";
import ENGLISH from "./assets/english.png";
import Image from "next/image";
import { setCookie, getCookie } from "cookies-next"; // Import the necessary functions

const LanguageSwitch = ({ cookiesAccepted, className }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (cookiesAccepted) {
      // Check if the language cookie is set
      const storedLanguage = getCookie("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, [setLanguage, cookiesAccepted]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    // Set the language cookie based on the selected language
    if (cookiesAccepted) {
      setCookie("language", newLanguage, {
        maxAge: 30 * 24 * 60 * 60, // Cookie expiration in seconds (30 days in this example)
      });
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
