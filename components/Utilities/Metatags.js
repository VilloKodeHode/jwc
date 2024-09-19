// components/MetaTags.js

import Head from "next/head";
import { useContext } from "react";

import { METATAG_DATA } from "@/data/metaTag_data";
import { UserContext } from "@/context/UserContext";

function MetaTags({ title, description, url }) {
  const { theme, language } = useContext(UserContext);
  return (
    <Head>
      <title>{title}</title>

      {/* Meta Tags for SEO */}
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="webutvikling, frontend, SEO, webdesign, utvikling, frontendutvikling, headless CMS, Sanity, MongoDB, Javascript, nettside, hjemmeside, bedriftside, klubbside, rimlige priser, freelance, erfaren, profesjonell, Vestfold, Telemark, Viken, Tønsberg, Horten, Sandefjord, Tjøme, Oslo, Drammen, Moss, Stokke, Norge, Norway"/>

      {/* OpenGraph Meta Tags for SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo/WindLogoNoTextLightMode.svg" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Villo utvikling " />

      {/* Twitter Meta Tags for SEO */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/logo/WindLogoNoTextLightMode.svg" />
      <meta name="twitter:title" content={title} />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* <link rel="manifest" href="/manifest.json" /> */}
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
