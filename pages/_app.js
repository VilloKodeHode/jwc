import { useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ScrollToTopButton } from "@/components/Buttons";
import ThemeContext from "@/components/Utilities/ThemeSwitch/ThemeContext";
import LoadingScreen from "./loading";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
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
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ Theme, setTheme }}>
          <ChakraProvider>
            <Header />
            <div
              className={
                Theme === "light"
                  ? "bg-Villo-white15"
                  : "bg-Villo-backgroundBlack"
              }
            >
              <Component {...pageProps} />
              <Analytics />
            </div>
            <Footer />
            <ScrollToTopButton />
          </ChakraProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>
  );
}
