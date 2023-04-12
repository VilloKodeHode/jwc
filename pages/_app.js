import { useState } from "react";
import Header from "@/components/navigation/Header";
import "@/styles/globals.css";
import Drawer from "@/components/navigation/Drawer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "@/components/navigation/Footer";
// import { IBM_Plex_Mono, Inter, PT_Serif } from "@next/font/google";

const theme = extendTheme({
  colors: {
    JWC: {
      primary: "#ac6bde",
      // 100: "#ac6bde",
      secondary: "#eb65cf",
      // 200: "#eb65cf",
      tertiary: "#6865eb",
      700: "#6865eb",

      //font colors:
      black: "#312b35",
      // 100: "#312b35",
      black75: "#656068",
      500: "#656068",
      black50: "#98959a",
      600: "#98959a",
      black25: "#cbcacc",
      1000: "#cbcacc",
      black15: "#e0dfe1",
      800: "#e0dfe1",
      logo: "#3c4343",
      900: "#3c4343",
      white: "#fbf7fd",
      white10: "#f7f1fc",
      100: "#f7f1fc",
    },
  },
});

// const mono = IBM_Plex_Mono({
//   variable: "--font-mono",
//   subsets: ["latin"],
//   weight: ["500", "700"],
// });

// const sans = Inter({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   weight: ["500", "700", "800"],
// });

// const serif = PT_Serif({
//   variable: "--font-serif",
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style> */}

      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
