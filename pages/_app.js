import { useContext, useEffect, useState } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Footer from "@/components/navigation/Footer";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ScrollToTopButton } from "@/components/Buttons";
import ThemeContext from "@/components/Utilities/ThemeSwitch/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { ContextProviders } from "@/components/Utilities/CombinedContextProvider";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "cookies-next";
import CookiePopup from "@/components/Utilities/CookiePopup/CookiePopup";

export default function App({ Component, pageProps }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const { setLanguage } = useContext(LanguageContext);
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Check if the theme and language cookies are set
    const storedTheme = getCookie("theme");
    const storedLanguage = getCookie("language");

    if (storedTheme) {
      setTheme(storedTheme);
    }

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    // Check if the user has accepted cookies by checking a cookie
    const acceptedCookies = getCookie("acceptedCookies");
    if (acceptedCookies) {
      setCookiesAccepted(true);
    }
  }, [setTheme, setLanguage]);

  // Callback to handle cookie acceptance
  const handleCookieAccept = () => {
    // Set a cookie to remember that the user has accepted cookies
    setCookie("acceptedCookies", "true", {
      maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year)
    });
    setCookiesAccepted(true);
  };

  return (
    <>
      <ContextProviders cookiesAccepted={cookiesAccepted}>
        <AppContent
          Component={Component}
          pageProps={pageProps}
          cookiesAccepted={cookiesAccepted}
          handleCookieAccept={handleCookieAccept}
        />
      </ContextProviders>
    </>
  );
}

function AppContent({
  Component,
  pageProps,
  cookiesAccepted,
  handleCookieAccept,
}) {
  const router = useRouter();
  const { language, setLanguage } = useContext(LanguageContext);
  const { Theme, setTheme } = useContext(ThemeContext);

  const currentPath = router.asPath;

  useEffect(() => {
    console.log("Current path changed:", currentPath);
  }, [currentPath]);

  return (
    <div
      className={`relative transition-colors duration-1000 ${
        Theme === "light"
          ? "bg-Villo-light-white"
          : "bg-Villo-dark-black bg-opacity"
      }`}
    >
      <Header
        language={language}
        setLanguage={setLanguage}
        Theme={Theme}
        setTheme={setTheme}
        currentPath={currentPath}
        cookiesAccepted={cookiesAccepted}
      />
      <div
        className={` transition-colors duration-1000 ${
          Theme === "light"
            ? "bg-Villo-light-white"
            : "bg-Villo-dark-black bg-opacity"
        }`}
      >
        {!cookiesAccepted && (
          <CookiePopup
            handleCookieAccept={handleCookieAccept}
            language={language}
            Theme={Theme}
          />
        )}
        <Component
          {...pageProps}
          language={language}
          Theme={Theme}
          currentPath={currentPath}
        />
        <Analytics />
      </div>
      <Footer language={language} Theme={Theme} currentPath={currentPath} />
      <ScrollToTopButton Theme={Theme} />
    </div>
  );
}
