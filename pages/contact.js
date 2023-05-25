import PageLayout from "@/components/Layout";
import Head from "next/head";
import { ContactformSection } from "@/components/sections/ContactformSection";

export default function ContactPage({ language, Theme }) {
  return (
    <>
      <Head>
        <title>JV Web Consult</title>
        <meta name="Villo utvikling" content="contact form" />
        <meta
          name="keywords"
          content="contact form, kontaktskjema, skjema, kontakt, contact"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo/WindLogoNoText.svg" />
      </Head>
      <PageLayout>
        <ContactformSection language={language} Theme={Theme} />
      </PageLayout>
    </>
  );
}
