import { useContext, useEffect } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import { ScrollToTopButton } from "@/components/Buttons";
import ThemeContext from "@/components/Utilities/ThemeSwitch/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { ContextProviders } from "@/components/Utilities/CombinedContextProvider";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { language, setLanguage } = useContext(LanguageContext);
  const { Theme, setTheme } = useContext(ThemeContext);

  const currentPath = router.asPath;

  useEffect(() => {
    console.log("Current path changed:", currentPath);
  }, [currentPath]);

  return (
    <div className={
      Theme === "light" ? "bg-Villo-light-white" : "bg-Villo-dark-black bg-opacity"
    }>
      <ChakraProvider>
        <Header
          language={language}
          setLanguage={setLanguage}
          Theme={Theme}
          setTheme={setTheme}
          currentPath={currentPath}
        />
        <div
          className={
            Theme === "light" ? "bg-Villo-light-white" : "bg-Villo-dark-black bg-opacity"
          }
        >
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
      </ChakraProvider>
    </div>
  );
}
