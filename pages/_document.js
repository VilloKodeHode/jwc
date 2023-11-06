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

      </body>
    </Html>
  );
}
