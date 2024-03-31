
import Image from "next/image";
import { useContext, useState } from "react";
import { setCookie } from "cookies-next";
import { UserContext } from "@/context/UserContext";
import { ThemedH5, ThemedSmall } from "../../atoms/ResponsiveText";
import { CookieAccept } from "../../atoms/Buttons";

const CookiePopup = () => {

  const {language, theme, cookiesAccepted, setCookiesAccepted} = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleCookieAccept = () => {
    // Set a cookie to remember that the user has accepted cookies
    setCookie("acceptedCookies", "true", {
      maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year)
    });
    setCookiesAccepted(true);
  };

const handleCookieDecline = () => {
  setCookie("acceptedCookies", "false", {
    maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year)
  });
  setCookiesAccepted(false);
}

  const handleAccept = () => {
    setShowPopup(false);
    handleCookieAccept();
  };

  const handleDecline = () => {
    setShowPopup(false);
    handleCookieDecline();
  };

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  // useEffect(() => {
  //   setShowPopup(!showPopup);
  // }, [showPopup]);

  return (
    <div
      className={`${showPopup ? "animate-CookiesSlideIn" : "animate-CookiesSlideOut"
        } fixed bottom-0 -left-[320px] z-50 flex items-center justify-center group h-fit w-fit`}
    >
      <div
        className={`min-h-[131px] max-w-[300px] transition-all duration-300 bg-opacity-[0.95] px-6 py-4 outline m-2 rounded-xl  ${theme === "light"
          ? "bg-Villo-light-white10 group-hover:bg-Villo-light-white15 outline-Villo-light-black85"
          : "bg-Villo-dark-black75 group-hover:bg-Villo-dark-black85 outline-Villo-dark-white10"
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
            <CookieAccept onClick={handleAccept}  className="">
              {language === "Norwegian" ? "Godta" : "Accept"}
            </CookieAccept>
            <CookieAccept onClick={handleDecline}  className="">
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
            className={`absolute transition-all duration-500 
          ${showPopup
                ? "bottom-[230px] sm:bottom-[242px] left-[280px] sm:left-[290px]"
                : "bottom-[4px] left-[320px] sm:bottom-[18px] sm:left-[334px] hover:scale-125 opacity-30 hover:animate-cookieShake hover:opacity-100"
              }
          `}
          ></Image>
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
