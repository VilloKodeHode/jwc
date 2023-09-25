import CallToActionButton, {
  ArrowCTA,
  CookieAccept,
  ToolsToggleButton,
} from "@/components/Buttons";
import {
  ThemedH5,
  ThemedP,
  ThemedSmall,
} from "@/components/Responsive text/ResponsiveText";
import Image from "next/image";
import { useEffect, useState } from "react";

const CookiePopup = ({ handleCookieAccept, language, Theme, cookiesAccepted }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
    handleCookieAccept();
  };

  const handleDecline = () => {
    setShowPopup(false);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    // Update showPopup based on cookiesAccepted when the component mounts
    setShowPopup(!cookiesAccepted);
  }, [cookiesAccepted]);

  return (
    <div
      className={`${showPopup ? "animate-CookiesSlideIn" : "animate-CookiesSlideOut"
        } fixed bottom-0 left-0 z-50 flex items-center justify-center group h-fit w-fit`}
    >
      <div
        className={`min-h-[131px] max-w-[300px] transition-all duration-300 bg-opacity-[0.95] px-6 py-4 outline m-2 rounded-xl  ${Theme === "light"
          ? "bg-Villo-light-white10 group-hover:bg-Villo-light-white20 outline-Villo-dark-black85"
          : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-black85  outline-Villo-dark-white10"
          }`}
      >
        <div className="relative grid items-center justify-center gap-2 pt-3">
          <ThemedH5 className={`pb-2`}>
            {language === "Norwegian" ? "Cookies" : "Cookies"}
          </ThemedH5>
          <ThemedSmall>
            {language === "Norwegian"
              ? "Denne nettsiden bruker cookies for å forbedre brukeropplevelsen din"
              : "This website uses cookies to improve your experience."}
          </ThemedSmall>
          <ThemedSmall
            className={` py-2
            `}
          >
            {language === "Norwegian"
              ? "Vi lagrer ikke informasjon som kan identifisere deg som person. Cookies blir lagret i 1 år"
              : "We do not store information that can identify you as a person. Cookies are stored for 1 year."}
          </ThemedSmall>
          <div className="flex justify-around gap-2">
            <CookieAccept onClick={handleAccept} Theme={Theme} className="">
              {language === "Norwegian" ? "Godta" : "Accept"}
            </CookieAccept>
            <CookieAccept onClick={handleDecline} Theme={Theme} className="">
              {language === "Norwegian" ? "Avslå" : "Decline"}
            </CookieAccept>
          </div>
        </div>
        <button onClick={handleShowPopup}>
          <Image
            src="/images/cookie_consent/noto_cookie.svg"
            width="50"
            height="50"
            alt="cookie"
            className={` absolute transition-all duration-500 bottom-[230px] left-[280px]
          ${showPopup
                ? ""
                : "bottom-[4px] left-[320px] hover:scale-125 opacity-30 hover:animate-cookieShake hover:opacity-100"
              }
          `}
          ></Image>
        </button>
        {/* <ToolsToggleButton
          Theme={Theme}
          onClick={handleShowPopup}
          className={`absolute top-1/3 hover:translate-x-5 -right-5 ${
            !showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-all duration-1000`}
        /> */}
      </div>
    </div>
  );
};

export default CookiePopup;
