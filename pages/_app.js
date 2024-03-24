import { useContext, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Footer from "@/components/navigation/Footer";

import { useRouter } from "next/router";
import PageLayout from "@/components/Layout/Layout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import UserContextProvider, { UserContext } from "../components/Utilities/UserContext";
import { ScrollToTopButton } from "../components/base_components/Buttons";
import CookiePopup from "../components/features/CookiePopup/CookiePopup";


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
  const { theme } = useContext(UserContext);
  
  //TODO: Can this be moved to useContext?
  const router = useRouter();
  const currentPath = router.asPath;

//TODO: Se if this code here can be moved (make into a function and call it here?)
  useEffect(() => {
    // Function to check if an element is in the viewport
    function isElementInViewport(element, threshold = 0.6) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementTop = rect.top;
      return elementTop <= windowHeight * threshold;
    }

    // Function to handle the scroll event
    function handleScroll() {
      const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

      elementsToAnimate.forEach((element) => {
        if (isElementInViewport(element, 0.6)) {
          // Add your animation class or logic here
          element.classList.add('scroll-into-view'); // Apply your animation class
        }
      });
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check to see if the elements are already in the viewport on page load
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set a global JavaScript variable based on the Theme value
    window.appTheme = theme;
  }, [theme]);
  return (
    <>
      <UserContextProvider>
        <>
          <div className={`relative transition-colors duration-1000 `}>
            {/* //TODO: Make a context for header since there are alot of useStates there.... */}
            <Header
              currentPath={currentPath}
            />
            <Main Component={Component} />
            <Footer currentPath={currentPath} />
            <ScrollToTopButton />
          </div>
          <Analytics />
        </>
      </UserContextProvider>
    </>
  );
}