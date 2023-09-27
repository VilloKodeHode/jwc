// components/MetaTags.js

import Head from "next/head";

function MetaTags({ title, description, url, Theme }) {
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
          Theme === "light"
            ? "/logo/WindLogoNoTextLightMode.svg"
            : "/logo/WindLogoNoTextDarkMode.svg"
        }
      />
    </Head>
  );
}

export default MetaTags;
