import CallToActionButton, {
  ArrowCTA,
  CookieAccept,
} from "@/components/Buttons";
import { ThemedP } from "@/components/Responsive text/ResponsiveText";
import { useState } from "react";

const CookiePopup = ({ handleCookieAccept, language, Theme }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
    handleCookieAccept();
  };

  // TODO: When accepting cookies it should save the current theme and language in cookies, not a standard value as it does now

  return showPopup ? (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center animate-PageAppearRight group h-fit w-fit">
      <div
        className={`min-h-[131px] max-w-[300px] transition-colors duration-300 bg-opacity-[0.95] p-8 rounded-tr-[60px]  ${
          Theme === "light"
            ? "bg-Villo-light-white10 group-hover:bg-Villo-light-white20"
            : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-black85"
        }`}
      >
        <ThemedP>
          {language === "Norwegian"
            ? "Denne nettsiden bruker cookies for å forbedre brukeropplevelsen din"
            : "This website uses cookies to improve your experience."}
        </ThemedP>
        <ThemedP
          className={` py-4
            `}
        >
          {language === "Norwegian"
            ? "Vi lagrer ikke informasjon som kan identifisere deg som person. Cookies blir kun lagret i 30 dager"
            : "We do not store information that can identify you as a person. Cookies are only stored for 30 days."}
        </ThemedP>
        <CookieAccept onClick={handleAccept} Theme={Theme} className="">
          {language === "Norwegian" ? "Godta cookies" : "Accept cookies"}
        </CookieAccept>
      </div>
    </div>
  ) : null;
};

export default CookiePopup;
