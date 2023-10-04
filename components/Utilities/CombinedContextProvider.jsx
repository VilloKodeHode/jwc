import { useEffect, useState } from "react";
import LanguageContext from "./LanguageSwitch/LanguageContext";
import ThemeContext from "./ThemeSwitch/ThemeContext";
import { setCookie, getCookie } from "cookies-next"; // Import setCookie and getCookie

export const ContextProviders = ({ children, cookiesAccepted }) => {
  const [language, setLanguage] = useState("Norwegian");
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check if cookies are accepted
    if (cookiesAccepted) {
      // Set the theme cookie to the current theme
      setCookie("theme", Theme, {
        maxAge: 30 * 24 * 60 * 60,
      });

      // Set the language cookie to the current language
      setCookie("language", language, {
        maxAge: 365 * 24 * 60 * 60,
      });
    }
  }, [cookiesAccepted, Theme, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ Theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
