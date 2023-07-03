import { useContext } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ScrollToTopButton } from "@/components/Buttons";
import ThemeContext from "@/components/Utilities/ThemeSwitch/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { ContextProviders } from "@/components/Utilities/CombinedContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ContextProviders>
        <AppContent Component={Component} pageProps={pageProps} />
      </ContextProviders>
    </>
  );
}

function AppContent({ Component, pageProps }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { Theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <ChakraProvider>
        <Header
          language={language}
          setLanguage={setLanguage}
          Theme={Theme}
          setTheme={setTheme}
        />
        <div
          className={Theme === "light" ? "bg-Villo-white" : "bg-Villo-black"}
        >
          <Component {...pageProps} language={language} Theme={Theme} />
          <Analytics />
        </div>
        <Footer language={language} Theme={Theme} />
        <ScrollToTopButton Theme={Theme} />
      </ChakraProvider>
    </div>
  );
}
