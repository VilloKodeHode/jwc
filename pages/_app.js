import { useContext, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Footer from "@/components/navigation/Footer";

import { useRouter } from "next/router";
import PageLayout from "@/components/Layout/Layout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import UserContextProvider, { UserContext } from "@/context/UserContext";
import { ScrollToTopButton } from "@/components/atoms/Buttons";
import CookiePopup from "@/components/features/CookiePopup/CookiePopup";
import { AddScrollToElement } from "@/components/Utilities/handleScroll";
import NavigationContextProvider from "@/context/NavigationContext";

export const Main = ({ Component }) => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={` transition-colors duration-1000 ${theme === "light" ? "bg-Villo-light-white" : "bg-Villo-dark-black"
        }`}
    >
      <CookiePopup />
      <PageLayout>
        <Component />
      </PageLayout>
      <SpeedInsights />
      <Script
        src="https://cdn.addrow.com/ads/viewability251.js"
        strategy="lazyOnload"
      />
    </div>
  )
}

export default function App({ Component }) {
  
  //TODO: Can this be moved to useContext?

AddScrollToElement()
 
  return (
    <>
      <UserContextProvider>
        <NavigationContextProvider>
        <>
          <div className={`relative transition-colors duration-1000 `}>
            {/* //TODO: Make a context for header since there are alot of useStates there.... */}
            <Header
           
            />
            <Main Component={Component} />
            <Footer />
            <ScrollToTopButton />
          </div>
          <Analytics />
        </>
        </NavigationContextProvider>
      </UserContextProvider>
    </>
  );
}