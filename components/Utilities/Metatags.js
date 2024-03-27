// components/MetaTags.js

import Head from "next/head";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { METATAG_DATA } from "../../data/metaTag_data";

function MetaTags({ title, description, url }) {
  const { theme, language } = useContext(UserContext);
  return (
    <Head>
      <title>{title}</title>

      {/* Meta Tags for SEO */}
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* OpenGraph Meta Tags for SEO */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="/logo/WindLogoNoTextLightMode.svg" />
      <meta name="og:url" content={url} />
      <meta name="og:type" content="website" />

      {/* Twitter Meta Tags for SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/logo/WindLogoNoTextLightMode.svg" />
      <meta name="twitter:title" content={title} />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        href={
          theme === "light"
            ? "/logo/WindLogoNoTextLightMode.svg"
            : "/logo/WindLogoNoTextDarkMode.svg"
        }
      />

      {/* @ts-ignore */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-METSFG26LN" />
      <script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-METSFG26LN');
        `}
      </script>


    </Head>
  );
}

export const DynamicMetaTags = ({ page }) => {
  return (
    <>
      <MetaTags
        description={METATAG_DATA[page].description}
        title={METATAG_DATA[page].title}
        url={METATAG_DATA[page].url}
      />
    </>
  )
}


export default MetaTags;
