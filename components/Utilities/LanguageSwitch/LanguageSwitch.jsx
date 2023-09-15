import { useContext } from "react";
import LanguageContext from "./LanguageContext";

//images:
import NORWEGIAN from "./assets/norwegian.png";
import ENGLISH from "./assets/english.png";
import Image from "next/image";

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="flex gap-3">
      <Image
        src={NORWEGIAN}
        className={`w-6 hover:scale-110 transition h-6 cursor-pointer ${language === "Norwegian" ? "opacity-100" : "opacity-50"
          }`}
        alt="Norwegian"
        width={50}
        height={50}
        onClick={() => {
          setLanguage("Norwegian");
        }}
      />
      <Image
        src={ENGLISH}
        className={`w-6 h-6 hover:scale-110 transition cursor-pointer ${language === "English" ? "opacity-100" : "opacity-50"
          }`}
        alt="English"
        width={50}
        height={50}
        onClick={() => {
          setLanguage("English");
        }}
      />
    </div>
  );
};

export default LanguageSwitch;
