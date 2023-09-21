import { useEffect, useState } from "react";
import LanguageContext from "./LanguageSwitch/LanguageContext";
import ThemeContext from "./ThemeSwitch/ThemeContext";
import { setCookie, getCookie } from "cookies-next"; // Import setCookie and getCookie

export const ContextProviders = ({ children, cookiesAccepted }) => {
  const [language, setLanguage] = useState("");
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check if the theme and language cookies are set, but only if cookiesAccepted is true
    if (cookiesAccepted) {
      const storedTheme = getCookie("theme");
      const storedLanguage = getCookie("language");

      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        // If the theme cookie is not set, detect the user's preferred theme using window.matchMedia
        if (typeof window !== "undefined") {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            // Set the theme cookie based on the detected theme
            setCookie("theme", "dark", {
              maxAge: 30 * 24 * 60 * 60,
            });
          } else {
            setTheme("light");
            // Set the theme cookie based on the detected theme
            setCookie("theme", "light", {
              maxAge: 30 * 24 * 60 * 60,
            });
          }
        }
      }

      if (storedLanguage) {
        setLanguage(storedLanguage);
      } else {
        // If the language cookie is not set, detect the user's preferred language using navigator.language
        if (typeof navigator !== "undefined") {
          const userLanguage =
            navigator.language === "nb-NO" ? "Norwegian" : "English";
          setLanguage(userLanguage);
          // Set the language cookie based on the detected language
          setCookie("language", userLanguage, {
            maxAge: 30 * 24 * 60 * 60,
          });
        } else {
          setLanguage("English"); // fallback language if navigator is not defined
        }
      }
    }
  }, [cookiesAccepted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ Theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
