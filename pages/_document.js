import ThemeContext from "@/components/Utilities/ThemeSwitch/ThemeContext";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useContext } from "react";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className={`scrollbar scrollbar-track-Villo-dark-black75 scrollbar-thumb-Villo-light-white20`}>
        <Main />
        <NextScript />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-METSFG26LN" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-METSFG26LN');
        `}
        </Script>
      </body>
    </Html>
  );
}
