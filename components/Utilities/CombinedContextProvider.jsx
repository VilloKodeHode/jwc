import { useEffect, useState } from "react";
import LanguageContext from "./LanguageSwitch/LanguageContext";
import ThemeContext from "./ThemeSwitch/ThemeContext";

export const ContextProviders = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setLanguage(navigator.language === "nb-NO" ? "Norwegian" : "English");
    } else {
      setLanguage("English"); // fallback language if navigator is not defined
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ Theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
