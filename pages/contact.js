import PageLayout from "@/components/Layout/Layout";
import Head from "next/head";
import { ContactformSection } from "@/components/sections/ContactPage/ContactformSection";
import Script from "next/script";

export default function ContactPage({ language, Theme }) {
  return (
    <>
      <Head>
        <title>Villo utvikling</title>
        <meta name="description" content="Villo utvikling kontakt skjema" />
        <meta
          name="keywords"
          content="contact form, kontaktskjema, skjema, kontakt, contact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="icon"
          href={Theme === "light" ? "/logo/WindLogoNoTextLightMode.svg" : "/logo/WindLogoNoTextDarkMode.svg"}
        />

      </Head>

      <ContactformSection language={language} Theme={Theme} />

    </>
  );
}
