import { useContext, useState } from "react";
import CallToActionButton from "@/components/Buttons";
import PageLayout, { EqualTwoGrids, TextFlex } from "@/components/Layout";
import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveH4,
  ResponsiveP,
} from "@/components/Responsive text/ResponsiveText";
import Image from "next/image";
import Head from "next/head";
import LanguageContext from "@/components/Utilities/LanguageSwitch/LanguageContext";
import {
  ContactformSection,
  OldContactformSection,
} from "@/components/sections/ContactformSection";

export default function ContactPage() {
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
        <ContactformSection />
      </PageLayout>
    </>
  );
}
