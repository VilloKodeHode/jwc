import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from '@vercel/speed-insights/next';
export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className={`scrollbar scrollbar-track-Villo-dark-black75 scrollbar-thumb-Villo-light-white20`}>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  );
}
