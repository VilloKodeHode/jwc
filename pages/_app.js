import { useState, useEffect } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ScrollToTopButton } from "@/components/Buttons";

const theme = extendTheme({
  colors: {
    JWC: {
      primary: "#a2cbcc",
      400: "#ac6bde",
      secondary: "#f78f6a",
      700: "#f78f6a",
      tertiary: "#387184",
      100: "#387184",

      //font colors:
      black: "#202929",
      // 100: "#312b35",
      black75: "#585f5f",
      // 500: "#585f5f",
      black50: "#909494",
      // 600: "#909494",
      black25: "#c7c9c9",
      1000: "#c7c9c9",
      black15: "#dedfdf",
      // 800: "#dedfdf",
      logo: "#3c4343",
      // 900: "#3c4343",
      white: "#fdfdfd",
      white10: "#f6fafa",
      // 100: "#f6fafa",
    },
  },
});

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState("");

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
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ScrollToTopButton />
        </ChakraProvider>
      </LanguageContext.Provider>
    </>
  );
}
